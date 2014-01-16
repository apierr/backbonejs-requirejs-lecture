/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/itemUser.tpl'
	], function (Marionette, itemUserTemplate) {

		return Marionette.ItemView.extend({

			tagName: 'tr',

			template: itemUserTemplate,

		});
	});
})();