// Filename: router.js
define([
'jquery',
'underscore',
'backbone',
'vm'
],
function($, _, Backbone, Vm) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Pages
            // 'newpage':'nameYourRouteHere',

            // Default - catch all
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(options) {

        var appView = options.appView;

        var router = new AppRouter(options);

        //**********//
        //
        // New Page
        // 
        //**********//
		// uncomment to use
		
        // router.on('route:nameYourRouteHere',
        //        function() {
        //            require(['views/newpage/page'],
        //            function(OptimizePage) {
        //                var optimizePage = Vm.create(appView, 'newPage', OptimizePage);
        //                optimizePage.render();
        //            });
        //        });

        //**********//
        //
        // Home Page
        //
        //**********//
        router.on('route:defaultAction',
        function(actions) {
            require(['views/newpage/page'],
            function(DashboardPage) {
                var dashboardPage = Vm.create(appView, 'newPage', DashboardPage);
                dashboardPage.render();
            });
        });


        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
