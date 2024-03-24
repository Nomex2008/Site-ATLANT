const burger = document.querySelector('#burger')
const nav = document.querySelector('#nav')

burger.onclick = () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    document.body.classList.toggle('active')
    console.log(11)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});