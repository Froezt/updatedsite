var x = document.getElementById("myTopnav");


function myFunction() {
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function check() {
        document.querySelector("#check").style.display = "inline-block";
}

document.querySelector("#stuurknop").addEventListener("click", check);

