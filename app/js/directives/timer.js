(function() {
  angular.module('trackerApp')
    .directive('timer',function(){
      return {
        restrict: 'E',
        scope: {
          down: "="
        },
        controller: 'TimerController',
        link: function(scope,element,attrs) {
          var myDate = scope.down ? new Date(1431153312) : new Date();
          scope.down ? element.countdown({until: myDate, compact: 'true'}) :  element.countdown({since: myDate, compact: 'true'});
        }
      };
    });
})();
