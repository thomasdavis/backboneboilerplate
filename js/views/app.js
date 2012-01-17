define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/layout.html' 
], function($, _, Backbone, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: $('.container'),
    intialize: function () {
    },
    render: function () {
      this.el.html(layoutTemplate);
    } 
  })

  return AppView;
});
