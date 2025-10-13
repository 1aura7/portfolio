function calcul_moyenne(){
    var n1= prompt("Donner la première note:");
    var n2= prompt("Donner la deuxième note:");
    var n3= prompt("Donner la troisièeme note:");

    var somme = Number(n1) + Number(n2) + Number(n3);

        document.write("Voici la somme: " + somme + "<br>");
        var moyenne = somme/3;
        document.write("Voici la moyenne:" + moyenne + "<br>" );

        if (moyenne < 10){
            document.write("Redoublant");
        }
        else if (moyenne<12){
            document.write("Admis - Passable");
        }
        else if (moyenne<14){
            document.write("Admis - Bien");
        }
        else{
            document.write("Admis - Très Bien");
        }
        document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
}

function test_température(){
    var t= prompt("Saisissez la température:");

    if (t<10){
        document.write("Froid");
    }
    else if (t<25){
        document.write("Normal");
    }
    else{
        document.write("Chaud");
    }
    document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
}

function comparaison_nombres(){
    var y= prompt("Saisissez un nombre:");
    var z= prompt("Saisissez un autre nombre:");

    if (y > z){
        document.write(y + " > " + z);
    }
        
    else if (z > y){
        document.write(z + " > " + y);
    }
    else { 
        document.write("Les nombres sont égaux" );
        
        }
        document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');            
}

function deviner_chiffre(){

    var chiffre_secret = Math.floor(Math.random() * 20) + 1;
    var a = prompt("Devinez le chiffre secret:");

    if (a < chiffre_secret){
        alert("Votre chiffre est inférieur au chiffre secret !" );
    }
    else if (a > chiffre_secret){
       alert("Votre chiffre est supérieur au chiffre secret !" );
    }
    else{ 
        alert("Félicitations ! Vous avez trouvé le chiffre : "+ chiffre_secret );
    }

        alert("Le chiffre secret =" + chiffre_secret + "" +" "+"Le chiffre saisis =" + a);
    
}
