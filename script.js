document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.man-part');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    document.addEventListener('wheel', (e) => {
        const deltaY = e.deltaY;
        const sectionHeight = sections[currentSectionIndex].offsetHeight;
        if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
            currentSectionIndex++;
        } else if (deltaY < 0 && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
            currentSectionIndex--;
        }
    });
});


// Redirect to checkout.html

function redirectToCheckout(){
    window.location.href = "checkout.html";
}

function redirectToView(){
    window.location.href = "view.html";
}