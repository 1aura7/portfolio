function effacer() {
    document.getElementById("q1").value="";
    document.getElementById("q2").value="";
    document.getElementById("q3").value="";
    document.getElementById("p1").value="";
    document.getElementById("p2").value="";
    document.getElementById("p3").value="";
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("s3").value="";
    document.getElementById("total").value="";
}

function somme() {
    var a = document.getElementById("q1").value;
    var b = document.getElementById("p1").value;
    var c = Number(a) * Number(b);
    document.getElementById("s1").value = c;
    
    var d = document.getElementById("q2").value;
    var e = document.getElementById("p2").value;
    var f = Number(d) * Number(e);
    document.getElementById("s2").value = f;

    var g = document.getElementById("q3").value;
    var h = document.getElementById("p3").value;
    var i = Number(g) * Number(h);
    document.getElementById("s3").value = i;

    var x = Number(c) + Number(f) + Number(i);
    document.getElementById("total").value = x;
    
}
