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
				this.model.on('change', this.render, this);
			},

			tagName: 'tr',

			template: itemUserTemplate,

			events: {
				'click .js-edit': 'showModal',
				'click .js-delete': 'deleteItem'
			},

			deleteItem: function () {
				this.model.destroy();
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
