Ext.define('ArsnovaStatistics.store.ArsnovaStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ArsnovaStatistics.model.ArsnovaModel',
        proxy: {
            type: 'rest',
            url: 'https://arsnova.eu/mobile/statistics'
        },
    }
});