/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'ArsnovaStatistics',
    models: [ 'ArsnovaModel', 'NobelpriceModel', 'GreetingModel' ],
    stores: [ 'ArsnovaStore', 'NobelpriceStore', 'GreetingStore' ],
    views: [ 'ArsnovaView', 'GreetingView', 'AccountView' ],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/3Account20x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        //var view = Ext.create('ArsnovaStatistics.view.ArsnovaView', {});

        /*Ext.create('ArsnovaStatistics.store.ArsnovaStore', {
            autoLoad: true,
            listeners: {
                load: function (self, records) {
                  console.log(self.getCount());
                    view.setData(records[0].getData());
                }
            }
        });*/
    	//Ext.Ajax.useDefaultXhrHeader = false;
    	//Ext.Ajax.cors = true;
    	console.log("Launch called");
	    Ext.create('ArsnovaStatistics.store.GreetingStore', {
	        autoLoad: true,
            listeners: {
                load: function (self, records) {
                    console.log(records[0].count());
                }
            }	    
	    });
	    Ext.create('ArsnovaStatistics.store.NobelpriceStore', {
	        autoLoad: true,
            listeners: {
                load: function (self, records) {
                    //console.log(records[0].count());
                }
            }	    
	    });
	    console.log("Store created");
	    Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'bottom',
            styleHtmlContent: true,
            items: [ {
                title: 'Info',
            	xtype: 'Account',
                iconCls: 'user',
            },
            {
                title: 'Greeting',
            	xtype: 'Greeting',
                iconCls: 'home',
            }], // items
        }); // create()

    }
});

