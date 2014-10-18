/* -----------------------------------------
 App Config
 ----------------------------------------- */

angular.module('webComponentsPresentation.globals', [])

.value('globals', {
  'pageTitle': 'Web Components | meet.js',
  focus: function() {
    window.focus();
  }
})

;
