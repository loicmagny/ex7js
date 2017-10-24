function ex7(){
  var shoes = document.getElementById('pointure').value;
  var birthyear = document.getElementById('annee').value;
  result = (((((shoes * 2) + 5) * 50) - birthyear) + 1766);
  alert(result);
}
