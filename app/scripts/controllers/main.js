'use strict';

angular.module('gcjvisApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    var findMaxSnaps = function (snappers) {
      return 4 * snappers + 2; // 2 * (2 * snappers + 1)
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
      $scope.snaps++;
    };
  }]);

angular.module('gcjvisApp')
  .directive('slider', [function () {
    return {
      scope: {
        value: "=",
        max: "=",
        label: "@"
      },
      template: '<span class="sliderLabel">{{label}}</span>' +
                '<span class="sliderMin">0</span>' +
                '<span class="sliderMax">{{max}}</span>',
      link: function (scope, element, attrs) {
        var $el = $(element);
        var orientation = attrs.orientation || "horizontal";
        var reverseAdjustVal, startVal;
        if (attrs.reversed) {
          reverseAdjustVal = 1 + Number(attrs.max);
          startVal = scope.max;
        } else {
          startVal = attrs.min;
        }

        scope.$watch("max", function (newVal, oldVal) {
          scope.value = attrs.min;
          $el.data('setup').settings.range[1] = newVal;
        });


        scope.$watch("value", function (newVal, oldVal) {
          var adjustedNewVal;
          if (attrs.reversed) {
            adjustedNewVal = reverseAdjustVal - newVal;
          } else {
            adjustedNewVal = Number(newVal);
          }
          if (adjustedNewVal !== $el.val()) {
            $el.val(adjustedNewVal);
          }
        });

        $el.noUiSlider({
            range: [attrs.min, scope.max],
            start: startVal,
            handles: 1,
            step: 1,
            orientation: attrs.orientation,
            slide: function () {
              scope.$apply(function () {
                if (attrs.reversed) {
                  scope.value = reverseAdjustVal - $el.val();
                } else {
                  scope.value = $el.val();
                }
              });
            }
          });
      }
    };
  }]);
