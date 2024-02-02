//Zadanie 1
//Dla znajdującej się ponizej listy przygotuj program, który pozwala na ocenienie egzaminu.
//Program powinien iterować przez listę osób oraz przez listę punktów. 
//W zalezności od otrzymanej ilości punktów funkcja o nazwie Rate, powinna przydzielić odpowiednią ocenę.
//0 - 59: 2.0, 60 - 64: 3.0, 65 - 74: 3.5, 75 - 84: 4.0, 85 - 94: 4.5, 95 - 100: 5.0
//W ramach oceny w konsoli dla kazdej osoby powinien pojawić się komunikat:
//[Osoba] uzyskał/a [punkty] punktów, co daje ocenę: [ocena]

//Przykład:
//Joanna uzyskał/a 75 punktów, co daje ocenę: 4.0  

let oceny = [
    ['Joanna', 'Jakub', 'Mariusz', 'Marcin', 'Karol', 'Izabela', 'Weronika', 'Marta'],
    [75, 62, 38, 97, 90, 89, 59, 85]
];

// ZAD 1

function rate(points) {
    if (points >= 0 && points <= 59) {
        return '2.0';
    } else if (points >= 60 && points <= 64) {
        return '3.0';
    } else if (points >= 65 && points <= 74) {
        return '3.5';
    } else if (points >= 75 && points <= 84) {
        return '4.0';
    } else if (points >= 85 && points <= 94) {
        return '4.5';
    } else if (points >= 95 && points <= 100) {
        return '5.0';
    } else {
        return 'Niepoprawna ilość punktów';
    }
}

function pokaz(lista) {
    for (let i = 0; i < oceny[0].length; i++) {
        const person = oceny[0][i];
        const personPoints = oceny[1][i];
        const personGrade = rate(personPoints);

        console.log(`${person} uzyskał/a ${personPoints} punktów, co daje ocenę: ${personGrade}`);
    }
}

pokaz(oceny)

//Zadanie 2
//Przygotuj prostę grę w kółko i krzyzyk dla dwóch osób.
//Gra nie musi sprawdzać logiki gry oraz czy ktoś wygrał.
//Skupiamy się jedynie dodawaniu symboli i na wypisaniu aktualnego stanu rozgrywki.
//Gracz sam moze okreslic jaki symbol chce wstawic, nie musimy narzucac symbolu dla poszczegolnego gracza.
//Gracz umieszcza symbol okreslajac jaki symbol chce wstawic x/o oraz pozycje w kolumnie i wierszu 
//Numerowanie kolumn powinno być naturalne czyli od 1 do 3 (a nie tak jak indeksy od 0 do 2)
//Jezeli dane pole zostalo juz zajete gracz nie moze postawic tam symbolu.
//Jezeli gracz sprobuje dodac symbol poza obszarem gry, gra powinna wymusic ponowne postawienie symbolu.
//Jezeli wszystkie pola zostaną zapełnione gra powinna się zakończyć i pokazać finalny układ przestrzeni do gry.

//Przyklad:
//Prompt: Jaki symbol chcesz umieścić: x
//Prompt: W jakim wieszu chcesz ten symbol wstawić: 2
//Prompt: w jakiej kolumnie chcesz ten symbol wstawić: 2
//W konsoli pojawia się następująca sytuacja
/*
unidentified, unidentified, unidentified
unidentified, x, unidentified
unidentified, unidentified, unidentified
//Gra zadaje drugiemu graczowi pytanie:
//Prompt: Jaki symbol chcesz umieścić: 
//etc.
*/
//ZAD 2

// Inicjalizacja planszy
const board = [
    ['unidentified', 'unidentified', 'unidentified'],
    ['unidentified', 'unidentified', 'unidentified'],
    ['unidentified', 'unidentified', 'unidentified']
];

// Funkcja do wypisywania aktualnego stanu planszy
function printBoard() {
    for (let row = 0; row < 3; row++) {
        console.log(board[row].join(', '));
    }
}

// Funkcja do uruchamiania gry
function playGame() {
    let currentPlayer = 'x';

    while (true) {
        // Wypisanie aktualnego stanu planszy
        printBoard();

        // Gracz wprowadza symbol, wiersz i kolumnę
        const symbol = prompt(`Gracz ${currentPlayer}, jaki symbol chcesz umieścić (x/o):`);
        const row = parseInt(prompt('W jakim wierszu chcesz ten symbol wstawić (1-3):')) - 1;
        const column = parseInt(prompt('W jakiej kolumnie chcesz ten symbol wstawić (1-3):')) - 1;

        // Sprawdzenie czy podane wartości są poprawne
        if (row < 0 || row > 2 || column < 0 || column > 2 || board[row][column] !== 'unidentified') {
            console.log('Błędne dane, spróbuj ponownie.');
            continue;
        }

        // Umieszczenie symbolu na planszy
        board[row][column] = symbol;

        // Sprawdzenie czy plansza jest już zapełniona
        if (board.flat().every(cell => cell !== 'unidentified')) {
            console.log('Koniec gry! Plansza zapełniona.');
            printBoard();
            break;
        }

        // Zamiana gracza
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    }
}

