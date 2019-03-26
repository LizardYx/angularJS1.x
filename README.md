# angularJS1.x
记录项目中使用到的一些常用directive 小技巧等

### 常用Directive
**1.[确认弹出框(依赖Bootstrap)](demo/directive/confirm-modal.html)**  
通过监听 `content` 内容的变化，触发确认弹出框，可以在确认按钮绑定回调事件  

![confirm-modal](directive/confirm-modal/img/confirm-modal.jpg)

**2.[日期选择(依赖Bootstrap)](demo/directive/date-time-picker.html)**  
对bootstrap-datepicker插件的二次封装，原插件地址[bootstrap-datepicker](https://github.com/uxsolutions/bootstrap-datepicker)  
  
![dateTimePicker](directive/date-picker/img/date-picker.jpg)

**3.[回车监听](demo/directive/enter-click.html)**  
对回车键添加监听，点击时触发事件  
  
**4.[input-group](demo/directive/input-group.html)**  
默认显示文本，点击icon进入编辑状态，出现input输入框（支持回车键执行回调事件）  
  
![input-group](directive/input-group/img/input-group.png)  
![input-group-edit](directive/input-group/img/input-group-edit.png)  

**5.[input-number](demo/directive/input-number.html)**  
限制文本框只能输入数字，可设置最小值和最大值，通过 `key up` 事件监听当1.5秒内没有输入则执行回调函数
  
**6.[pagination](demo/directive/pagination.html)**  
分页管理，通过每页显示数量/总item数/当前页数实现分页管理，支持点击跳页执行回调函数

![pagination](directive/pagination/img/pagination.jpg)  

### 小技巧
**1.[Restful请求异步封装](demo/asynRestful.js)**

**2.全球唯一标识符
```
$scope.getGuid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
```
