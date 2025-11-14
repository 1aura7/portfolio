function seconnecter3(){
    var i = 0;
    do{
        var id = prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");
        if (id == "admin" && mdp == "admin"){
            document.write("Bienvenue" + "" + "" +id);
            break;
        } else alert ("Accès refusé");
        i= i+1;
    } while (i<3);

    if (i == 3) alert("Délai dépassé");
}

function ajouter()
{window.location.href="tab-dynamique.html"} 

function addLigne(){
    var name = document.getElementById("nom").value;
    var age = document.getElementById("age").value;
    var prenom = document.getElementById("prenom").value;
    
    if (name == "" || age == "" || prenom == ""){
        alert("Un des deux éléments n'est pas complet ou valide")
    }else if (age < 10 || age > 40){
        alert("L'âge n'est pas validé");
    }
    else{
        var table = document.getElementById("myTable");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = name;
        cell2.innerHTML = prenom;
            cell3.innerHTML = age;
    }


}

