/*global define*/
(function () {
	'use strict';

	define([
		'backbone'
	], function (Backbone) {
		
		return  Backbone.View.extend({

			render: function () {

				this.$el.html('header');
				
				return this;
			}

		});

	});

})();