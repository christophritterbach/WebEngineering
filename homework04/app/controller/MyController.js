Ext.define('Homework_4.controller.MyController', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'myEdit',
        selector: '#myEdit',
    }],
    init: function() {
    	this.control({
    		'button[action=saveName]': {
    			tap: 'saveNameForm',
    		}
    	})
    },
    saveNameForm: function() {
    	var form = this.getMyEdit();
    	var values = form.getValues();
    	console.log(values.name);
    	console.log(values.vorname);
    	console.log(values.wohnort);
    	/*var datum = Ext.create('Homework_4.model.AddressModel', {
    		name: values.name,
    		vorname: values.vorname,
    		wohnort: values.wohnort,
    	}),*/
    },
});