function confirmar(){
    var num = document.getElementById('answer').value;

    if (num == "")
    {
      alert("Campo vacío.");
    }
    else{
      if (num % 2 == 0)
      {
        alert(num + ", es divisible entre 2.");
      }
      else{
        alert(num + ' no es divisible entre 2.');
      }
    }
}
