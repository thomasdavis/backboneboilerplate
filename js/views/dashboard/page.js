define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/dashboard/page.html'
], function($, _, Backbone, dashboardPageTemplate){
  var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {

      $(this.el).html(dashboardPageTemplate);
    }
  });
  return DashboardPage;
});
