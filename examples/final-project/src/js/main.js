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
			marionette: vendor_dir + 'marionette/backbone.marionette',
			text: vendor_dir + 'requirejs/text',
			mustache: vendor_dir + 'mustache/mustache',
			localStorage: vendor_dir + 'backbone.localStorage/backbone.localStorage'
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
			},
			mustache: {
				exports: 'Mustache'
			},
			localStorage: ['backbone']
		}
	});

	require([
		'app',
		'marionette',
		'mustache'
	], function (contactManager, Marionette, Mustache) {

		Marionette.Renderer.render = function(template, data){
            return Mustache.to_html(template, data);
        }

		contactManager.start();

	});

})();
