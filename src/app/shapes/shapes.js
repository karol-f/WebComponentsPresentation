angular.module( 'webComponentsPresentation.shapes', [
  'webComponentsPresentation.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/shapes/:name', {
      templateUrl : 'shapes/shapes.tpl.html',
      controller  : 'ShapesCtrl'
    })
  ;
})

.controller( 'ShapesCtrl', function( $scope, $rootScope, globals, route, shapeShifter ) {

    var params = route.params;

    switch (params.name) {
      case 'why':
        shapeShifter.action('Dlaczego');
        break;
      case 'problems':
        shapeShifter.action('Problemy');
        break;
      default:
        shapeShifter.action('');
    }

})

;

