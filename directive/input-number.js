(function() {
    "use strict";

    app.directive('inputNumber', function ($timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                minSize: '=', //最小值
                maxSize: '=', //最大值
                model: '=', //当前值
                ctrlFn: '&callbackFn'
            },
            link: function (scope, element, attrs, ngModel) {
                var newValue = '';

                scope.getType = function (target) {
                    return Object.prototype.toString.call(target).slice(8, -1);
                };

                element.bind('keyup', function () {
                    if (scope.delayUpdate) {
                        $timeout.cancel(scope.delayUpdate);
                    }
                    scope.delayUpdate = $timeout(function () {
                        newValue = parseInt(attrs.$$element[0].value);
                        if (!isNaN(newValue) && scope.getType(newValue) === 'Number') {
                            if (newValue < scope.minSize) {
                                scope.model = scope.minSize;
                            }else if (newValue > scope.maxSize) {
                                scope.model = scope.maxSize + '';
                            }else {
                                scope.model = newValue + '';
                            }
                        }else {
                            attrs.$$element[0].value = '';
                            scope.model = '';
                            return false;
                        }
                        scope.$apply();
                        scope.ctrlFn();
                    }, 1500);
                });
            }
        }
    });

})();