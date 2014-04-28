Ext.define('ArsnovaStatistics.model.NobelpriceModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [ { name: 'year', type: 'integer', }
                , { name: 'category', type: 'string', }
                ],
        hasMany: [ { model: 'ArsnovaStatistics.model.LaureatesModel'
                   , autoLoad: true
                   , name: 'laureates'
        	       },
                 ],
    }
});

