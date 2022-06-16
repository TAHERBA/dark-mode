document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});
const darkmode = document.getElementById('darkmode');
const body = document.getElementById('body');
darkmode.addEventListener('click',function (){
    body.classList.toggle('night');
    darkmode.classList.toggle('active')
});