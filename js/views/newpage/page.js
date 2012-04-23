define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/newpage/page.html'
], function($, _, Backbone, NewPageTemplate){
  var NewPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(NewPageTemplate);
    }
  });
  return NewPage;
});