// Rozpoczęcie gry
playGame();


//Zadanie 3
/*
Stwórz prostą grę opierającą się o zgadywanie.
Należy opracować następujące elementy:
- prompt: Podaj zakres zgadywania (gracz wpisuje liczbę całkowitą):
    - prompt ten zakłada maksymalny zakres losowanej liczby (jeżeli gracz wpiszę 10 to gra losuje losową liczbę od 1 do 10, jeżeli gracz wpiszę 100 to gra losuje losową liczbę od 1 do 100, etc.)
- walidacja czy podana wartość jest liczbą:
    - jeżeli nie, to system powinien do skutku wyrzucać prompt, który wymusza podanie wartości liczbowej. (zastosuj pętle);
- dla wylosowania liczby wykorzystaj wbudowaną metodą Math.floor(Mathf.random()):
    - Math.random() - pozwoli na wylosowanie liczby w przedziale od 0 do 1;
    - Math.floor() - zaokrągli uzyskany wynik w dół;
    - weź pod uwagę, że całościowo tak zastosowane metody zawsze zwrócą wartość 0, więc należy pomnożyć ją przez odpowiedni parametr.
- po podaniu zakresu gry, należy znowy wywołać prompt, który pozwala użytkownikowi podać liczbę, w celu odgadnięcia wylosowanej liczby.
- jeżeli wartość podana przez gracz będzie większa niż wylosowana liczba, system powinien zwrócić prompt z tekstem, że podana wartość jest za duża, spróbuj jeszcze raz.
- jeżeli wartość podana przez gracza będzie niższa niż wylosowana liczba, system powinien zwrócić prompt z tekstem, że podana wartość jest za mała, spróbuj jeszcze raz.
- jeżeli gracz odgadnie powinien pojawić się alert, że gracz prawidłowo odgadnął liczbę oraz powinna pojawić się liczba prób, zanim udało się uzyskać prawidłową wartość.

Przykład:
Gracz podaje, że losowana liczba powinna być w zakresie od 1 do 10 więc na pytanie Podaj zakres zgadywania wpisuje wartość 10;
System losuje liczbę z zakresu od 1 do 10 -> system wylosował 6;
Gracz podejmuje pierwszą próbę odgadnięcia wylosowanej liczby: 3;
System informuje go, że podana przez niego wartość jest za niska i powinien spróbować jeszcze raz;
Gracz podejmuje kolejną próbę odgadnięcia wylosowanej liczby: 7;
System informuje go, że podana przez niego wartość jest za wysoka i powinien spróbować jeszcze raz;
Gracz podejmuje kolejną próbę odgadnięcia wylosowanej liczby: 6;
System kończy działanie i wyrzuca alert z informacją, że gracz odgadł wylosowaną liczbę w 3 próbach oraz dla pewności jaka to była liczba;
*/

function guessNumberGame() {
    let maxRange = prompt("Podaj zakres zgadywania (liczba całkowita):");

    // Walidacja czy podana wartość jest liczbą
    while (isNaN(maxRange) || maxRange <= 0 || !Number.isInteger(Number(maxRange))) {
        maxRange = prompt("Podaj poprawny zakres zgadywania (liczba całkowita większa od 0):");
    }

    maxRange = parseInt(maxRange);
    const targetNumber = Math.floor(Math.random() * maxRange) + 1;

    let attempts = 0;

    while (true) {
        let userGuess = prompt("Podaj liczbę w celu odgadnięcia wylosowanej liczby:");

        // Walidacja czy podana wartość jest liczbą
        while (isNaN(userGuess) || userGuess <= 0 || !Number.isInteger(Number(userGuess))) {
            userGuess = prompt("Podaj poprawną liczbę:");
        }

        userGuess = parseInt(userGuess);
        attempts++;

        if (userGuess < targetNumber) {
            alert("Podana liczba jest za mała. Spróbuj jeszcze raz.");
        } else if (userGuess > targetNumber) {
            alert("Podana liczba jest za duża. Spróbuj jeszcze raz.");
        } else {
            alert(`Gratulacje! Prawidłowo odgadłeś liczbę ${targetNumber} w ${attempts} próbach.`);
            break;
        }
    }
}

guessNumberGame();