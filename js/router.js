// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      '/modules': 'modules',	
      '/optimize': 'optimize',
      '/backbone/:section': 'backbone',
      '/backbone': 'backbone',
    
      // Default - catch all
      '*actions': 'defaultAction'
    },
    modules: function () {
      require(['views/modules/page'], function (ModulePage) {
        var modulePage = new ModulePage();
        modulePage.render();
      });	  	
    },
    optimize: function () {
      require(['views/optimize/page'], function (OptimizePage) {
        var optimizePage = new OptimizePage();
        optimizePage.render();
      });
    },
    backbone: function (section) {
      require(['views/backbone/page'], function (BackbonePage) {
        var backbonePage = new BackbonePage({section: section});
        backbonePage.render();
      });
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
