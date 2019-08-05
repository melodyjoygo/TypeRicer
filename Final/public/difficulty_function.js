var level = 0;

function change(num) {
    level = num;
    if(num == 0) {
        $("#desc").text("Displays a short paragraph and checks per word.");
    } else if(num == 1) {
        $("#desc").text("Displays a short paragraph and checks per character.");
    } else if(num == 2) {
        $("#desc").text("Displays a short paragraph, the letters of each word are jumbled, and checks per character.");
    }
}

function startGame() {
    if(level == 0) {
        document.getElementById("startBox").href="/easy";
    } else if(level == 1) {
        document.getElementById("startBox").href="/medium";
    } else if(level == 2) {
        document.getElementById("startBox").href="/hard";
    }
    return true;
}