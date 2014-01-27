/*global define*/
(function () {
	'use strict';

	define([
		'underscore',
		'backbone',
		'../utils/usersFixture',
		'localStorage'
	], function (_, Backbone, fixture) {

		return Backbone.Collection.extend({

			storageName: 'contactManager',

			initialize: function () {
				_.bindAll(this, 'createModel');
				this.localStorage = new Backbone.LocalStorage(this.storageName);
				if (!localStorage[this.storageName]) {
	                this.loadFixture();
	            }
			},

			sortUser: function (filter) {

				if(filter === '') {
					return true;
				}
				this.reset(this.filter(function (model) {
					return model.get('firstName').toLowerCase().indexOf(filter) != -1
				}));
			},

			loadFixture: function () {
			    _.each(fixture, this.createModel);
			},

			createModel: function (object) {
				this.create(object);
			}

		});
	});
})();
