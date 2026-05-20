function shake() {
    alert("hi");
}
function shake() {
    ask_question();
    reveal_fortune();
}

function ask_question() {

}

function reveal_fortune() {
    document.getElementById("fortune").textContent = "hi";
}
function get_fortunes() {
    return [
    "It is hard to say",
    "i forgot, try again now",
    "idk, think more clearly next time",
    "ask zimo",
    "dont ask zimo, he is not trustworthy",
    "contemplate and if your thoughts align the answer will come to you",
    "forget about that, you need to start calculating life savings",
    "if the answer is yes then sure",
    "im not making you ask me questions all day with no concrete answer, you are",
    "uh... its nice weather today",
    "i dont think you want to know",
    "i belive in you"
    ""
    ];
}
function reveal_fortune() {
    const fortunes = get_fortunes();
    const fortune = select_fortune(fortunes);
    document.getElementById("fortune").textContent = fortune;
}

function select_fortune(fortunes) {
    const i = Math.floor(Math.random() * fortunes.length);
    return fortunes[i];
}