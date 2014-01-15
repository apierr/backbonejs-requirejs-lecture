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
				{firstName: 'Tim', lastName: 'surname'},
				{firstName: 'Ida', lastName: 'surname'},
				{firstName: 'Rob', lastName: 'surname'}
			])

		});

	});
})();