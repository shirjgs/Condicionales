function Letras(L){
    A = L.keyCode || L.which;
    t = String.fromCharCode(A).toLowerCase(); //Tecla.
    z = " áéíóúabcdefghijklmnñopqrstuvwxyz"; //Letras.
    x = "8-37-39-46"; //Letras especiales.
    s = false
    for(var i in x){
        if(A == x[i]){
            s = true;
            break;
        }
    }
    if(z.indexOf(t)==-1 && !s){
        return false;
    }
}

function confirmar(){
    var icecream = document.getElementById('answer').value.toLowerCase();
    let helado = 50;
    let oreo = 10;
    let kitkat = 15;
    let brownie = 20;

    if(icecream == ""){
        alert("Ingresa un topping.");
    }
    else{
        if(icecream == "oreo"){
            let precio = helado + oreo;
            alert(`El precio de su helado con topping de oreo son: $${precio} pesos.`);
        }
        else if(icecream == "kitkat"){
            let precio = helado + kitkat;
            alert(`El precio de su helado con topping de Kitkat son: $${precio} pesos.`);
        }
        else if(icecream == "brownie"){
            let precio = helado + brownie;
            alert(`El precio de su helado con topping de brownie son: $${precio} pesos.`);
        }
        else{
            alert("Lo sentimos, no disponemos de ese toppin. Son: $" + helado + " pesos.")
        }
    }  
}