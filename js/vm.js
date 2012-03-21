// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var children = 1;
	var create = function (context, name, View, options) {
		console.log(context);
		if(typeof context.children === 'undefined') {
			context.children = {};
		}
		var view = new View();
		context.children[name] = view;
		return view;
	}
  return {
  	create: create
  };
});
