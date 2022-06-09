let output_btn = document.getElementById("btn_output")
let entry_btn = document.getElementById("btn_entry")
let words = new Array()
let i = 0

function get_words(){
    let word = word_selector()
    let word_typed = document.getElementById("text_output").value
    document.querySelector("#confirm_output").innerHTML = confirmer(word, word_typed)
}

function confirmer(a, b){
    if (a.toUpperCase() == b.toUpperCase()){
        return "you win"
    }
    else{
        return "try again"
    }

}

entry_btn.addEventListener("click",entry_words)

function entry_words(){
    words[i] = document.getElementById("text_entry").value
    i += 1
    document.querySelector("#confirm_entry").innerHTML = "successfully saved " + i + " words"
}

function word_selector(){
    return words[Math.floor(Math.random() * words.length)];
}

output_btn.addEventListener("click",get_words)

const colors = "";
let body  = document.querySelector("body")


function getrandomvalues(){
    return Math.floor(Math.random()*255);
}

setInterval(changeColor, 1500);

function changeColor(){
    r = getrandomvalues();
    g = getrandomvalues();
    b = getrandomvalues();

    let colorchanger = r+", "+g+", "+b;

    body.style.background = "rgb("+colorchanger+")";
}