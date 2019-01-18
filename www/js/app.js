import Vue from 'vue';
import {
  mixin as clickaway
} from 'vue-clickaway';
import smoothReflow from 'vue-smooth-reflow';

import AOS from 'aos';

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
        banners: ['/pricing/ortho', '/pricing/implants', '/pricing/whitening', '#']
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
    },
    created() {
      AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 150, // values from 0 to 3000, with step 50ms
        duration: 200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      });
    }
  })
});

Vue.component('vue-slick', require('./components/Slick.vue').default);
