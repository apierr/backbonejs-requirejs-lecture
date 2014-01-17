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
				'submit form': 'editUser'
			},

			editUser: function (event) {
				event.preventDefault();
				var data = Backbone.Syphon.serialize(this);

				this.model.set(data);
    			this.model.save();

				app.vent.trigger('hideModal');

			}

		});

	});

})();
