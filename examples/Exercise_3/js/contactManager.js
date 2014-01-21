$(function () {

	var app = {};

	app.User = Backbone.Model.extend({

		defaults: {
			firstName: 'Unknown1',
			lastName: 'Unknown2',
			number: 1232132
		}

	});

	app.Users = Backbone.Collection;

	app.UsersViewMarionette = Marionette.ItemView.extend({
		template: '#some-template'
	});

	app.users = new app.Users([
		{firstName: 'antonio', lastName: 'pierro', number: '123456'},
		{firstName: 'leonel', lastName: 'messi', number: '123457'},
		{firstName: 'bntonio', lastName: 'rierro', number: '123456'},
		{firstName: 'ceonel', lastName: 'nessi', number: '123457'}
	]);

	var view = new app.UsersViewMarionette({
		collection: app.users
	}).render();

	$('ul').append(view.$el);

});
