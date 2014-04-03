Ext.define('Homework_4.view.Examen',
{
	extend : 'Ext.Container',
	requires : [ 'Ext.MessageBox' ],
	xtype : 'chrisExamen',
	id : 'Examen',

	config : {
		scrollable : true,
		items : [
				{
					xtype : 'panel',
					id : 'ArsNova',
					styleHtmlContent : true
				},
				{
					docked : 'top',
					xtype : 'toolbar',
					items : [ {
						text : 'Load from arsNova',
						handler : function() {
							var panel = Ext.getCmp('ArsNova');
							var url = 'http://www.arsnova.eu/statistics';

							var xhr = createCORSRequest('GET',url);
							if (!xhr) {
								Ext.Msg.alert('CORS not supported', Ext.emtpyFn);
								return;
							}

							// Response handlers.
							xhr.onload = function() {
								var text = xhr.responseText;
								Ext.Msg.alert('Response from CORS request to '
										+ url + ': ' + text, Ext.emtpyFn);
							};

							xhr.onerror = function() {
								Ext.Msg.alert('Woops, there was an error making the request.', Ext.emtpyFn);
							};

							xhr.send();
						}
					},
					{
						text : 'Load from ArsNova',
						handler : function() {
							Ext.Ajax.request({
							    url      : 'http://www.arsnova.eu/statistics',
							    callback : function(options, success, response) {
							        console.log(response.responseText);
							        console.log(success);
							        console.log(options);
							    }
							});
						},
						},{
							text : 'Load ArsNova',
							handler : function() {
								Ext.create('Homework_4.store.ArsnovaStore', {
						            autoLoad: true,
						            listeners: {
						                load: function (self, records) {
											var panel = Ext.getCmp('ArsNova');
						                	Ext.Msg.alert(records[0].getData(), Ext.emtpyFn);
						                    panel.setData(records[0].getData());
						                }
						            }
						        });
							},
							}, ]
				} ],
	}
});