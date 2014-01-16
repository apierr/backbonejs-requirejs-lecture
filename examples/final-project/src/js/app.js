/* global */
(function () {
	'use strict';

	define([
		'marionette',
		'views/headerView',
		'views/mainView',
		'collections/users',
		'bootstrap'
	], function (Marionette, HeaderView, MainView, UserCollection) {

		var contactManager = new Marionette.Application();

		contactManager.addRegions({
			headerRegion: '#header',
			mainRegion: '#main',
			modal: '#modal'
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

	    contactManager.vent.on('showModal', function (view) {
	        var modal = contactManager.modal;

	        modal.show(view);
	        modal.$el.modal({
				show: true
	        });
		});

		return contactManager;
	});
})();
