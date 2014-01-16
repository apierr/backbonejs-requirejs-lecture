/*global define*/
(function () {
	'use strict';

	define([
		'underscore',
		'marionette',
		'text!../../templates/itemUser.tpl'
	], function (_, Marionette, itemUserTemplate) {

		return Marionette.ItemView.extend({

			initialize: function () {
				_.bindAll(this, 'showModal');
			},

			tagName: 'tr',

			template: itemUserTemplate,

			events: {
				'click .js-edit': 'showModal'
			},

			showModal: function () {

				var model = this.model;

				/* TODO app should be removed from here*/
				require([
					'views/editView',
					'app'
				], function (EditView, app) {
					app.vent.trigger('showModal', new EditView({
						model: model
					}));
				});
			}

		});
	});
})();
