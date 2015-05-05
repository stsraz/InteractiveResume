(function(){
  angular.module('resumeApp')
    .config(function($routeProvider){
      $routeProvider.when('/', {
        templateUrl: 'app/partials/routes/home/index.html'
      }).when('/experience', {
        templateUrl: 'app/partials/routes/experience/index.html'
      }).when('/skills', {
        templateUrl: 'app/partials/routes/skills/index.html'
      }).when('/tracker', {
        templateUrl: 'app/partials/routes/tracker/index.html',
        controller: 'trackerController'
      }).when('/contact', {
        templateUrl: 'app/partials/routes/contact/index.html'
      }).otherwise({redirectTo: '/'});
    });
  })();
