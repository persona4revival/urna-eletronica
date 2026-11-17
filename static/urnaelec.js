const caminhoSons = "urna%20eletronics/";

function votar() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let foto = document.getElementById("foto");
    let retrato = document.getElementById("retrato");

    foto.removeAttribute("src");

    let som = new Audio(`${caminhoSons}urna.mp3`);
    let som2 = new Audio(`${caminhoSons}che.mp3`)
    let som3 = new Audio(`${caminhoSons}brainrot.mp3`)
    let som4 = new Audio(`${caminhoSons}china.mp3`)

// lista de candidatos padrão Amanda
    if (numero == "13") {
        resultado.innerHTML = "Voto registrado: Lula";
        foto.src = "https://media1.tenor.com/m/0a09KUNuY6oAAAAC/lula-lula-presidente.gif";
        som.play();

    } else if (numero == "22") {
        resultado.innerHTML = "Voto registrado: Flávio Bolsonaro";
        foto.src = "https://media1.tenor.com/m/4JL9AdylF8sAAAAC/bolsonaro-mito.gif";

        som.play();

    } else if (numero == "77") {
        resultado.innerHTML = "Voto registrado: Professor Felipe";
        foto.src = "";

        som.play();

    } else if (numero == "18") {
        resultado.innerHTML = "Voto registrado: Muryllo";
        foto.src = "";
        som.play();

    } else if (numero == "90") {
        resultado.innerHTML = "Voto registrado: Professor Juliano";
        foto.src = "";
        som.play();

    } else if (numero == "111") {
        resultado.innerHTML = "Voto registrado: Ernesto Che Guevara";
        foto.src = "https://media1.tenor.com/m/nSs8YJu-krUAAAAC/ernesto-che-guevara.gif";
        som2.play();

    } else if (numero == "67") {
        resultado.innerHTML = "Voto registrado: Tung Tung Tung Tung Sahur";
        foto.src = "https://media1.tenor.com/m/FGdPHK4LikEAAAAd/tung-tung-tung-sahur-tung-tung-god.gif";
        som3.play();

    } else if (numero == "42") {
        resultado.innerHTML = "Voto registrado: Bombardilo Crocodilo";
        foto.src = "https://media.tenor.com/H5NEprNqlfAAAAAi/crocodile-who-likes-to-bomb.gif";
        som3.play();

    } else if (numero == "47") {
        resultado.innerHTML = "Voto registrado: Donald John Trump";
        foto.src = "https://media1.tenor.com/m/QmCzmXP_tssAAAAd/donald-trump-mad.gif";
        som4.play();

// Lista de candidatos extra Luis
    } else if (numero == "1984") {
        resultado.innerHTML = "Voto registrado: Freddy Fazbear";
        foto.src = "https://media1.tenor.com/m/q6_coxgIG2sAAAAC/daym.gif";
        som.play();

    } else if (numero == "11") {
        resultado.innerHTML = "Voto registrado: Pink Pie";
        foto.src = "https://media1.tenor.com/m/GVk5mAsHp8cAAAAC/mlp-pinkie-pie.gif";
        som.play();

    } else if (numero == "2024") {
        resultado.innerHTML = "Voto registrado: Herobrine";
        foto.src = "https://media.tenor.com/eKD4UTHXTCUAAAAi/herobrine-minecraft.gif";
        som.play();

    } else if (numero == "69") {
        resultado.innerHTML = "Voto registrado: Jenny";
        foto.src = "https://media1.tenor.com/m/gFiu3d1O59EAAAAC/funny-jokes.gif";
        som.play();

    } else if (numero == "2006") {
        resultado.innerHTML = "Voto registrado: Joker";
        foto.src = "https://media1.tenor.com/m/lS0wCFg-SfkAAAAd/shuake-akeshu.gif";
        som.play();

    } else if (numero == "2000") {
        resultado.innerHTML = "Voto registrado: Mogeko";
        foto.src = "https://media1.tenor.com/m/YDNGYImRUFIAAAAC/moge-ko-mogeko.gif";
        som.play();

    } else if (numero == "2018") {
        resultado.innerHTML = "Voto registrado: Haru Urara";
        foto.src = "https://media1.tenor.com/m/FCT9oPcObbgAAAAC/uma-musume-uma.gif";
        som.play();

// Voto nulo
    } else {
        resultado.innerHTML = "Voto nulo";
    }

    retrato.classList.toggle("has-photo", Boolean(foto.getAttribute("src")));
}


function corrigir() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("foto").removeAttribute("src");
    document.getElementById("retrato").classList.remove("has-photo");
}


function branco() {
    document.getElementById("resultado").innerHTML = "Voto em branco";
    document.getElementById("foto").removeAttribute("src");
    document.getElementById("retrato").classList.remove("has-photo");
    new Audio(`${caminhoSons}urna.mp3`).play();
}