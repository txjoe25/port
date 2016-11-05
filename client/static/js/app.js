    var app = angular.module('myApp', ['ngRoute']);
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/partials/index.html'
        })
        .when('/secure', {
          templateUrl: '/views/partials/secure.html',
        })
        .otherwise({
          redirectTo: "/"
      });
    });