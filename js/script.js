console.log("js/script.js")

const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click",function(event){
    event.preventDefault();

});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click",function(){
    if (document.body.classList.toggle("dark-mode")){
        themeToggle.textContent = "Toggle Light Mode";
    } else {
        themeToggle.textContent = "Toggle Dark Mode";
    }
});

const toggleSkills = document.getElementById("toggleSkills");
const skillSection = document.getElementById("skillSection");

toggleSkills.addEventListener("click",function(){
    skillSection.classList.toggle("hidden");
});

submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name==="" || email===""){
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted succesfully!");
    }
});