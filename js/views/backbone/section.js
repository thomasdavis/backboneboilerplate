define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var BackbonePage = Backbone.View.extend({
    el: '.content',
    render: function () {
      this.$el.html('backbone patterns will go here');
    }
  });
  return BackbonePage;
});
