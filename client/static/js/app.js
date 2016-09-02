    console.log('routes');
    var app = angular.module('app', ['ngRoute']);
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/partials/index.html',
          // controller: 'indexController'
        })
        .otherwise({
          redirectTo: "/"
      });
    });