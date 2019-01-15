import Vue from 'vue';

window.document.addEventListener("DOMContentLoaded", function() {
  const app = new Vue({
    el: '#app',
    data() {
      return {
        dropdown: null,
        menuToggle: false
      };
    },
    methods: {
      toggleDropdown(id) {
        console.log(id);
        if (id === this.dropdown) {
          this.dropdown = null
        } else {
          this.dropdown = id
        }
      }
    },
    mounted() {
      console.log('Vue INIT');
    }
  })
});

Vue.component('vue-slick', require('./components/Slick.vue').default);
