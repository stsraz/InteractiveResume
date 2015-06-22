(function() {
    angular.module('trackerApp')
      .directive('modal', function() {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            modalState: '=state',
            modalShow: '=show',
            modalData: '=data',
            run: '=run'
          },
          link: function(scope,element,attrs) {
            scope.$watch('modalShow', function(newValue) {
              newValue ? element.modal('show') : element.modal('hide');
            });
          },
          templateUrl: localizedRoute.partials + 'directive/tracker/modal.html',
          controller: 'ModalController'
        };
      });
})();
