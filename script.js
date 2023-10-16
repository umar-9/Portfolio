setInterval(texter, 4000);
var txt = "";
var i = 0;

function texter() {
    i = 0;
    var x = document.getElementById("text_changer");
    const disciplines = ["Aspiring Engineer", "Aspiring Mechanical Engineer", "Aspiring Electronic Engineer", "Aspiring Software Engineer", "Aspiring Aerospace Engineer"];
    txt = disciplines[(disciplines.indexOf(x.textContent) + 1) % 5];
    x.innerHTML = "";
    typewriter();
}
window.onload = texter;

function typewriter() {
    if (i < txt.length) {
        document.getElementById("text_changer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, 50);
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
