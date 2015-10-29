var Vue = require('vue');

new Vue({
  el: '#app',
  components: {
    'menu-button': require('../ui/menu-button.vue'),
    'toggle': require('../ui/toggle.vue'),
    'slider-range': require('../ui/slider-range.vue'),
  }
});
