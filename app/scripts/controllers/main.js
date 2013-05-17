'use strict';

angular.module('gcjvisApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.snappers = 1;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

angular.module('gcjvisApp')
  .directive('slider', [function () {
    return {
      scope: {
        value: "="
      },
      link: function (scope, element, attrs) {
        var $el = $(element);
        console.log("val:", attrs.value);
        scope.$watch("value", function (newVal, oldVal) {
          var adjustedNewVal = 31 - newVal;
          console.log("sliderVal", $el.val());
          if (adjustedNewVal !== $el.val()) {
            $el.val(adjustedNewVal);
          }
        });

        $el.noUiSlider({
            range: [1, 30],
            start: 30,
            handles: 1,
            step: 1,
            orientation: "vertical",
            slide: function () {
              scope.$apply(function () {
                scope.value = 31 - $el.val();
              });
            }
          });
      }
    };
  }]);
