Ext.define('ArsnovaStatistics.view.NobelpriceView', {
    extend: 'Ext.Panel',
    config: {
    	fullscreen: true,
        tpl: '<h1>Arsnova Statistics</h1>'
        +'<table border="3">'
        +'<tr><td>Answers</td><td align="right">{answers}</td></tr>'
        +'<tr><td>Questions</td><td align="right">{questions}</td></tr>'
        +'<tr><td>Open Sessions</td><td align="right">{openSessions}</td></tr>'
        +'<tr><td>Closed Sessions</td><td align="right">{closedSessions}</td></tr>'
        +'<tr><td>Active Users</td><td align="right">{activeUsers}</td></tr></table>'
    },
});