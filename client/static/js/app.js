    var app = angular.module('myApp', ['ngRoute']);
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/partials/index.html'
        })
        .otherwise({
          redirectTo: "/"
      });
    });