Ext.define('Homework_4.model.ArsnovaModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [ 'answers'
                  , 'questions'
                  , 'openSessions'
                  , 'closedSessions'
                  , 'activeUsers'
                  ]
    }
});