define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/backbone/page.html',
  'views/backbone/sidemenu',
  'views/backbone/section'
], function($, _, Backbone, backbonePageTemplate, SidemenuView, SectionView){
  var BackbonePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(backbonePageTemplate);
      
      var sidemenuView = new SidemenuView();
      sidemenuView.render();
      
      var sectionView = new SectionView({section: this.options.section});
      sectionView.render();
    }
  });
  return BackbonePage;
});
