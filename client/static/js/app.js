    var app = angular.module('app', ['ngRoute']);
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/partials/index.html',
        })
        .when('/secure',{
          templateUrl: '/views/partials/secure.html',
        })
        .otherwise({
          redirectTo: "/"
      });
    });