// Light/Dark Mode Toggle Script
var toggle_btn;
var big_wrapper;



function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector("body");
}

declare();

let dark = false;

function toggleAnimation() {
    dark = !dark;
    if (dark) {
        big_wrapper.classList.add("dark");
        big_wrapper.classList.remove("light");
        document.querySelector(".moon-icon").style.display = "none";
        document.querySelector(".sun-icon").style.display = "block";
        toggle_btn.style.backgroundColor = "white";
        toggle_btn.style.color = "black";
        document.querySelector(".renters-ecosystem").style.color = "white";
    } else {
        big_wrapper.classList.add("light");
        big_wrapper.classList.remove("dark");
        document.querySelector(".moon-icon").style.display = "block";
        document.querySelector(".sun-icon").style.display = "none";
        toggle_btn.style.backgroundColor = "black";
        toggle_btn.style.color = "white";
        document.querySelector(".renters-ecosystem").style.color = "black";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle content visibility
    function toggleContent(activeContentId, inactiveContentId) {
        document.getElementById(activeContentId).style.display = 'block';
        document.getElementById(inactiveContentId).style.display = 'none';
    }

    // Tenants section
    document.getElementById('findPropertyBtn').addEventListener('click', function () {
        toggleContent('findPropertyContent', 'experienceStayContent');
    });

    document.getElementById('experienceStayBtn').addEventListener('click', function () {
        toggleContent('experienceStayContent', 'findPropertyContent');
    });

    // Landowners section
    document.getElementById('managePropertyBtn').addEventListener('click', function () {
        toggleContent('managePropertyContent', 'propertyInsightsContent');
    });

    document.getElementById('propertyInsightsBtn').addEventListener('click', function () {
        toggleContent('propertyInsightsContent', 'managePropertyContent');
    });

   // Merchants section
document.getElementById('boostReachBtn').addEventListener('click', function () {
    toggleContent('boostReachContent', 'enhanceEngagementContent');
});

document.getElementById('enhanceEngagementBtn').addEventListener('click', function () {
    toggleContent('enhanceEngagementContent', 'boostReachContent');
});

    // Set default content for each section
    toggleContent('findPropertyContent', 'experienceStayContent');
    toggleContent('managePropertyContent', 'propertyInsightsContent');
    toggleContent('boostReachContent', 'enhanceEngagementContent');
});

function toggleMenu() {
    const sidemenu = document.getElementById('sidemenu');
    sidemenu.classList.toggle('active');
}
// Add JavaScript functions for openmenu() and closemenu() if needed
function openmenu() {
    // Add code to open menu
}

function closemenu() {
    // Add code to close menu
}


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const navHeight = document.querySelector('nav').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


function toggleMenu() {
    const sidemenu = document.getElementById('sidemenu');
    const menuIcon = document.querySelector('.menu-icon i');
    
    if (sidemenu.classList.contains('active')) {
      sidemenu.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    } else {
      sidemenu.classList.add('active');
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  