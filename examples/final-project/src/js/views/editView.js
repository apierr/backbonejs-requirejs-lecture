/*global define*/
(function () {
	'use strict';

	define([
		'marionette',
		'text!../../templates/editUser.tpl',
		'backboneSyphon'
	], function (Marionette, editTemplate) {

		return Marionette.ItemView.extend({

			template: editTemplate,

			events: {
				'click .js-submit': 'editUser'
			},

			editUser: function (event) {
				var data = Backbone.Syphon.serialize(this);

				this.model.set(data);
    			this.model.save();
			}

		});

	});

})();
