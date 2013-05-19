'use strict';

angular.module('gcjvisApp', [])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/snapper_main.html',
    controller: 'SnapperMainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
