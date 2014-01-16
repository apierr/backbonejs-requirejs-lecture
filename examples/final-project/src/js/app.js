/* global */
(function () {
	'use strict';

	define([
		'marionette',
		'views/headerView',
		'views/mainView',
		'collections/users'
	], function (Marionette, HeaderView, MainView, UserCollection) {

		var contactManager = new Marionette.Application();

		contactManager.addRegions({
			headerRegion: '#header',
			mainRegion: '#main'
		});

		contactManager.addInitializer(function () {
			contactManager.users = new UserCollection();
			contactManager.users.fetch({
				success: function () {
					contactManager.headerRegion.show(new HeaderView());
					contactManager.mainRegion.show(new MainView({
						collection: contactManager.users
					}));
				}
			});

		});

		return contactManager;
	});
})();
