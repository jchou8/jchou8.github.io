$( document ).ready(function() {
    // Initialization to make hamburger menu work
    const sideNavLinks = Array.from(document.querySelectorAll('.side-nav a'));
    console.log(sideNavLinks)
    $(".button-collapse").sideNav({
        closeOnClick: true,
        draggable: true,

        // Make side nav links only tabbable if the menu is open
        onOpen: function() {
            sideNavLinks.forEach(function (link) {
                link.setAttribute('tabindex', '0');
                console.log('tabbable')
            });
        },

        onClose: function() {
            sideNavLinks.forEach(function (link) {
                link.setAttribute('tabindex', '-1');
            });
        },
    });

    // match column heights
    $('.match-height').matchHeight();
});

// Load particles
particlesJS.load('particles-js', './js/particles2.json', function() {
    console.log('callback - particles.js config loaded');
});