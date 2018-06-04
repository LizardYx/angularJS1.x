(function() {
    "use strict";

    app.directive('alertModal', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                content: '=', // when content change, show alert modal
                closeTime: '=', // close alert modal time
                alertStatus: '=' // 0-error alert modal, 1-success alert modal
            },
            templateUrl: '../../directive/alert-modal/alert-modal-directive.html',
            controller: function ($scope, $element) {

                $scope.$watch('content', function (newValue, oldValue) {
                    if (newValue !== oldValue && newValue !== '' && newValue !== undefined) {
                        $('#alertModal').modal({
                            keyboard: false,
                            backdrop: 'static'
                        });

                        if ($scope.closeTime) {
                            $scope.closeModal = $timeout(function () {
                                $('#alertModal').modal('toggle');
                            }, $scope.closeTime);
                        }
                    }
                });

                $('#alertModal').on('hidden.bs.modal', function (e) {
                    $timeout.cancel($scope.closeModal);
                    $scope.content = '';
                    $scope.alertStatus = '';
                    $scope.$apply();
                })
            }
        }
    });

})();