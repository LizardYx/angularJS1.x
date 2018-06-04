(function() {
    "use strict";

    app.directive('confirmModal', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                confirmTitle: '=', //提示框标题
                content: '=', //提示框内容
                ctrlFn: '&callbackFn' //确定按钮回调事件，点击确定按钮触发
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