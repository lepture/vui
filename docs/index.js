var Vue = require('vue');

new Vue({
  el: '#app',
  components: {
    'menu-button': require('../src/menu-button.vue'),
    'toggle': require('../src/toggle.vue'),
    'slider-range': require('../src/slider-range.vue'),
  }
});
