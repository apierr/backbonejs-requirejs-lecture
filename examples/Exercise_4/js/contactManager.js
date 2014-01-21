$(function () {

	var app = {};

	app.Users = Backbone.Collection;

	app.users = new app.Users([
		{firstName: 'antonio', lastName: 'pierro', number: '123456'},
		{firstName: 'leonel', lastName: 'messi', number: '123457'},
		{firstName: 'bntonio', lastName: 'rierro', number: '123456'},
		{firstName: 'ceonel', lastName: 'nessi', number: '123457'}
	]);

	var SingleLink = Backbone.Marionette.ItemView.extend({

		tagName: "li",

		template: _.template("First name: <%-firstName%>")

	});

	var ListView = Backbone.Marionette.CollectionView.extend({

	  tagName: 'ul',

	  itemView: SingleLink,

	  el: '.container'

	});


	var listView = new ListView({
	  collection: app.users
	});

	listView.render();

});
