(function() {
  angular.module('trackerApp')
    .directive('timerDown',function(){
      return {
        restrict: 'E',
        scope: {
          step: '='
        },
        link: function(scope,element) {
          var myDate = scope.trackerSteps[0]['escalateTime'];
          element.countdown({until: myDate, compact: 'true'});
          scope.$watch('step', function(newValue, oldValue) {
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
          step: '='
        },
        link: function(scope,element) {
          element.countdown({since: '+0S', format: 'HMS', compact: 'true'});
          scope.$watch('step', function(newValue,oldValue) {
            element.countdown('option', 'since', '+0S');
          });
        },
        controller: 'TimerController'
      };
    });
})();
