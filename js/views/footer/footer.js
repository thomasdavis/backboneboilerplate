define([
  'jquery',
  'lodash',
  'backbone',
  'events',
  'text!templates/footer/footer.html',
  'libs/springy/springyui'
], function($, _, Backbone, Events, footerTemplate, Springy){
  var FooterView = Backbone.View.extend({
    el: '.footer',
    intialize: function () {

    },
    render: function () {
      $(this.el).html(footerTemplate);
      this.renderSpringy();
      Events.on('viewCreated', this.renderSpringy, this);
    },
    renderSpringy: function () {
      var that = this;
      var graph = new Springy();
      var generateGraph = function (context, parentName, first) {
        if(typeof first === 'undefined'){
          var first = graph.newNode({label: parentName});
        }
        _.each(context.children, function(view, viewname) {
          var second = graph.newNode({label: viewname + ' (' + view.cid + ')'});
          graph.newEdge(first, second, {color: '#000'});
          generateGraph(view, viewname, second);
        });
        return;
      };
      
      generateGraph(this.options.appView, 'AppView');
      
      $('#springydemo').remove();
      $('.springy-container').html('<canvas id="springydemo" width="960px" height="820"></canvas">');
      var springy = $('#springydemo');
      springy.springy({
        graph: graph
      });
    },
    clean: function () {
      Events.off('viewCreated', this.renderSpringy);
    }
  });

  return FooterView;
});
