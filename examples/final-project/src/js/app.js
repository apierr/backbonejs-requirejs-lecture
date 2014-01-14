/* global */
(function () {
	'use strict';

	define([
		'marionette',
		'views/headerView'
	], function (Marionette, HeaderView) {

		var contactManager = new Marionette.Application();

		contactManager.addRegions({
			headerRegion: '#header',
			mainRegion: '#main'
		});

		contactManager.addInitializer(function () {
			this.headerRegion.show(new HeaderView());
		});

		return contactManager;
	});
})();
