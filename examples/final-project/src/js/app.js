/* global */
(function () {
	'use strict';

	define([
		'marionette'
	], function (Marionette) {

		var ContactManager = new Marionette.Application();

		ContactManager.addRegions({
			headerRegion: '#header',
			mainRegion: '#main'
		});

		return ContactManager;
	});
})();
