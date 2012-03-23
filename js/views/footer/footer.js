define([
  'jquery',
  'underscore',
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
		that = this;
      $(this.el).html(footerTemplate);
					function renderSpringy() {
		
		that.graph = graph = new Springy();
			var blue = function (context, parentName, first) {
					if(typeof first === 'undefined'){
					var first = graph.newNode({label: parentName});
					}
				_.each(context.children, function(view, viewname) {
					var second = graph.newNode({label: viewname});
					graph.newEdge(first, second, {color: '#000'});
					blue(view, viewname, second);
				});
				console.log('next');
				return ;
			}
		blue(that.options.appView, 'AppView');
			$('#springydemo').remove();
			$('.springy-container').html('<canvas id="springydemo" width="960px" height="420"></canvas">');
		  var springy = $('#springydemo');
			console.log('IM HERERERERER', that.graph);
			springy.springy({
				graph: that.graph
			});

		}
			
		Events.on('viewCreated', renderSpringy);
    }
  })

  return FooterView;
});
