Ext.define('Homework_4.view.MyCarousel', {
	extend: 'Ext.Carousel',
	xtype: 'chrisCarousel',
	
	config: {
        direction: 'horizontal',
        defaults: {
            styleHtmlContent: true,
        },
        items: [{
            style: 'background-color: green',   
        },{
            style: 'background-color: red',  
        },{
            style: 'background-color: orange',  
        }]
		
	}
});