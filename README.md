# angularJS1.x
记录项目中使用到的一些Directive或者是小技巧，未免忘记，以做记录

### 常用Directive
**1.提示弹出框(依赖Bootstrap)**
 
`html:`
```
<div class="modal fade" id="alertModal" tabindex="-1" role="dialog" style="z-index:9999999"
     aria-labelledby="alertLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div ng-class="{'modal-header':true, 'warning': alertStatus === 0, 'success': alertStatus === 1}"></div>
            <div class="modal-body text-center">
                <div ng-bind="content" ng-class="{'warning': alertStatus === 0, 'success': alertStatus === 1}">
                </div>
            </div>
        </div>
    </div>
</div>
```  
`css:`  
```
#alertModal .modal-content{
    width: 180px;
    height: 100px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

#alertModal .modal-content .modal-header{
    min-height: 5px;
    height: 5px;
    padding: 0;
    border: none;
}

#alertModal .modal-content .modal-header.success{
    background-color: #33cdcc;
}

#alertModal .modal-content .modal-header.warning{
    background-color: #f73d3d;
}

#alertModal .modal-content .modal-body{
    display: table-cell;
    vertical-align: middle;
    height: 95px;
    width: 180px;
    padding: 6px 12px;
    text-align: center;
    color: #33cdcc;
}

#alertModal .modal-content .modal-body > div.success{
    color: #33cdcc;
}

#alertModal .modal-content .modal-body > div.warning{
    color: #f73d3d;
}
```
`js:`
```
(function() {
    "use strict";

    app.directive('alertModal', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                content: '=',
                closeTime: '=',
                alertStatus: '='
            },
            templateUrl: 'alert-modal.html',
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
```
使用范例：  
```
<alert-modal content="" close-time="" alert-status="">
</alert-modal>
```