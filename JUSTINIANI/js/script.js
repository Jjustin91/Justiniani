console.log("js/script.js")

const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click",function(event){
    event.preventDefault();

});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click",function(){
    if (document.body.classList.toggle("dark-mode")){
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>Dark Mode';
    }
});

const toggleSkills = document.getElementById("toggleSkills");
const skillSection = document.getElementById("skillSection");

toggleSkills.addEventListener("click",function(){
    const isHidden = skillSection.classList.toggle("hidden");

    if (isHidden){
        toggleSkills.innerHTML = '<i class="fa-solid fa-eye"></i>Show Skills';
    } else {
        toggleSkills.innerHTML = '<i class="fa-solid fa-eye-slash"></i>Hide Skills';
    }
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