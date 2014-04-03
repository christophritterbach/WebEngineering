Ext.define('Homework_4.store.ArsnovaStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Homework_4.model.ArsnovaModel',
        proxy: {
            type: 'rest',
            url: 'http://www.arsnova.eu/statistics'
        },
        listeners: {
            beforeload: function () {
                var name = document.location.search.slice(1);
                this.getProxy().setExtraParam('name', name);
            }
        }
    }
});