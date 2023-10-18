function confirmar(){
    var dia = document.getElementById('answer').value;
    
    if(dia == "Lunes" || dia == "lunes"){
        alert("Hoy es Lunes⏰");
    }
    else if(dia == "Viernes" || dia == "viernes"){
        alert("Hoy es Viernes🌞");
    }
    else if(dia == "Sábado" || dia == "sábado" || dia == "Sabado" || dia == "sabado" || dia == "Domingo" || dia == "domingo"){
        alert("Es fin de semana🏖️");
    }
    else if(dia == "martes" || dia == "miércoles" || dia == "jueves" || dia == "Martes" || dia == "Miércoles" || dia == "Jueves" || dia == "miercoles" || dia == "Miercoles"){
        alert("Día entre semana👀");
    }
    else if(dia != "martes"){
        alert("Introduzca un día de la semana.")
    }
}

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