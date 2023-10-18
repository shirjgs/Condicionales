function confirmar(){
    var num1 = parseFloat(document.getElementById('uno').value);
    var num2 = parseFloat(document.getElementById('dos').value);

    if (isNaN(num1 == "" || num2 == ""))
    {
      alert("Campo vacío.");
    }

    else{
      if (num1 < num2){
        alert('El ' + num1 + " es menor que el " + num2 + ".");
      }
      else if(num2 < num1) {
        alert('El '+ num2 + ' es menor que el ' + num1+ ".");
      }
      else if (num1 == num2){
        alert('Son el mismo número.');
      }
    } 
}
