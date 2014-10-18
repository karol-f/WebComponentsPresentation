angular.module('director', [])

  .service('director', function ($location, route) {
    this.pages = [
      '/home',
      '/slides/toc',
      '/shapes/problems'
    ];

    this.next = function() {
      var length = this.pages.length;
      var index = this.pages.indexOf(route.name);
      if (index > -1 && index < length) {
        route.path(this.pages[index + 1]);
      }
    };

  })

;
