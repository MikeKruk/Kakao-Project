const navbar =
document.getElementById('navbar').classList;

const active_class = 'navbar_scrolled'

window.addEventListener("scroll", e => {
    
    if(pageYOffset > 200) navbar.add(active_class)
    else navbar.remove(active_class)
})


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//плавный скролл , просмотреть код !!! 