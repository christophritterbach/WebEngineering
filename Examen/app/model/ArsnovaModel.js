Ext.define('ArsnovaStatistics.model.ArsnovaModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [ { name: 'answers', type: 'integer', }
                , { name: 'questions', type: 'integer', }
                , { name: 'openSessions', type: 'integer', }
                , { name: 'closedSessions', type: 'integer', }
                , { name: 'activeUsers', type: 'integer', }
                ]
    }
});

