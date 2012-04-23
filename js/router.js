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
            '/newpage':'nameYourRouteHere',

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
        router.on('route:nameYourRouteHere',
        function() {
            require(['views/newpage/page'],
            function(NewPage) {
                var NewPage = Vm.create(appView, 'NewPage', NewPage);
                NewPage.render();
            });
        });

        //**********//
        //
        // Home Page
        //
        //**********//
        router.on('route:defaultAction',
        function(actions) {
            require(['views/dashboard/page'],
            function(DashboardPage) {
                var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
                dashboardPage.render();
            });
        });


        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
