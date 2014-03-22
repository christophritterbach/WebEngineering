Ext.define('Homework_4.store.AddressStore', {
	extend : 'Ext.data.Store',
	config : {
		model : 'Homework_4.model.AddressModel',
		autoLoad : true,
		proxy : {
            type: 'ajax',
            url: 'adressen.json',
            reader: {
                type: 'json',
            }
		}
	}
});
