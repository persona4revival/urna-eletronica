function votar() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    let som = new Audio("urna.mp3");
    let som2 = new Audio("che.mp3")
    let som3 = new Audio("brainrot.mp3")
    let som4 = new Audio("china.mp3")

    if (numero == "13") {
        resultado.innerHTML = "Voto registrado: Lula";
        foto.src = "https://media1.tenor.com/m/0a09KUNuY6oAAAAC/lula-lula-presidente.gif";
        resultado.innerHTML = "Resultado caso for eleito: não vai mudar muita coisa";
        som.play();

    } else if (numero == "22") {
        resultado.innerHTML = "Voto registrado: Flávio Bolsonaro";
        foto.src = "https://media1.tenor.com/m/4JL9AdylF8sAAAAC/bolsonaro-mito.gif";
        resultado.innerHTML = "Resultado caso for eleito: a gente vai morrer";

        som.play();

    } else if (numero == "77") {
        resultado.innerHTML = "Voto registrado: Professor Felipe";
        foto.src = "";
        resultado.innerHTML = "Resultado caso for eleito: todos vamos virar piratas";

        som.play();

    } else if (numero == "18") {
        resultado.innerHTML = "Voto registrado: Muryllo";
        foto.src = "";
        resultado.innerHTML = "Resultado caso for eleito: não existem mais bolinhas de pimbolim no mundo e todos nós somos robôs";
        som.play();

    } else if (numero == "90") {
        resultado.innerHTML = "Voto registrado: Professor Juliano";
        foto.src = "";
        resultado.innerHTML = "Resultado caso for eleito: nada";
        som.play();

    } else if (numero == "111") {
        resultado.innerHTML = "Voto registrado: Ernesto Che Guevara";
        foto.src = "https://media1.tenor.com/m/nSs8YJu-krUAAAAC/ernesto-che-guevara.gif";
        resultado.innerHTML = "Resultado caso for eleito: ...";
        som2.play();

    } else if (numero == "67") {
        resultado.innerHTML = "Voto registrado: Tung Tung Tung Tung Sahur";
        foto.src = "https://media1.tenor.com/m/FGdPHK4LikEAAAAd/tung-tung-tung-sahur-tung-tung-god.gif";
        resultado.innerHTML = "Resultado caso for eleito: ele vai sahur nela";
        som3.play();

    } else if (numero == "42") {
        resultado.innerHTML = "Voto registrado: Bombardilo Crocodilo";
        foto.src = "https://media.tenor.com/H5NEprNqlfAAAAAi/crocodile-who-likes-to-bomb.gif";
        resultado.innerHTML = "Resultado caso for eleito: ele vai explodir a sua ...";
        som3.play();

    } else if (numero == "47") {
        resultado.innerHTML = "Voto registrado: Donald John Trump";
        foto.src = "https://media1.tenor.com/m/QmCzmXP_tssAAAAd/donald-trump-mad.gif";
        resultado.innerHTML = "Resultado caso for eleito: VAMOS TODOS MORRER";
        som4.play();


    } else {
        resultado.innerHTML = "Voto nulo";
    }
}


function corrigir() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}


function branco() {
    document.getElementById("resultado").innerHTML = "Voto em branco";
    new Audio("urna.mp3").play();
}