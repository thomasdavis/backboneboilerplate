// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    },
    dashboard: function () {
      require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = new DashboardPage();
        dashboardPage.render();
      });
    },
    defaultAction: function(actions){
      // We have no matching route, lets display the dashboard 
      this.dashboard();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
