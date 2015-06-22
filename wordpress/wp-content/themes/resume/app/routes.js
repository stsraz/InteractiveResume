(function(){
  angular.module('resumeApp')
    .config(function($routeProvider, $locationProvider){
      $routeProvider.when('/', {
        templateUrl: localizedRoute.partials + 'routes/home/index.html'
      }).when('/experience', {
        templateUrl: localizedRoute.partials + 'routes/experience/index.html'
      }).when('/skills', {
        templateUrl: localizedRoute.partials + 'routes/skills/index.html'
      }).when('/tracker', {
        templateUrl: localizedRoute.partials + 'routes/tracker/index.html',
      }).when('/contact', {
        templateUrl: localizedRoute.partials + 'routes/contact/index.html'
      }).otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
    });
  })();
