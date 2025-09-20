// Get all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Function to remove active class from all links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add active class to the current link
function addActiveClass(current) {
    removeActiveClass();
    const currentLink = document.querySelector(`.navbar a[href="#${current.id}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// Function to handle scroll event
function handleScroll() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop -100;
        const sectionHeight = section.offsetHeight;

        // Check if the current scroll position is within the section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            addActiveClass(section);
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);