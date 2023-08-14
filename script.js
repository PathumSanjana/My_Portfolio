function toggleMenu() {
    const checkbox = document.getElementById('check');
    checkbox.checked = !checkbox.checked;
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
            top: offsetTop - (window.innerHeight - section.clientHeight) / 2,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const navList = document.querySelector('nav ul');
    const checkbox = document.querySelector('#check');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href');
            scrollToSection(targetSectionId);

            // Toggle the 'checked' state of the checkbox to show/hide the navigation menu
            checkbox.checked = !checkbox.checked;
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href');
            scrollToSection(targetSectionId);
        });
    });
});

