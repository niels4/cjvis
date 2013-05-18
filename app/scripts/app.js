'use strict';

angular.module('gcjvisApp', [])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/snapper_chain.html',
    controller: 'SnapperChainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
