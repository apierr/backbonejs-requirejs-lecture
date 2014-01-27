/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/editUser.tpl',
		'app',
		'backboneSyphon'
	], function (Marionette, editTemplate, app) {

		return Marionette.ItemView.extend({

			template: editTemplate,

			events: {
				'submit form': 'editUser',
				'click .js-close': 'closeModal'
			},

			closeModal: function () {
				app.vent.trigger('hideModal');
			},

			editUser: function (event) {
				event.preventDefault();
				this.model.set(Backbone.Syphon.serialize(this));
				app.users.add(this.model);
    			this.model.save();

				app.vent.trigger('hideModal');
			}

		});

	});

})();
