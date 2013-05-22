'use strict';

angular.module('gcjvisApp')
  .directive('snapperDisplay', [function () {
    return {
      templateUrl: 'views/snapper-display.html',
      controller: ['$scope', function ($scope) {
        var getLightStatus = function (snapperList) {
          var lastSnapper = snapperList[snapperList.length - 1];
          return lastSnapper.isPowered && lastSnapper.isOn;
        };

        var createDefaultSnappers = function (numSnappers) {
          var i,
            snapperList = [];
          snapperList.push({isOn: false, isPowered: true});
          for (i = 1; i < numSnappers; i++) {
            snapperList.push({isOn: false, isPowered: false});
          }
          return snapperList;
        };

        $scope.shouldAnimateSwitch = function (switchIndex) {
          return $scope.snapperList[switchIndex].isOn !==
                 $scope.prevSnapperList[switchIndex].isOn;
        };

        $scope.$watch('snappers', function (newVal, oldVal) {
          $scope.snapperList = createDefaultSnappers(newVal);
          $scope.prevSnapperList = $scope.snapperList;
          $scope.lightOn = getLightStatus($scope.snapperList);
        });

        $scope.$watch('snaps', function (newVal, oldVal) {
          if (newVal !== oldVal) {
            var newList = createDefaultSnappers($scope.snappers);

            var applySnap = function(acc, curSnapper){
              var prevSnapper = acc.length > 0 ? acc[acc.length - 1] : null;
              var newSnapper = {
                isPowered: prevSnapper ? prevSnapper.isPowered && prevSnapper.isOn : true,
                isOn: curSnapper.isPowered ? !curSnapper.isOn : curSnapper.isOn
              };
              acc.push(newSnapper);
              return acc;
            };

            for (var i = 0; i < newVal; i++) {
              newList = newList.reduce(applySnap, []);
            }

            $scope.prevSnapperList = $scope.snapperList;
            $scope.snapperList = newList;
            $scope.lightOn = getLightStatus($scope.snapperList);
          }
        });

        $scope.testChange = function () {
          console.log("changing");
          $scope.snapperList[$scope.snapperList.length - 1].isPowered = true;
          $scope.snapperList[$scope.snapperList.length - 1].isOn = !$scope.snapperList[$scope.snapperList.length - 1].isOn;
          $scope.lightOn = getLightStatus($scope.snapperList);
        };
      }]
    };
  }]);
