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

			template: mainTemplate,

			events: {
				'click .js-new': 'showModal'
			},

			showModal: function () {
				/* TODO app should be removed from here*/
				require([
					'models/user',
					'views/editView',
					'app'
				], function (ModelUser, EditView, app) {

					var userModel = new ModelUser();

					app.users.add(userModel);
					app.vent.trigger('showModal', new EditView({
						model: userModel
					}));
				});
			}

		});

	});
})();