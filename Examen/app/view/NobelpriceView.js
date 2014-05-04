Ext.define('ArsnovaStatistics.view.NobelpriceView', {
	extend: 'Ext.Carousel',
	xtype : 'Nobel',
	
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
		
    },
});