(function() {
    angular.module('trackerApp')
      .directive('startModal', function() {
        return {
          restrict: 'E',
          scope: {
            showModal: "="
          },
          link: function(scope,element) {
            scope.$watch('showModal', function(newValue, oldValue) {
              newValue ? element.modal('hide') : element.modal('show');
            });
          },
          templateUrl: 'app/partials/directive/start-modal.html'
        };
      });
})();
