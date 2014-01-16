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

			itemViewContainer: 'tbody',

			itemView: ItemUserView,

			template: mainTemplate

		});

	});
})();