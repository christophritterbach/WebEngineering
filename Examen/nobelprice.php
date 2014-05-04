<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$myApp = new \Slim\Slim();
$myApp->get('/nobelprice', function () use ($myApp) {
   $year = $myApp->request()->get('year');
   $category = $myApp->request()->get('category');
   if(!($sock = socket_create(AF_INET, SOCK_STREAM, 0))) {
      $errorcode = socket_last_error();
      $errormsg = socket_strerror($errorcode);
      die("Couldn't create socket: [$errorcode] $errormsg \n");
   }
    
   //echo "Socket created \n";
   // http://api.nobelprize.org/v1/prize.json?year=1990 
   //Connect socket to remote server
   if(!socket_connect($sock , 'api.nobelprize.org' , 80)) {
      $errorcode = socket_last_error();
      $errormsg = socket_strerror($errorcode);
      die("Could not connect: [$errorcode] $errormsg \n");
   }
   //echo "Connection established \n";
   $message = "GET /v1/prize.json?year=" . $year;
   if (strlen($category) > 0) {
      $message = $message . "&category=" . $category;
   }
   $message = $message . " HTTP/1.1\r\nHost: api.nobelprize.org\r\n\r\n";
   //Send the message to the server
   if( ! socket_send ( $sock , $message , strlen($message) , 0)) {
      $errorcode = socket_last_error();
      $errormsg = socket_strerror($errorcode);
      die("Could not send data: [$errorcode] $errormsg \n");
   }
   //echo "Message send successfully \n";
   //Now receive reply from server
   if(socket_recv ( $sock , $buf , 8000 , MSG_WAITALL ) === FALSE) {
      $errorcode = socket_last_error();
      $errormsg = socket_strerror($errorcode);
      die("Could not receive data: [$errorcode] $errormsg \n");
   }
   //print the received message
   $i = strpos ($buf, "\r\n\r\n");
   echo substr($buf, $i+4);
});
$myApp->options('/nobelprice', function () use ($myApp) {
   $myApp->response()->header('Allow', 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH');
   $myApp->response()->header('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization');
   $myApp->response()->header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
   $myApp->response()->header('Access-Control-Allow-Origin', '*');
   $myApp->response()->header('Access-Control-Max-Age', '360');
});
$myApp->run();
?>
