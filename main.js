document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('.text', {
        strings: ['Nazwa Talisya Inaya'],
        typeSpeed: 100,
        loop: true,
        backDelay: 1000,
        backSpeed:100
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach(skillBar => {
        const skillValue = skillBar.dataset.value;
        skillBar.style.width = skillValue;
    });
});


