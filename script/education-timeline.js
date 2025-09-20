// Education Timeline Interactive Effects
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive hover effects for education timeline
    document.querySelectorAll('.education-timeline-year-circle').forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });

    // Add click animation for education timeline cards
    document.querySelectorAll('.education-timeline-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98) translateY(-8px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.education-timeline-item').forEach(item => {
        observer.observe(item);
    });
});


// Skills section functionality
const skillsHeaders = document.querySelectorAll('.skills_header');

// Ensure all containers are closed on load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skills_content').forEach(content => {
        content.classList.remove('skills_open');
    });
});

// Accordion behavior: only one open at a time
skillsHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent bubbling to document
        document.querySelectorAll('.skills_content').forEach(content => {
            content.classList.remove('skills_open');
        });
        header.parentElement.classList.add('skills_open');
    });
});

// Close all when clicking outside the entire skills section
document.addEventListener('click', function(event) {
    // Replace '.skills_container' with your actual parent class or id if different
    if (!event.target.closest('.skills_container')) {
        document.querySelectorAll('.skills_content').forEach(content => {
            content.classList.remove('skills_open');
        });
    }
});

// Contact form success messagedocument.querySelector('.contact-left').addEventListener('submit', function(e) {

document.querySelector('.contact-left').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function(response) {
    if (response.ok) {
      document.getElementById('form-success').style.display = 'block';
      form.reset();
    } else {
      alert('Oops! There was a problem submitting your form');
    }
  });
});


//contact from success popup
document.querySelector('.contact-left').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function(response) {
    if (response.ok) {
      document.getElementById('popup-success').style.display = 'flex';
      form.reset();
    } else {
      alert('Oops! There was a problem submitting your form');
    }
  });
});

// particles.js configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 1800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.15
    },
    "size": {
      "value": 4
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#808080",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  },
  "retina_detect": true
});