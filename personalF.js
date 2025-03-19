let typed=new Typed(".typed",{
    strings:["Frontend Developer","Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let sec=document.querySelectorAll("section");
let navlinks=document.querySelectorAll(".header nav a");
window.onscroll=()=>{
    sec.forEach(s=>{
        let top=window.scrollY;
        let offset=s.offsetTop - 150;
        let height=s.offsetHeight;
        let id=s.getAttribute("id");
        if(top>=offset&&top<offset+height)
        {
            navlinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector(".header nav a [herf*='+id+']").classList.add("active");
            });
        }
    });
};
/*document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.container');
    const progressLines = document.querySelectorAll('.progress-line');
    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Skills section is visible!");
                progressLines.forEach(line => {
                    line.classList.add('animated-bar');
                    const span = line.querySelector('span');
                    if (span) {
                        span.classList.add('animated-bar');
                    }
                });
                observer.disconnect(); // Stops observing once triggered
            }
        });
    },{ threshold: 0.5 });
    observer.observe(skillsSection);
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Update active link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Optional: Update active link on scroll
    window.addEventListener('scroll', () => {
         let current = '';

         sections.forEach( section => {
             const sectionTop = section.offsetTop;
             const sectionHeight = section.clientHeight;
             if(pageYOffset >= sectionTop - sectionHeight / 3){
                 current = section.getAttribute('id');
             }
         })

         navLinks.forEach( navLink => {
             navLink.classList.remove('active');
             if(navLink.getAttribute('href').substring(1) == current){
                 navLink.classList.add('active');
             }
         })
    });
});*/

