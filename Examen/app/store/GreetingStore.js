Ext.define('ArsnovaStatistics.store.GreetingStore', {
    extend: 'Ext.data.Store',
    config: {
    	storeId: 'GreetingId',
        model: 'ArsnovaStatistics.model.GreetingModel',
        proxy: {
            type: 'rest',
            url: 'http://rest-service.guides.spring.io/greeting'
        },
        listeners: {
            beforeload: function () {
                var name = document.location.search.slice(1);
                this.getProxy().setExtraParam('name', name);
            }
        }
    }
});