(function() {
    "use strict";

    app.directive('confirmModal', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                confirmTitle: '=',
                content: '=',
                ctrlFn: '&callbackFn'
            },
            templateUrl: '../../directive/confirm-modal/confirm-modal-directive.html',
            controller: function ($scope, $element) {

                $scope.$watch('content', function (newValue, oldValue) {
                    if (newValue !== oldValue && newValue !== '' && newValue !== undefined) {
                        $('#confirmModal').modal({
                            keyboard: false,
                            backdrop: 'static'
                        });
                    }
                });

                $('#confirmModal').on('hidden.bs.modal', function (e) {
                    $scope.confirmTitle = '';
                    $scope.content = '';
                    $scope.$apply();
                })
            }
        }
    });

})();