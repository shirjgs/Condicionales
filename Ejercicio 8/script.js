function Numeros(num) {
    var numero = num.which ? num.which : num.keyCode;
    if (numero == 8) {
        return true;
    } else if (numero >= 48 && numero <= 57) {  
        return true;
    } else {
        return false;
    }
}

function confirmar(){
    var calif = document.getElementById('answer').value;
    
    if(calif == ""){
        alert("Ingrese la calificación.")
    }
    else{
        if(calif >= 1 && calif <= 10){
            if(calif < 6){
                alert("Reprobado😿");
            }
            else if(calif >= 6 && calif <=8){
                alert("Regular👍");
            }
            else if(calif == 9){
                alert("Bien✨");
            }
            else if(calif == 10){
                alert("Excelente🏆");
            }
        }
        else{
            alert("El número ingresado esta fuera del rango.");
        }
    }
}