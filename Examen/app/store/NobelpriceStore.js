Ext.define('ArsnovaStatistics.store.NobelpriceStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ArsnovaStatistics.model.NobelpriceModel',
        proxy: {
            type: 'rest',
            timeout: '20000',
            pageParam: false, //to remove param "page"
            startParam: false, //to remove param "start"
            limitParam: false, //to remove param "limit"
            noCache: false, //to remove param "_dc"
            //url: 'http://christophritterbach.cloudcontrolled.com/Examen/nobelprice.php/nobelprice?year=2013'
            url: 'http://192.168.42.65/mooc/Examen/nobelprice.php/nobelprice?year=2013',
            //url: 'http://api.nobelprize.org/v1/prize.json?category=physics&year=1990',
        },
    }
});