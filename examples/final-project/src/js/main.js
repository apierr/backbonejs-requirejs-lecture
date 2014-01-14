/* global require*/
(function () {
	'use strict';

	var vendor_dir = '../../bower_components/';

	requirejs.config({
		urlArgs: 'bust=' + Date.now(),
		paths: {
			jquery: vendor_dir + 'jquery/jquery.min',
			underscore: vendor_dir + 'underscore/underscore-min',
			backbone: vendor_dir + 'backbone/backbone',
			marionette: vendor_dir + 'marionette/backbone.marionette.min'
		},
		shim: {
			underscore: {
				exports: '_'
			},
			backbone: {
				deps: ['underscore', 'jquery'],
				exports: 'Backbone'
			},
			marionette: {
				deps: ['backbone'],
				exports: 'Marionette'
			}
		}
	});

	require([
		'app'
	], function (contactManager) {

		console.log(contactManager);

	});

})();
