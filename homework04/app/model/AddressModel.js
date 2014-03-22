Ext.define('Homework_4.model.AddressModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			     {name: 'vorname', type: 'string' },
			     {name: 'name'   , type: 'string' },
			     {name: 'wohnort', type: 'string' },
         ]
	},
});