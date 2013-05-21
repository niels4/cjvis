'use strict';

angular.module('gcjvisApp')
  .directive('slider', [function () {
    return {
      scope: {
        value: "=",
        max: "=",
        min: "=",
        label: "@"
      },
      template: '<input type="range" ng-model="value" min="{{min}}" max="{{max}}" ' +
                'step="1">' +
                '<span class="sliderLabel">{{label}}</span>' +
                '<span class="sliderMin">0</span>' +
                '<span class="sliderMax">{{max}}</span>',
      link: function (scope, element, attrs) {
        scope.$watch("max", function (newVal, oldVal) {
          scope.value = attrs.min;
        });
      }
    };
  }]);
