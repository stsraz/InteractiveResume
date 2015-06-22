(function() {
  angular.module('trackerApp')
    .directive('timerDown',function(){
      return {
        restrict: 'E',
        scope: {
          step: '=',
          run: '='
        },
        link: function(scope,element) {
          scope.$watch('run', function(newValue) {
            if(newValue) {
              var myDate = scope.trackerSteps[scope.step]['escalateTime'];
              element.countdown({until: myDate, compact: 'true'});
            }
          });
          scope.$watch('step', function(newValue) {
            var myDate = scope.trackerSteps[newValue]['escalateTime'];
            element.countdown('option', 'until', myDate);
          });
        },
        controller: 'TimerController'
      };
    })
    .directive('timerUp',function(){
      return {
        restrict: 'E',
        scope: {
          step: '=',
          run: '='
        },
        link: function(scope,element) {
          scope.$watch('run', function(newValue) {
            if(newValue) {
              element.countdown({since: '+0S', format: 'HMS', compact: 'true'});
            }
          });
          scope.$watch('step', function(newValue) {
            element.countdown('option', 'since', '+0S');
          });
        },
        controller: 'TimerController'
      };
    });
})();
