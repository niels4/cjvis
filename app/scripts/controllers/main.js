'use strict';

angular.module('gcjvisApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

angular.module('gcjvisApp')
  .directive('slider', [function () {
    return {
      link: function (scope, element) {
        $(element).noUiSlider({
            range: [0, 100],
            start: 50,
            handles: 1,
            connect: "lower"
          });
      }
    };
  }]);
