$(function () {

	var app = {};

	app.User = Backbone.Model.extend({

		defaults: {
			firstName: 'Unknown1',
			lastName: 'Unknown2',
			number: 1232132
		}

	});

	app.Users = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage('contact-manager') 

	});

	app.UsersView = Backbone.View.extend({

		el: '#contact-manager',

		template: _.template("<h2>There are <%= usersLength %> users<h2>"),

		initialize: function () {

			this.render();
		},

		render: function () {
			this.$el.html(this.template({ usersLength: app.users.length }));
		}

	});

	app.UsersViewMustache = Backbone.View.extend({

		el: '#contact-manager',

		initialize: function () {
			this.template = Mustache.to_html("<h2>There are {{usersLength}} users<h2>", { usersLength: app.users.length });
			this.render();
		},

		render: function () {
			this.$el.html(this.template);
		}

	});

	app.users = new app.Users([
		{firstName: 'antonio', lastName: 'pierro', number: '123456'},
		{firstName: 'leonel', lastName: 'messi', number: '123457'}
	]);

	// new  app.UsersView();
	new  app.UsersViewMustache();

});
