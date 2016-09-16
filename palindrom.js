function palindrom(sprSlowo){
  sprSlowo = prompt("wpisz slowo do sprawdzenia");
  var dlugosc = sprSlowo.length;
  
  for( var i = 0 ; i < dlugosc; i++){
    if (sprSlowo[i] === sprSlowo[(dlugosc - i - 1)])
      {
        return ("slowo jest palindromem");     
  }
     {return ("slowo nie jest palindromem");} 
}
}
console.log(palindrom());
