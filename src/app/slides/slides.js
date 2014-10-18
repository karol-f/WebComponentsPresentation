angular.module( 'webComponentsPresentation.slides', [
  'webComponentsPresentation.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/slides/toc', {
      templateUrl : 'slides/slides.toc.tpl.html',
      controller  : 'SlidesCtrl'
    })
  ;
})

.controller( 'SlidesCtrl', function( $scope, $rootScope, globals, route, shapeShifter, reveal ) {

  globals.focus();
  shapeShifter.clear();

  reveal.start()
    .then(function() {
      route.next();
    });

})

;

