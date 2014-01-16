/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/editUser.tpl'
	], function (Marionette, editTemplate) {

		return Marionette.ItemView.extend({

			template: editTemplate

		});

	});

})();
