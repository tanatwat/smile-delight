import Vue from 'vue';
import { mixin as clickaway } from 'vue-clickaway';

window.document.addEventListener("DOMContentLoaded", function() {
  const app = new Vue({
    el: '#app',
    mixins: [ clickaway ],
    data() {
      return {
        dropdown: null,
        menuToggle: false
      };
    },
    methods: {
      toggleDropdown(id) {
        if (id) {
          if (id === this.dropdown) {
            this.dropdown = null
          } else {
            this.dropdown = id
          }
        } else {
          this.dropdown = null
        }
      }
    }
  })
});

Vue.component('vue-slick', require('./components/Slick.vue').default);
