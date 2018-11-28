(function() {
    "use strict";

    app.directive('datePicker', function ($filter, $timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            replace: true,
            scope: {
                dpId: '=',
                format: '=',
                date: '=',
                minDate: '=',
                maxDate: '=',
                ctrlFn: '&callbackFn'
            },
            controller: function ($scope, $element, $attrs) {

                $scope.$watch('dpId', function (newValue) {
                    if (newValue) {
                        $scope.initDatePicker();
                    }
                });

                $scope.$watch('minDate', function (newValue, oldValue) {
                    if (newValue !== undefined && newValue !== oldValue) {
                        $scope.setStartDate($scope.minDate);
                    }
                });

                $scope.$watch('maxDate', function (newValue, oldValue) {
                    if (newValue !== undefined && newValue !== oldValue) {
                        $scope.setEndDate($scope.maxDate);
                    }
                });

                $scope.$watch('date', function (newValue, oldValue) {
                    if (newValue !== undefined && newValue !== oldValue) {
                        $scope.setDate($scope.date);
                    }
                });

                $scope.initDatePicker = function () {
                    $('#' + $scope.dpId).datepicker({
                        format: $scope.format ? $scope.format : 'yyyy/mm/dd',
                        startDate: $scope.minDate ? new Date($scope.minDate) : '',
                        endDate: $scope.maxDate ? new Date($scope.maxDate) : ''
                    }).on('changeDate', function () {
                        var newDate = $('#' + $scope.dpId).datepicker('getDates')[0];

                        $timeout(function () {
                            $scope.date = $filter('date')(newDate, 'yyyy/MM/dd');
                        });
                        $scope.ctrlFn();
                    });
                };

                $scope.setStartDate = function (startDate) {
                    var sDate = startDate ? new Date(startDate) : '';

                    $('#' + $scope.dpId).datepicker('setStartDate', sDate);
                };

                $scope.setEndDate = function (endDate) {
                    var eDate = endDate ? new Date(endDate) : '';

                    $('#' + $scope.dpId).datepicker('setEndDate', eDate);
                };

                $scope.setDate = function (date) {
                    $('#' + $scope.dpId).datepicker('setDate', new Date(date));
                }
            }
        }
    });
})();