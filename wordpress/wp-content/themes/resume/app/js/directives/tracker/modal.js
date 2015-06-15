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
          templateUrl: localizedRoute.partials + 'directive/tracker/modal.html'
        };
      });
})();
