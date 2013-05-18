'use strict';

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

      }
    };
  }]);
