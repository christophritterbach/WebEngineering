Ext.application({
    name: 'Homework_4',
    models: ['AddressModel'],
    stores: ['AddressStore'],
    views: ['MyEdit', 'MyCarousel', 'MyList'],
    controllers: ['MyController'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
    	console.log("Launch called");
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'bottom',
            styleHtmlContent: true,
            items: [{
            	xtype: 'chrisEdit',
            }, {
                title: 'Profile',
                iconCls: 'user',
            	xtype: 'chrisList',
            }, {
                title: 'Colours',
                iconCls: 'settings',
                xtype: 'chrisCarousel',
            }, ], // items
        }); // create()
    } //launch

});

Ext.Loader.setConfig({ disableCaching: false });