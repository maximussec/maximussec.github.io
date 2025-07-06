document.addEventListener('DOMContentLoaded', () => {
    const newsletterBox = document.getElementById('floating-newsletter');
    const closeBtn = newsletterBox.querySelector('.close-btn');

    if (newsletterBox && closeBtn) {
        closeBtn.addEventListener('click', () => {
            newsletterBox.classList.add('hidden');
        });
    }
});
