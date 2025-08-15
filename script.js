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



});



