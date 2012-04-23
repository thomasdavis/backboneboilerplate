// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        // Major libraries
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
        backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
		
        // Require.js plugins
        text: 'libs/require/text',
        order: 'libs/require/order',

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        templates: '../templates'
    },
    urlArgs: "bust=" + (new Date()).getTime(),
	conf: 'config'

});

// Let's kick off the application
require([
'views/app',
'router',
'vm'
],
function(AppView, Router, Vm) {
    var appView = Vm.create({},
    'AppView', AppView);
    appView.render();
    Router.initialize({
        appView: appView
    });
    // The router now has a copy of all main appview
});
