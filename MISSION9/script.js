function testqcm() {
     let score = 0;
    let form = document.getElementById("qcm");
    let bonnesReponses = form.querySelectorAll("input[value='1']:checked");
    score = bonnesReponses.length;

    document.getElementById("score").textContent = "Votre score est : " + score + " / 17";
}

function effacer() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(i => i.checket = false);
    document.getElementById("qcm").textContent = "";
    document.getElementById("score").textContent = "";
}

function ouvrircorrige() {
    window.open("corrige.html", "corrige", "width=600,height=600");
}