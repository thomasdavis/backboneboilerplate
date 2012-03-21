define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
   'libs/springy/springyui',
  'libs/springy/springy',
 
  'libs/springy/springyui',
  'text!templates/layout.html' 
], function($, _, Backbone, Vm, a, Graph, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: '.container',
    initialize: function () {
      var SomeView2 = Backbone.View.extend({
        initialize: function () { console.log('Init'); },
        other: function () { console.log('other'); }
      })
      var SomeView = Backbone.View.extend({
        initialize: function () { console.log('Init'); },
        other: function () { 
          var someView = Vm.create(this, 'aaa', SomeView2);
          someView.other();
          console.log('other'); }
      })
      var someView = Vm.create(this, 'somename', SomeView);
      someView.other();

      var someView = Vm.create(this, 'othername', SomeView);
      someView.other();

      var parentNamea = 'appview';
      var img= 'http://yuml.me/diagram/scruffy/class/';
      var object = {};
      /*


        





      */
      function reac (view, name, currentObj) {
        
        if(typeof currentObj === 'undefined') {
          currentObj = {};
        }
        currentObj[name] = {};
        var blah = currentObj[name];
        console.log(currentObj, blah, name)
        _.each(view.children, function (childView, childName) {

          reac(childView, childName, blah)
        })
        return currentObj;
      }


















    },
    render: function () {
      $(this.el).html(layoutTemplate);
      require(['views/header/menu'], function (HeaderMenuView) {
        var headerMenuView = new HeaderMenuView();
        headerMenuView.render();
      });
      var graph = new Graph();

var dennis = graph.newNode({label: 'Dennis'});
var michael = graph.newNode({label: 'Michael'});
var jessica = graph.newNode({label: 'Jessica'});
var timothy = graph.newNode({label: 'Timothy'});
var barbara = graph.newNode({label: 'Barbara'});
var franklin = graph.newNode({label: 'Franklin'});
var monty = graph.newNode({label: 'Monty'});
var james = graph.newNode({label: 'James'});
var bianca = graph.newNode({label: 'Bianca'});

graph.newEdge(dennis, michael, {color: '#00A0B0'});
graph.newEdge(michael, dennis, {color: '#6A4A3C'});
graph.newEdge(michael, jessica, {color: '#CC333F'});
graph.newEdge(jessica, barbara, {color: '#EB6841'});
graph.newEdge(michael, timothy, {color: '#EDC951'});
graph.newEdge(franklin, monty, {color: '#7DBE3C'});
graph.newEdge(dennis, monty, {color: '#000000'});
graph.newEdge(monty, james, {color: '#00A0B0'});
graph.newEdge(barbara, timothy, {color: '#6A4A3C'});
graph.newEdge(dennis, bianca, {color: '#CC333F'});
graph.newEdge(bianca, monty, {color: '#EB6841'});


  var springy = $('#springydemo').springy({
    graph: graph
  });

    } 
  })




  return AppView;
});
