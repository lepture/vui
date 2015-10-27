var Vue = require('vue');

new Vue({
  el: '#app',
  components: {
    'menu-button': require('./src/menu-button.vue'),
  }
});
