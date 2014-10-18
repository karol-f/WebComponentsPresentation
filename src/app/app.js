angular.module( 'webComponentsPresentation', [
  'ngRoute',
  'templates-app',
  'templates-common',

  'webComponentsPresentation.home',
  'webComponentsPresentation.slides',
  'webComponentsPresentation.shapes',

  'webComponentsPresentation.globals',
  'webComponentsPresentation.route',
  'shapeShifter',
  'director',
  'reveal'
])

.config( function myAppConfig ( routeProvider ) {
  routeProvider
    .otherwise({ path: '/home' });
})

.controller( 'AppCtrl', function AppCtrl ( $scope, globals ) {
  $scope.globals = globals;
  $scope._ = window._;

  function preloadImg(src) {
    $('<img/>')[0].src = src;
  }
  preloadImg('');
})

.run( function run ( globals ) {
  globals.focus();
})

.directive('broadcastKeyUp', function () {
  return {
    link: function(scope, element) {
      $(function() {
        element.on('keyup', function(event) {
          var acceptedKeys = [
            39,
            32,
            40,
            13
          ];
          scope.$broadcast('keyUp', event.which);

          if (acceptedKeys.indexOf(event.which) > -1) {
            console.log('keyupNext: ', event.which);
            scope.$broadcast('keyUpNext', event.which);
          }
        });

      });
    }
  };
})

;
