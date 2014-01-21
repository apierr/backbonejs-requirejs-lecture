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

	app.UserView = Backbone.View.extend({

		tagName: 'li',

		initialize: function () {
			_.bindAll(this, 'render');
		},

		render: function () {
			var template = Mustache.to_html('name: {{ firstName }}', this.model.toJSON())
			return this.$el.html(template);
		}

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
			_.bindAll(this, 'addOne', 'render');
			this.template = Mustache.to_html("<h2>There are {{usersLength}} users<h2> <ul id='user-list'></ul>", { usersLength: app.users.length });
			this.render();
		},

		render: function () {
			this.$el.html(this.template);
			this.addAll();
		},

		addAll: function () {
			app.users.forEach(this.addOne);
		},

		addOne: function (userModel) {
			var view = new app.UserView({
				model: userModel
			});
			this.$('ul').append(view.render());
		}


	});

	app.users = new app.Users([
		{firstName: 'antonio', lastName: 'pierro', number: '123456'},
		{firstName: 'leonel', lastName: 'messi', number: '123457'},
		{firstName: 'bntonio', lastName: 'rierro', number: '123456'},
		{firstName: 'ceonel', lastName: 'nessi', number: '123457'}
	]);

	// new  app.UsersView();
	new  app.UsersViewMustache();

});
