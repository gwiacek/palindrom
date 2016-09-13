function palindrom(wyraz) {

    var wyraz = prompt("Wpisz słowo do sprawdzenia")
    var sprawdz = true;
    var dlugosc = wyraz.length;

    if (dlugosc === 0)
        return "Nic nie wpisałeś!";

    else {
        for (var i = 0; i < dlugosc; i++) {
            if (wyraz[i] != wyraz[(dlugosc - i - 1)])
                sprawdz = false;
        }

        if (sprawdz === true)
           return`Słowo ${wyraz} jest palindromem`;
        else
            return`Słowo ${wyraz} nie jest palindromem`;
    }
}
console.log(palindrom());
