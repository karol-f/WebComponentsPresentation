/* -----------------------------------------
 App Config
 ----------------------------------------- */

angular.module('webComponentsPresentation.globals', [])

.value('globals', {
  'pageTitle': 'Web Components | meet.js',
  focus: function() {
    window.focus();
  },
  pages: [
    '/shapes/home',
    '/slides/toc',
    '/shapes/why',
    '/shapes/problems',
    '/slides/test',
    '/shapes/why3',
    '/shapes/why4'
  ],
  keys: {
    next: [
      39,
      32,
      40,
      13
    ],
    prev: [
      37,
      8,
      38
    ]
  }
})

;
