/*global define*/
(function () {
	'use strict';

	define([
		'backbone'
	], function (Backbone) {

		return Backbone.Model.extend({

			defaults: {
				firstName: 'Unknown'
			}
		});
	});
})();
