angular.module( 'webComponentsPresentation.slides', [
  'webComponentsPresentation.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/slides/toc', {
      templateUrl : 'slides/slides.toc.tpl.html',
      controller  : 'SlidesCtrl'
    })
    .when('/slides/test', {
      templateUrl : 'slides/slides.test.tpl.html',
      controller  : 'SlidesCtrl'
    })
  ;
})

.controller( 'SlidesCtrl', function( $scope, $rootScope, globals, shapeShifter, reveal, director ) {

  reveal.start()
    .then(function() {
      director.next();
    },
    function() {
      director.prev();
    });

})

;

