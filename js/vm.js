// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
  'events'
], function($, _, Backbone, Events){
	var create = function (context, name, View, options) {
		var view = new View(options);
		if(typeof context.children === 'undefined'){
		  context.children = {};
		  context.children[name] = view;
		} else {
		console.log('hrmm', name);
		  context.children[name] = view;
		}
		console.log('errrrrr', name);
		Events.trigger('viewCreated');
		return view;
	}
	
	
  return {
  	create: create
  };
});
