'use strict';

angular.module('gcjvisApp')
  .directive('snapperDisplay', [function () {
    return {
      templateUrl: 'views/snapper-display.html',
      controller: ['$scope', function ($scope) {
        var createDefaultSnappers = function (numSnappers) {
          var i,
            snapperList = [];
          for (i = 0; i < numSnappers; i++) {
            snapperList.push({switch: false, power: false});
          }
          return snapperList;
        };

        $scope.snapperList = createDefaultSnappers($scope.snappers);

        $scope.$watch('snappers', function (newVal, oldVal) {
          console.log("New snappers", newVal);
          $scope.snapperList = createDefaultSnappers(newVal);
        });
      }],
      link: function postLink(scope, element, attrs) {
        //element.text('this is the snapperDisplay directive');
      }
    };
  }]);
