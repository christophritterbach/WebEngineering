Ext.define('ArsnovaStatistics.view.AccountView',{
	extend : 'Ext.form.Panel',
	xtype : 'Account',
	id: 'Account',

    config: {
        title: 'Account Info',
        iconCls: 'user',
        itemId: 'Input Form',
        items: [
            {
                xtype: 'fieldset',
                title: 'Account Info',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name',
                        id: 'nameField',
                        value: 'Ritterbach',
                        disabled: 'true',
                    },
                    {
                        xtype: 'textfield',
                        label: 'Vorname',
                        name: 'vorname',
                        id: 'vornameField',
                        value: 'Christoph',
                        disabled: 'true',
                    },
                    {
                        xtype: 'textfield',
                        label: 'eMail',
                        name: 'email',
                        id: 'email',
                        value: 'christoph.ritterbach@t-online.de',
                        disabled: 'true',
                    },
                ]
            },
        ]
    }
});