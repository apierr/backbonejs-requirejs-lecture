/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/header.tpl'
	], function (Marionette, HeaderView) {
		
		return  Marionette.ItemView.extend({

			template: HeaderView

		});

	});

})();