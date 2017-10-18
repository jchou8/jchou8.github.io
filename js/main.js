// randomized taglines
const taglines = [
    "content creator",
    "check a look",
    "makes things",
    "uses computers",
    "has a website"
];

$(document).ready(function () {
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

    // select and display a tagline
    var tagline = taglines[Math.floor(Math.random() * taglines.length)];
    document.getElementById("tagline").innerHTML = tagline;

    // match column heights
    $('.match-height').matchHeight();

    // Improve accessibility for collapsible
    // Code adapted from https://www.w3.org/TR/wai-aria-practices/examples/accordion/js/accordion.js
    const collapsible = document.getElementById('education-collapsible');
    const headers = Array.from(collapsible.querySelectorAll('.collapsible-header'));
    collapsible.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('collapsible-header')) {
            const isExpanded = target.getAttribute('aria-expanded') == 'true';
            
            // collapse all other headers
            headers.forEach(function (header) {
                if (header.getAttribute('aria-expanded') == 'true') {
                    header.setAttribute('aria-expanded', 'false');
                }
            });

            // toggle collapsed status
            if (isExpanded) {
                target.setAttribute('aria-expanded', 'false');
            } else {
                target.setAttribute('aria-expanded', 'true');
            }
        }

        event.preventDefault();
    });
});

// Load particles
particlesJS.load('particles-js', './js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});