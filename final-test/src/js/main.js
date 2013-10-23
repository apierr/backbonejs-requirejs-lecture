/*global require*/
(function () {
    'use strict';

    var vendor_dir = '../../vendors/js/';

    requirejs.config({
      baseUrl: "src/js",
      urlArgs : "bust=" + new Date().getTime(),
      paths: {
        backbone: vendor_dir + "backbone",
        "backbone.picky": vendor_dir + "backbone.picky",
        "backbone.syphon": vendor_dir + "backbone.syphon",
        jquery: vendor_dir + "jquery",
        "jquery-ui": vendor_dir + "jquery-ui",
        json2: vendor_dir + "json2",
        localstorage: vendor_dir + "backbone.localstorage",
        marionette: vendor_dir + "backbone.marionette",
        spin: vendor_dir + "spin",
        "spin.jquery": vendor_dir + "spin.jquery",
        tpl: vendor_dir + "tpl",
        underscore: vendor_dir + "underscore",
        mustache: vendor_dir + 'mustache'
      },

      shim: {
        underscore: {
          exports: "_"
        },
        backbone: {
          deps: ["jquery", "underscore", "json2"],
          exports: "Backbone"
        },
        "backbone.picky": ["backbone"],
        "backbone.syphon": ["backbone"],
        marionette: {
          deps: ["backbone"],
          exports: "Marionette"
        },
        "jquery-ui": ["jquery"],
        localstorage: ["backbone"],
        "spin.jquery": ["spin", "jquery"],
        "mustache": {
          exports: "Mustache"
        }
      }
    });

    require(
      ["app", "mustache","apps/header/header_app"], 
      function(ContactManager, Mustache){
        // Marionette.Renderer.render = function(template, data){
        //   return Mustache.to_html(template, data);
        // }
        ContactManager.start();
    });

}());
