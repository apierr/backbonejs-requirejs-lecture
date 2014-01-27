/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/header.tpl'
	], function (Marionette, HeaderView) {
		
		return  Marionette.ItemView.extend({

			className: 'navbar navbar-inverse navbar-fixed-top',

			template: HeaderView

		});

	});

})();
