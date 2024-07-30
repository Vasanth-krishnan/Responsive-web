const navbar = document.getElementById("home");
function changeNavbarColor(){
    if(window.scrollY >=70){
    navbar.classList.add('scrolled');
    }
    else{
    navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll',changeNavbarColor);
document.addEventListener('scroll', function() {
    const image = document.querySelector('.animated-image');
    const imageContainer = document.querySelector('.image-container');
    const containerPosition = imageContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerPosition < windowHeight) {
        image.classList.add('animate');
    } else {
        image.classList.remove('animate');
    }
});
