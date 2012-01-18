define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/menu.html' 
], function($, _, Backbone, headerMenuTemplate){
  var HeaderMenuView = Backbone.View.extend({
    el: $('.main-menu'),
    intialize: function () {
    },
    render: function () {
      this.el.html(headerMenuTemplate);
    } 
  })

  return HeaderMenuView;
});
