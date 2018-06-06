(function() {
    "use strict";

    app.directive('inputGroup', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                itemId: '@',
                model: '@',
                ctrlFn: '&callbackFn'
            },
            templateUrl: '../../directive/input-group/input-group-directive.html',
            controller: function ($scope, $element, $attrs) {
                $scope.canEdit = false;
                $scope.name = $scope.model;
                $scope.enter = function (event) {
                    var keyCode = event.which || event.keyCode;

                    if (keyCode === 13) {
                        $scope.ctrlFn({id: $scope.itemId, name: $scope.name});
                        $scope.canEdit = false;
                    }
                };

                $scope.updateNames = function (name) {
                    $scope.name = name;
                };

                $scope.updateStatus = function (status) {
                    $scope.canEdit = status;
                };
            }
        }
    });
})();