//directive 自定义指令的js
import Vue from 'vue'
import $ from 'jquery'
// 注册一个全局自定义指令 v-DomHeight 这个指令是操作index的swipe快DOM的高度
var DomHeight = Vue.directive('DomHeight', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) { //拿到dom动态算出宽度
    var ow =  $(el).find("li").outerWidth(true)*$(el).find("li").length+10
    $(el).css("width",ow+'px')
  }
})
export {DomHeight}
