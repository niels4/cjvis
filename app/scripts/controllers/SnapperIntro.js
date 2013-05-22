'use strict';

angular.module('gcjvisApp')
  .controller('SnapperIntroCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.skipIntro = function () {
      $location.path("snapper-display");
    };
  }]);
