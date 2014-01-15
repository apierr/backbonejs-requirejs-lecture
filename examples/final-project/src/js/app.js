/* global */
(function () {
	'use strict';

	define([
		'marionette',
		'views/headerView',
		'views/mainView'
	], function (Marionette, HeaderView, MainView) {

		var contactManager = new Marionette.Application();

		contactManager.addRegions({
			headerRegion: '#header',
			mainRegion: '#main'
		});

		contactManager.addInitializer(function () {
			this.headerRegion.show(new HeaderView());
			this.mainRegion.show(new MainView());
		});

		return contactManager;
	});
})();
