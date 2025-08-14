document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded successfully!");

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
});



