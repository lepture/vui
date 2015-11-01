
var Avatar = require('./ui/Avatar.vue')
var Toggle = require('./ui/Toggle.vue')
var MenuButton = require('./ui/MenuButton.vue')
var ProgressButton = require('./ui/ProgressButton.vue')
var RangeSlider = require('./ui/RangeSlider.vue')

exports.install = function(Vue) {
  // register ui components
  Vue.component('vui-avatar', Avatar)
  Vue.component('vui-toggle', Toggle)
  Vue.component('vui-menu-button', MenuButton)
  Vue.component('vui-progress-button', ProgressButton)
  Vue.component('vui-range-slider', RangeSlider)
}
