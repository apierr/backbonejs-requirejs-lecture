$(function () {

	var myApp = {};

	myApp.User = Backbone.Model.extend({

		defaults: {
			firstName: 'Unknown1',
			lastName: 'Unknown2',
			number: 1232132
		}

	});

	myApp.Users = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage('contact-manager') 

	});

	myApp.UsersView = Backbone.View.extend({

		el: '#contact-manager',

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html('ciao');
		}

	});

	new  myApp.UsersView();

});