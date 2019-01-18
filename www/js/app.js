import Vue from 'vue';
import {
  mixin as clickaway
} from 'vue-clickaway';
import smoothReflow from 'vue-smooth-reflow';

window.document.addEventListener("DOMContentLoaded", function() {
  const app = new Vue({
    el: '#app',
    mixins: [clickaway, smoothReflow],
    data() {
      return {
        dropdown: false,
        dropdownMobile: false,
        menuToggle: false,
        services: [{
          title: 'จัดฟัน',
          img: 'braces.jpg',
          link: 'ortho'
        }, {
          title: 'รากฟันเทียม',
          img: 'root.jpg',
          link: 'implants'
        }, {
          title: 'ฟอกสีฟัน',
          img: 'whiten.jpg',
          link: 'whitening'
        }, {
          title: 'ฟันปลอม',
          img: 'denture.jpg',
          link: 'denture'
        }, {
          title: 'ครอบฟัน',
          img: 'veneers.jpg',
          link: 'denture'
        }, {
          title: 'ทันตกรรมทั่วไป',
          img: 'regular.jpg',
          link: 'dental'
        }],
        banners: ['/pricing/ortho','#']
      };
    },
    methods: {
      toggleDropdown(id) {
        // Vanilla version
        if (id) {
          if (id === this.dropdown) {
            this.dropdown = null
          } else {
            this.dropdown = id
          }
        } else {
          this.dropdown = null
        }
      },
      closeDropdown() {
        this.dropdown = false
      }
    },
    mounted() {
      this.$smoothReflow({
        el: '.mobile-dropdown',
      })
    }
  })
});

Vue.component('vue-slick', require('./components/Slick.vue').default);
