(function() {
    angular.module('trackerApp')
      .directive('modal', function() {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            mode: '='
          },
          link: function(scope,element,attrs) {
            element.modal('show');
          },
          templateUrl: 'app/partials/directive/modal.html'
        };
      });
})();
