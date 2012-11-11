define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/manager/page.html'
], function($, _, Backbone, Vm, managerPageTemplate){
  var ManagerPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(managerPageTemplate);
    },
    events: {
      'click .add-view': 'addView'
    },
    counter: 1,
    addView: function () {
      var RandomView = Backbone.View.extend({});
      var randomView = Vm.create(this, 'RandomView ' + this.counter, RandomView);
      this.counter++;
      return false;
    }
  });
  return ManagerPage;
});
