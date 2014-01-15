/*glocal define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/main.tpl',
		'views/itemUserView',
		'collections/users'
	], function (Marionette, mainTemplate, ItemUserView, Users) {

		return Marionette.CompositeView.extend({

			itemView: ItemUserView,

			template: mainTemplate,

			collection: new Users([
				{name: 'Tim', age: 5},
				{name: 'Ida', age: 26},
				{name: 'Rob', age: 55}
			])

		});

	});
})();