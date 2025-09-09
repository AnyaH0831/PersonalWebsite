const now = new Date();
console.log(now.toLocaleTimeString()); 

console.log("Script loaded successfully!");
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded successfully!");

    document.getElementById("aboutBtn").classList.add("active");

    document.getElementById("aboutBtn").addEventListener("click", function() {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        this.classList.add("active");
        document.getElementById("experienceBtn").classList.remove("active");
        document.getElementById("projectBtn").classList.remove("active");  
        document.getElementById("contactBtn").classList.remove("active");   
    });

    document.getElementById("experienceBtn").addEventListener("click", function() {
        document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
        this.classList.add("active");
        document.getElementById("aboutBtn").classList.remove("active");
        document.getElementById("projectBtn").classList.remove("active");  
        document.getElementById("contactBtn").classList.remove("active");   
    });

    document.getElementById("projectBtn").addEventListener("click", function() {
        document.getElementById("project").scrollIntoView({ behavior: "smooth" });
        this.classList.add("active");
        document.getElementById("aboutBtn").classList.remove("active");
        document.getElementById("experienceBtn").classList.remove("active");
        document.getElementById("contactBtn").classList.remove("active");   
    });
    
    document.getElementById("contactBtn").addEventListener("click", function() {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        this.classList.add("active");
        document.getElementById("aboutBtn").classList.remove("active");
        document.getElementById("experienceBtn").classList.remove("active");
        document.getElementById("projectBtn").classList.remove("active");   
    });


    const filterButtons = document.querySelectorAll('.projectFilters button');
    const cards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
         
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            const res = await fetch('https://backend-api-nine-theta.vercel.app/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            });

            const result = await res.json();
            alert(result.success || result.error); 
            form.reset(); 
        } catch (err) {
            alert('Failed to send message.');
            console.error(err);
        }
    });

    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
 
    if (!hamburger || !mobileNav) {
        console.log("Element not found!", hamburger, mobileNav);
        return;
    }

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    });

    const sections = [
        { id: "about", btn: document.getElementById("aboutBtn") },
        { id: "experience", btn: document.getElementById("experienceBtn") },
        { id: "project", btn: document.getElementById("projectBtn") },
        { id: "contact", btn: document.getElementById("contactBtn") }
    ];

   
    sections.forEach(section => {
        section.btn.addEventListener("click", function() {
            document.getElementById(section.id).scrollIntoView({ behavior: "smooth" });
        });
    });

 
    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY + window.innerHeight / 2; 

        sections.forEach(section => {
            const elem = document.getElementById(section.id);
            const top = elem.offsetTop;
            const bottom = top + elem.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                section.btn.classList.add("active");
            } else {
                section.btn.classList.remove("active");
            }
        });
    });
  

});



