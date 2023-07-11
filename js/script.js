var menuToggle = document.querySelector(".menu-toggle")
menuToggle.onclick = function() {
    let navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}

var splide = new Splide( '.splide.products', {
    perPage     : 4,
    type        : 'loop',
    cover       : true,
    height      : '15rem',
    focus       : 'center',
    width       : '100vw',
    breakpoints : {
        640: {
            perPage     : 2,
            height  : '18rem',
      
        }
    },
});

splide.mount();

var thumb = document.querySelectorAll(".thumb-item")
thumb.forEach((item, index) => {
    item.addEventListener('click', (event) =>{
        imgSlider(event.target.src, event.target.dataset.color)
    })
})

function imgSlider(url, color){
    document.querySelector('.img-slider').style.opacity = 0;
    setTimeout( () =>{
        document.querySelector('.img-slider').src = url;
        const circle = document.querySelector(".circle")
        circle.style.background = color
        document.querySelector('.img-slider').style.opacity = 1;
    }, 1000)
}

function animation(){
    var animation = document.querySelectorAll(".animation-circle")
    for(var i=0; i < animation.length; i++){
        let windowHeight = window.innerHeight,
            elementTop = animation[i].getBoundingClientRect().top,
            elementVisible = 250
        if(elementTop < windowHeight - elementVisible)
            animation[i].classList.add("active")
        else
            animation[i].classList.remove("active")
    }
}

window.addEventListener("scroll", animation)