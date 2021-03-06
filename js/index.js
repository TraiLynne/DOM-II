// Variables

// Document Events

// *** === NavigationEvents === ***

// ** == Variables == ** 
let logo = document.querySelector('.logo-heading');
let navLinks = document.querySelectorAll('.nav-link');

//  ** == Events == **
navLinks.forEach(link => {
    link.addEventListener('dblclick', event => {
        // Prevent Default
        event.preventDefault();

        link.classList.toggle('clicked');
        alert(`Coming Soon !! Be on the look out for our ${event.target.innerText.toUpperCase()} page !!`);

        // Testing Log
        console.log('type:', event.type, '\n\rcurrent target:', event.currentTarget, '\n\rtarget:', event.target);
    });
});



// *** === Home Page Events === ***

// ** == Variables == **
let pictures = document.querySelectorAll('img');
let buttons = document.querySelector('.btn');

//  ** == Events == **
pictures.forEach(pic => {
    pic.addEventListener('mouseenter', event => {
        pic.classList.toggle('hover-effect');
        // Testing Log
        console.log('type', event.type, 'current target', event.currentTarget, 'target', event.target);
    });

    pic.addEventListener('mouseleave', event => {
        pic.classList.toggle('hover-effect');
        // Testing Log
        console.log('type', event.type, 'current target', event.currentTarget, 'target', event.target);
    });
});



// Testing Log


//console.log('type', event.type, 'current target', event.currentTarget, 'target', event.target);