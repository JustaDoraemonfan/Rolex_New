const hammenu = document.querySelector('.ham-menu');
const offsreenmenu = document.querySelector('.off-screen-menu');

hammenu.addEventListener('click', () => {
    hammenu.classList.toggle('active');
    offsreenmenu.classList.toggle('active');
});