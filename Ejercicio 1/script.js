function confirmar(){
    var res = document.getElementById('answer').value;
    if (res == 'si')
    {
      alert("Ciertamente💕");
    }
    else if(res == 'no')
    {
      alert("No te creo😒");
    }
    else{
      alert('Escribe "si" o "no" como respuesta☺️');
    }
}
