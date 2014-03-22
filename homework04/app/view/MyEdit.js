Ext.define('Homework_4.view.MyEdit',{
	extend : 'Ext.form.Panel',
	xtype : 'chrisEdit',
	id: 'myEdit',

    config: {
        title: 'Home',
        iconCls: 'home',
        itemId: 'Input Form',
        items: [
            {
                xtype: 'fieldset',
                title: 'Input Form',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name',
                        id: 'nameField',
                        placeHolder: 'Name eingeben'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Vorname',
                        name: 'vorname',
                        id: 'vornameField',
                        placeHolder: 'Vorname eingeben'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Wohnort',
                        name: 'wohnort',
                        id: 'wohnortField',
                        placeHolder: 'Wohnort eingeben'
                    },
                ]
            },
            {
                xtype: 'button',
                itemId: 'save',
                text: 'Save',
                action: 'saveName'
            }
        ]
    }
});