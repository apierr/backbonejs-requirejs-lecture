/* global require*/
(function () {
	'use strict';

	var vendor_dir = '../../bower_components/';

	requirejs.config({
		urlArgs: 'bust=' + Date.now(),
		paths: {
			underscore: vendor_dir + 'underscore/underscore-min',
			backbone: vendor_dir + 'backbone/backbone'
		},
		shim: {
			underscore: {
				exports: '_'
			},
			backbone: {
				deps: ['underscore'],
				exports: 'Backbone'
			}
		}
	});

	require([
		'app'
	], function (contactManager) {

		console.log(contactManager);

	});

})();
