document.addEventListener('DOMContentLoaded', () => {
    const fromLeft = document.getElementById('from-left');
    const fromRight = document.getElementById('from-right');
    const actNowButton = document.getElementById('act-now');


    setTimeout(() => {
        fromLeft.classList.add('from-left');
        fromRight.classList.add('from-right');
    }, 300);

    
    actNowButton.addEventListener('mouseover', () => {
        actNowButton.style.backgroundColor = '#ff616f';
    });

    actNowButton.addEventListener('mouseout', () => {
        actNowButton.style.backgroundColor = '#e50914';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 100;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer-con-3');
    footer.style.opacity = 0;

    setTimeout(() => {
        footer.style.transition = 'opacity 2s ease-out';
        footer.style.opacity = 1;
    }, 100);
});


document.querySelector('.bt').addEventListener('click', function() {
    alert("Your transaction wasn't successful. Please contact this number to donate: +38970757601 or check for spelling errors.But ur logged in");
  });

  
  

  function toggleMore() {
      const moreTestimonials = document.getElementById('moreTestimonials');
      if (moreTestimonials.style.display === 'none') {
          moreTestimonials.style.display = 'block';
      } else {
          moreTestimonials.style.display = 'none';
      }
  }


  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)';
        }, index * 300);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)';
        }, index * 300);
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    console.log('JavaScript is running'); // Add this line to check if the script is being executed
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const name = document.getElementById('firstname').value;
        const greetingMessage = `Hello, ${name}!`;
        alert(greetingMessage); // Display greeting message in an alert
    });
});



function goToRandomLocation() {
    const locations = [
      "https://maps.app.goo.gl/ceTscGRXBaPVtT4a6",
      "https://maps.app.goo.gl/23poX4oL9pkRzgNW9",
      "https://maps.app.goo.gl/23poX4oL9pkRzgNW9",
    ];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    window.location.href = randomLocation;
  }


  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});




document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container-80').classList.add('slideIn-80');
});


function toggleMenu() {
    var nav = document.getElementById('nav-links');
    var hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
}
