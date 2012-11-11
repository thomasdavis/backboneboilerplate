define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/backbone/sidemenu.html',
], function($, _, Backbone, sidemenuTemplate){
  var Sidemenu = Backbone.View.extend({
    el: '.submenu',
    render: function () {
      $(this.el).html(sidemenuTemplate);
    }
  });
  return Sidemenu;
});
