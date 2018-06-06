# angularJS1.x
记录项目中使用到的一些东西，未免忘记，以做记录

### 常用Directive
**1.[提示弹出框(依赖Bootstrap)](demo/directive/alert-modal.html)**  
通过监听 `content` 内容的变化，触发提示弹出框。并在设定的时间 `close-time` 之后关闭提示框

![alert-modal-success](directive/alert-modal/img/alert-modal-sucess.jpg)  
![alert-modal-error](directive/alert-modal/img/alert-modal-error.jpg)

**2.[确认弹出框(依赖Bootstrap)](demo/directive/confirm-modal.html)**  
通过监听 `content` 内容的变化，触发确认弹出框，可以在确认按钮绑定回调事件  

![confirm-modal](directive/confirm-modal/img/confirm-modal.jpg)

**3.[日期选择(依赖Bootstrap)](demo/directive/date-time-picker.html)**  
对dateTimePicker插件的二次封装，原插件地址[bootstrap-datetimepicker](http://www.bootcss.com/p/bootstrap-datetimepicker/)  
  
![dateTimePicker](directive/date-time-picker/img/date-time-picker.jpg)

**4.[回车监听](demo/directive/enter-click.html)**  
对回车键添加监听，点击时触发事件  
  
**4.[input-group](demo/directive/input-group.html)**
默认显示文，点击icon进入编辑状态，出现input输入框（回车键支持调用回调时间）  
  
![input-group](directive/input-group/img/input-group.png)
![input-group-edit](directive/input-group/img/input-group-edit.png)
