Ext.define('ArsnovaStatistics.model.LaureatesModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [ { name: 'id', type: 'integer', }
		        , { name: 'fistname', type: 'string', }
		        , { name: 'surname', type: 'string', }
		        , { name: 'motovation', type: 'string', }
		        , { name: 'share', type: 'integer', }
                ],
    }
});

