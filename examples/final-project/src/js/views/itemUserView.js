/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/itemUser.tpl'
	], function (Marionette, itemUserTemplate) {

		return Marionette.ItemView.extend({

			template: itemUserTemplate,

		});
	});
})();