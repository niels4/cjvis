'use strict';

angular.module('gcjvisApp')
  .controller('SnapperChainCtrl', ['$scope', function ($scope) {
    var findMaxSnaps = function (snappers) {
      return 4 * snappers - 2; // 2 * (2 * (snappers - 1) + 1)
    };

    $scope.snappers = 1;
    $scope.snaps = 0;
    $scope.maxSnaps = findMaxSnaps($scope.snappers);

    $scope.$watch('snappers', function (newVal, oldVal) {
      if (newVal.length === 0) { return; }
      var newValNum = parseInt(newVal, 10);
      if (isNaN(newValNum) || String(newValNum).length !== String(newVal).length ||
          newValNum < 1 || newValNum > 30) {
        $scope.snappers = oldVal;
      }

      $scope.maxSnaps = findMaxSnaps(newVal);
    });

    $scope.$watch('snaps', function (newVal, oldVal) {
      if (newVal.length === 0) { return; }
      var newValNum = parseInt(newVal, 10);
      if (isNaN(newValNum) || String(newValNum).length !== String(newVal).length ||
          newValNum < 0 || newValNum > $scope.maxSnaps) {
        $scope.snaps = oldVal;
      }
    });

    $scope.incSnaps = function () {
      if ($scope.snaps >= $scope.maxSnaps) {
        $scope.snaps = 0;
      } else {
        $scope.snaps++;
      }
    };
  }]);
