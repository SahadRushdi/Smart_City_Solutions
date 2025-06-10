document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#mainNav .nav-link'); 

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            this.setAttribute('aria-current', 'page'); 
        });
    });

    const currentHash = window.location.hash;
    if (currentHash) {
        const initialActiveLink = document.querySelector(`#mainNav a[href="${currentHash}"]`);
        if (initialActiveLink) {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            initialActiveLink.classList.add('active');
            initialActiveLink.setAttribute('aria-current', 'page');
        }
    }
});

// FEEDBACK FORUM VUE JS
new Vue({
    el: '#app',
    data: {
      newComment: {
        name: '',
        message: ''
      },
      comments: []
    },
    methods: {
      addComment() {
        if (this.newComment.name && this.newComment.message) {
          this.comments.push({
            name: this.newComment.name,
            message: this.newComment.message
          });
          // Reset form
          this.newComment.name = '';
          this.newComment.message = '';
        }
      }
    }
  });

//   AOS ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 3000
    });
});