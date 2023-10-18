// Solicitar al usuario que ingrese tres números
function confirmar(){
var numero1 = parseFloat(document.getElementById('uno').value);
var numero2 = parseFloat(document.getElementById('dos').value);
var numero3 = parseFloat(document.getElementById('tres').value);

  // Comprobar cuál es el número mayor
  if (numero1 > numero2 && numero1 > numero3) {
    alert("El número mayor es: " + numero1);
  } else if (numero2 > numero1 && numero2 > numero3) {
    alert("El número mayor es: " + numero2);
  } else if (numero3 > numero1 && numero3 > numero2) {
    alert("El número mayor es: " + numero3);
  } 
  else {
    // Mostrar los números iguales
    if (numero1 === numero2 && numero1 === numero3) {
      alert("Los tres números son iguales: " + numero1);
    } else if (numero1 === numero2) {
      alert("Los números iguales son el uno y dos. " + numero2 + " es el más grande.");
    } else if (numero1 === numero3) {
      alert("Los números iguales son el uno y tres. " + numero3 + " es el más grande.");
    } else if (numero2 === numero3) {
      alert("Los números iguales son el dos y tres. " + numero3 + " es el más grande.");
    }
  }
}