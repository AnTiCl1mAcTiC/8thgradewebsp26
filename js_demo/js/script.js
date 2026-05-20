function askName() {
    var nameReturn = document.getElementById('ask-name')
    var name = prompt('pls imput name in box below');
    if (name == '') {
        alert('please try again');
    } else {
        nameReturn.innerHTML = 'hello ' + name + '! nice to meet you!'
    }
    nameReturn.style.fontSize = '30px';
    nameReturn.style.color = 'red';
}

function askQuestion() {
    var p = prompt ('how much toes do you have')
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'wow ' + p + ' is a lot of toes'
    }
}