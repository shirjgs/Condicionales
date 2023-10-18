function confirmar(){
    var num = document.getElementById('answer').value;

    if (num == "")
    {
      alert("Campo vacío.");
    }
    else{
      if(num == 1000){
        alert(num + ", ganaste un premio🏆");
      }
      else{
        alert(num + ': Lo sentimos, sigue participando.');
      }
    }
}
