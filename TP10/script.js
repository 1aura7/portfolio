function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;
}

function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;
}
function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;
}

function division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("resultat").value = c;
    if(b==0){
        document.getElementById("resultat").value ="Impossible";  
    }
}

function permutation() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    document.getElementById("t1").value = b;
    document.getElementById("t2").value = a;
}

function parite() {
    var a = document.getElementById("resultat").value;
    if(a%2==0){
    var b = document.getElementById("parite").value="Paire";
    }
    else{
        var b = document.getElementById("parite").value="Impaire";
    }
}

function effacer() {
    document.getElementById("t1").value="";
    document.getElementById("t2").value="";
    document.getElementById("resultat").value="";
    document.getElementById("parite").value="";
}
