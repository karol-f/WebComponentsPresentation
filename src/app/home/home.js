angular.module( 'webComponentsPresentation.home', [
  'webComponentsPresentation.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/home', {
      templateUrl : 'home/home.tpl.html',
      controller  : 'HomeCtrl'
    });
})

.controller( 'HomeCtrl', function( $scope, shapeShifter, director ) {

  shapeShifter.action('Home');

  $scope.$on('keyUpNext', function() {
    director.next();
  });

})

;

