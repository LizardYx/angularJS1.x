(function() {
    "use strict";

    app.directive('dateTimePicker', function ($filter) {
        return {
            restrict: 'E',
            scope: {
                date: '=', //Date
                minDate: '=', //Date
                maxDate: '=', //Date
                format: '=', //String
                language: '=', //String
                autoClose: '=', //Boolean
                minView: '=', ////Number,String
                maxView: '=', //Number,String
                todayBtn: '=', //True,False
                pickerPosition: '=',
                ctrlFn: '&callbackFn'
            },
            templateUrl: 'common/directives/template/date-time-picker.html',
            controller: function ($scope, $element) {

                var initDateTimePicker = $scope.$watch('date', function (newValue) {
                    if (newValue) {
                        $('#DTPicker').datetimepicker({
                            language: $scope.language ? $scope.language : 'zh-CN',
                            format: $scope.format ? $scope.format : 'yyyy/mm/dd hh:ii',
                            startDate: $scope.minDate ? $scope.minDate : '',
                            endDate: $scope.maxDate ? $scope.maxDate : '',
                            autoclose: $scope.autoClose ? $scope.autoClose : false,
                            minView: $scope.minView ? $scope.minView : 0, //0 or 'hour' for the hour view,1..,2..,3..,4..
                            maxView: $scope.maxView ? $scope.maxView : 4,
                            todayBtn: $scope.todayBtn ? $scope.todayBtn : false,
                            pickerPosition: $scope.pickerPosition ? $scope.pickerPosition : 'bottom-right',
                            initialDate: $scope.date ? $scope.date : new Date()
                        }).on('changeDate', function (event) {
                            $scope.date = $filter('date')(event.date, 'yyyy-MM-dd HH:mm:ss');
                            // var year = event.date.getFullYear();
                            // var month = event.date.getMonth();
                            // var day = event.date.getDate();
                            // var hours = event.date.getHours();
                            // var minutes = event.date.getMinutes();
                            //
                            // $scope.date = `${year}/${month + 1}/${day} ${hours}:${minutes}`;
                            $scope.ctrlFn();
                            $scope.$apply();
                        });
                        initDateTimePicker();
                    }
                });

                $scope.showDTP = function () {
                    $('#DTPicker').datetimepicker('show');
                };
            }

        }
    });

})();