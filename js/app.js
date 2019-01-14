window.document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      dropdown: null,
      menuToggle: false
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
    }
  })
});
