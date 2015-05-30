(function() {
  angular.module('trackerApp')
    .directive('timerDown',function(){
      return {
        restrict: 'E',
        controller: 'TimerController',
        link: function(scope,element,attrs) {
          var myDate = new Date(1432988485000);
          element.countdown({until: myDate, compact: 'true'});
        }
      };
    })
    .directive('timerUp',function(){
      return {
        restrict: 'E',
        controller: 'TimerController',
        link: function(scope,element,attrs) {
          element.countdown({since: '+0S', format: 'HM', compact: 'true'});
        }
      };
    });
})();
