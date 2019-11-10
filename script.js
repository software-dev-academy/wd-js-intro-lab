function setParagraphText() {
    let paragraph = document.querySelector("#my-paragraph");
    paragraph.innerText = "May I offer you an egg in this trying time?";
}

function main() {
    let paragraph = document.querySelector("#my-paragraph");
    paragraph.onclick = setParagraphText;``
}

document.addEventListener("DOMContentLoaded", main);