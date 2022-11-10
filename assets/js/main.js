

$(".select-plan").click(function (e) {
    e.preventDefault();
    $(".select-plan").removeClass("bg-secondary");
    $(".select-plan").removeClass("selected");
    this.classList.add("bg-secondary", "selected");
    $(".selected").html("SELECTED");
    sessionStorage.setItem("selectedPlan", $(".selected").attr('id'));
});

$(".menu-trigger").click(function (e) {
    let burgerNav = document.getElementById("burger-nav");
    if (burgerNav.style.display === "block")
        burgerNav.style.display = "none";
    else
        burgerNav.style.display = "block";

    $(".menu-trigger").toggleClass("active");
})

$(".submenu>a").click(function (e) {
   e.preventDefault();
    $(".submenu ul").removeClass("active");
    this.nextElementSibling.classList.add("active");
})

const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body"); 

acc_btns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

    acc_contents.forEach((accordion)=>{
        if (e.target.nextElementSibling !== accordion && accordion.classList.contains ("active")) {
            accordion.classList.remove("active")
            acc_btns.forEach((btn)=> btn.classList.remove("active"));
        }
    })
     
    const platform = btn.nextElementSibling;

    platform.classList.toggle("active");

    btn.classList.toggle("active");
})
});

window.onclick = (e)=>{
    if(!e.target.matches(".accordion-header")){
        acc_btns.forEach((btn)=> btn.classList.remove("active"));
        acc_contents.forEach((accordion)=> accordion.classList.remove("active"));
    }
}
