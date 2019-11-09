function setParagraphText() {
    var paragraph = document.getElementById("my-paragraph");
    paragraph.innerText = "May I offer you an egg in this trying time?";
}

function main() {
    var paragraph = document.getElementById("my-paragraph");
    paragraph.onclick = setParagraphText;
}

document.addEventListener("DOMContentLoaded", main);