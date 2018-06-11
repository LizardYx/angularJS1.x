(function() {
    "use strict";

    app.directive('pagination', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                id: '@',
                items: '=', //总数
                itemsOnPage: '=', //每页显示数
                currentPage: '=', //当前页
                ctrlFn: '&callbackFn'
            },
            template: '<ul class="pagination simple-pagination"></ul>',
            controller: function ($scope, $element) {

                $scope.$watch('itemsOnPage', function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        $scope.init();
                    }
                });
                $scope.$watch('items', function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        $scope.init();
                    }
                });

                $scope.init = function () {
                    $('#' + $scope.id).pagination({
                        items: $scope.items,
                        itemsOnPage: $scope.itemsOnPage,
                        currentPage: $scope.currentPage,
                        prevText: '<span aria-hidden="true">&laquo;</span>',
                        nextText: '<span aria-hidden="true">&raquo;</span>',
                        onPageClick: function (page, evt) {
                            (function(newpage){
                                setTimeout(function () {
                                    $('#' + $scope.id).pagination('drawPage', newpage);
                                    $scope.removeHrefAttr();
                                    $scope.currentPage = newpage;
                                    $scope.ctrlFn({pageNo: newpage}); // update view
                                },30);
                            })(page);
                        }
                    });

                    // href like href="#page-2". keep it will conflict with route
                    $scope.removeHrefAttr = function () {
                        $('#' + $scope.id + ' a').removeAttr("href");
                    };
                    $scope.removeHrefAttr();
                };

            }

        }
    });

})();