'use strict';

angular.module('gcjvisApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.snappers = 1;
    $scope.snaps = 0;

    $scope.incSnaps = function () {
      $scope.snaps++;
    };
  }]);

angular.module('gcjvisApp')
  .directive('slider', [function () {
    return {
      scope: {
        value: "="
      },
      link: function (scope, element, attrs) {
        var $el = $(element);
        var orientation = attrs.orientation || "horizontal";
        var reverseAdjustVal, startVal;
        if (attrs.reversed) {
          reverseAdjustVal = 1 + Number(attrs.max);
          startVal = attrs.max;
        } else {
          startVal = attrs.min;
        }

        scope.$watch("value", function (newVal, oldVal) {
          var adjustedNewVal;
          console.log("new val:", newVal);
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
            range: [attrs.min, attrs.max],
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
