define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var BackbonePage = Backbone.View.extend({
    el: '.content',
    render: function () {
      this.$el.html('<h4 style="color: red;">Incomplete</h4>');
    }
  });
  return BackbonePage;
});
