$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('register-btn');
    const popup = document.getElementById('game-popup');
    const closeBtn = popup.querySelector('.close-btn');
    const images = popup.querySelectorAll('img');

    // Show the popup when the register button is clicked
    registerBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        popup.style.display = 'flex';
    });

    // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Handle image clicks and redirect
    images.forEach(image => {
        image.addEventListener('click', function() {
            const formUrl = image.getAttribute('data-url');
            window.location.href = formUrl;
        });
    });

    // Close the popup when clicking outside the content area
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});









document.addEventListener('DOMContentLoaded', () => {
    const movieItems = document.querySelectorAll('.movie-item');
    const eventSection = document.getElementById('event');
    const eventContentSection = document.getElementById('event-content');
    const imageGallery = document.getElementById('image-gallery');
    const backButton = document.getElementById('back-button');

    // Example images associated with the event items
    const images = {
        'RITI 1.0': [
            'ritiimg/Riti1/DSC03782.JPG',
            'ritiimg/Riti1/DSC03783.JPG'
            // Add more images here
        ],
        'RITI 2.0': [
            'ritiimg/riti2/DSC08549.JPG',
            'ritiimg/riti2/DSC08550.JPG'
            // Add more images here
        ]
        // Add more events and their associated images
    };

    movieItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const title = this.querySelector('.movie-item-title').textContent;
            const eventImages = images[title] || [];

            // Clear current images
            imageGallery.innerHTML = '';

            // Add new images
            eventImages.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                imageGallery.appendChild(img);
            });

            // Hide the event section and show the content section
            eventSection.style.display = 'none';
            eventContentSection.style.display = 'block';
        });
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        eventContentSection.style.display = 'none';
        eventSection.style.display = 'block';
    });
});
