const pTag = document.body.querySelector("p")

function showUrl() {
    pTag.textContent = "Die URL der Seite lautet: " + window.location.href
}