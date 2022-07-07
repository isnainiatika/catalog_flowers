let jeda = document.getElementById("jeda");
let sisaText = document.getElementById("more");

jeda.style.display = "inline"
sisaText.style.display = "none"


function readmore() {
    let jeda = document.getElementById("jeda");
    let sisaText = document.getElementById("more");
    let btnMore = document.getElementById("btnRM");

    if (jeda.style.display === "none") {
        jeda.style.display = "inline";
        btnMore.innerHTML = "Read More ...";
        sisaText.style.display = "none";
    } else {
        jeda.style.display = "none";
        btnMore.innerHTML = "Read Less";
        sisaText.style.display = "inline";
    }
}
