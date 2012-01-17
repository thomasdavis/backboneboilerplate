define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var DashboardPage = Backbone.View.extend({
    el: $('.page'),
    render: function () {
      this.el.html('dashboard');
    }
  });
  return DashboardPage;
});
