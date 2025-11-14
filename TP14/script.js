function affichagetab(){
    document.write("<table border= 2px width=30%");
    for(let i=0; i<=2; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function affichagetab2(){
    var X=prompt("Combien de ligne?");
    document.write("<table border=2px width=30%");
    for(let i=1; i<=X; i++) {
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function seconnecter(){
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if(login=="admin" && password=="admin")
    {document.write("Bienvenue :"+login);}
    else {alert("Accès refusé")}
}

function cdc(){
    var chaine=prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient   " +chaine.length+"  caracteres"+"<br>");
    document.write("La première lettre est "+chaine.substr(0,1)+"<br>");
}


function seconnecter2()
{window.location.href="identification.html"}

function login(){
    var login=document.getElementById("nom").value;
    var mdp=document.getElementById("mdp").value;
    if (login=="admin" && mdp=="admin")
    {window.location.href="yes.html"}
else {window.location.href="no.html"}
}

function effacer() {
    document.getElementById("nom").value="";
    document.getElementById("mdp").value="";
}