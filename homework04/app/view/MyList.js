Ext.define('Homework_4.view.MyList', {
extend : 'Ext.Container',
xtype: 'chrisList',
requires : [ 'Ext.dataview.List', 'Ext.data.Store' ],
config : {
	layout : 'fit',
	items : [ {
		xtype : 'list',
		store : 'Homework_4.store.AddressStore',
		indexBar: true,
		grouped: true,
		pinHeaders: false,
		itemTpl : '{name}'
	} ]
}
});