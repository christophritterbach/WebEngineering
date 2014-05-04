Ext.define('ArsnovaStatistics.view.GreetingView', {
    extend: 'Ext.DataView',
    xtype: 'Greeting',
    
	config: {
	    store: 'GreetingId',
    	itemTpl: '<div><h1>Greeting rest API</h1><h2>http://rest-service.guides.spring.io/greeting</h2>ID is {id}</br>content is {content}</div>',
        title: 'Greeting',
        iconCls: 'home',
        tpl: '<p>The ID is 1</p><p>The content is se</p>',
        activate: function ( newActiveItem, component, oldActiveItem, options ) {
    		console.log('on activate');
        },
    	initialize: function(component, options) {
    		console.log('on initialize');
		    Ext.create('ArsnovaStatistics.store.GreetingStore', {
		        autoLoad: true,
		        listeners: {
		            load: function (self, records) {
						console.log(self.getCount());
		                component.setData(records[0].getData());
		            }
		        }
		    });
    	},    
    },
});