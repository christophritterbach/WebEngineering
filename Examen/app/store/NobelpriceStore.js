Ext.define('ArsnovaStatistics.store.NobelpriceStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ArsnovaStatistics.model.NobelpriceModel',
        proxy: {
            type: 'ajax',
            pageParam: false, //to remove param "page"
            startParam: false, //to remove param "start"
            limitParam: false, //to remove param "limit"
            noCache: false, //to remove param "_dc"
            url: 'http://api.nobelprize.org/v1/prize.json?year=2013'
        },
    }
});