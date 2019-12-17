# warsawjs-workshop-1-gallery

Testowa aplikacja stworzona na potrzeby `WarsawJS Workshop #1`

<img
    src="https://warsawjs.com/static/images/logos/logo-warsawjs.svg"
    width="400"
    alt="WarsawJS"
/>

## Założenia projektu

* Obrazki tego samego rozmiaru
* Liczba zdjęć jest nieograniczona
* Prezentacja list miniaturek oraz 1 zdjęcia powiększonego

## Features (v1)

* Prezentacja listy zdjęć
* Powiększenie zdjęcia po wybraniu miniaturki
* Możliwość przełączania powiększonych zdjęć za pomocą klawiatury

## Features (v3)

* Korzystamy z namespace-ów, klas, bibliotek
    + `super-event-emitter` @ <https://unpkg.com/>
    + `eslint` @ <https://npmjs.com>
    + `webpack` @ <https://npmjs.com>
* Moduły w JavaScript: ESM, CommonJS
* Promise + async/await
* Fetch API
* Debugger Statement
* (Opcjonalnie) JSON Schema + Faker + Chance.js

## Krok po kroku 👣

### Etap 1 — Scaffold :file_folder:

* Stworzenie katalogu na projekt np. `warsawjs-workshop-1-gallery`
* Stworzenie w katalogu stworzonym w poprzednim punkcie plików:
    + `index.html` - struktura dokumentu w formacie HTML
        - HTML: Określić typu dokumentu
        - HTML: Zbudować podstawową strukturą `!<TAB>`
        - HTML: Określić kodowanie dokumentu `<meta charset="utf-8>`
        - HTML: Ustawić tytuł strony `<title>...</title>`
        - HTML: Wpisać dowolne słowa w `<body>` (wykorzystać `<p>`)
    + `styles/main.css` - definicja wyglądu strony w formacie CSS
        - pokolorowanie tła i tekstu
        - CSS: Zresetować domyślny margines w `body`
    + `scripts/main.js` - definicja działania aplikacji w JavaScript
        - wyświetlenie dowolnego tekstu w narzędziach developerskich
        - JS: Stworzyć funkcję `main` i uruchomić ją po załadowaniu DOMa
* HTML: Dołączyć pliki `main.css` oraz `main.js`
* Dodać customowy font
    + Wykorzystać <http://fonts.google.com/>
    + CSS: Ustawić `font-family` dla elementu `body`
* Dodać nagłówek i stopkę `<header>` oraz `<footer>`
    + CSS: Ustawić dowolne kolory tła i fontu
* Wyświetlenie pionowej listy miniaturek
    + Wykorzystać <https://picsum.photos>
    + CSS: likwidując domyślny styl listy pionowej
    + CSS: Zmiana trybu wyświetlania listy z pionowej na poziomą

### Etap 2 — Display list of photos &#x1F3C3;

* JS: Stworzenie kolekcji linków
    + do zdjęć w rozdzielczości ok. 200x150
    + do zdjęć w rozdzielczości ok. 600x400
* JS: Renderowanie listy po załadowaniu DOMa

### Etap 3 — Magnifier :mag:

* HTML: Stworzenie kontenera gdzie będzie wyświetlane zdjęcie w powiększeniu
* JS: Nasłuchiwanie na kliknięcie w zdjęcie
* JS: Zablokowanie domyślną akcję kliknięcia w link
* JS: Wyświetlenie większego zdjęcia pod listą
    + Usunąć wszystko co było wcześniej
    + Stworzyć obiekt dużego zdjęcia

### Etap 4 — Keyboard :keyboard:

* JS: Dodać wsparcie skrótów klawiaturowych (LEFT, RIGHT, ESCAPE)
* JS: Zapętlenie przewijania listy zdjęć
* (Opcjonalne) CSS: Zmiana kontenera wyświetlania na overlay

### Etap 5 — GitHub :octocat:

* Założenie projektu na GitHubie
* Stworzenie repozytorium
    + za pomocą terminala
    + za pomocą GitHub Desktop
* (Opcjonalne) Wrzucenie projektu na serwer za pomocą GitHub Desktop
* Dodać przekierowania do repozytorium
    + GitHub Ribbons — <https://github.com/blog/273-github-ribbons>
    + GitHub Corner — <http://tholman.com/github-corners/>

## Bonus

* JS: Wsparcie różnych rozmiarów obrazków
* CSS: Skalowanie zdjęcia przy zmniejszaniu okna przeglądarki
* CSS: Responsywność (Media Queries)

## Czego nauczą się uczestnicy podczas realizacji tego zadania?

<details><summary>HTML</summary>

* Dlaczego nazwa pliku `index.html` jest taka specjalna
* Definicji dokumentu HTML
* Jak załączyć plik CSS oraz JavaScript
* Jak zmienić tytuł strony
* Jak wprowadzić podział w strukturze projektu na 3 warstwy
* Znaczenia znaczników

    ```text
    html, head, body, title, meta, link, script, div, header,
    h1, ul, li, a, img, main, footer, p
    ```

* Jak ustawić kodowanie dokumentu
* Jak ustawić typ pliku
* Jak dodać link do dokumentu HTML
* Korzystania z serwisów zewnętrznych do pobierania obrazków
* Jak dołączyć ładny font ze strony http://fonts.google.com
* Definiowania atrybutów
* Dodawania GitHub Ribbon: https://github.com/blog/273-github-ribbons
* Kolejności w definiowaniu elementów ma znaczenie
* Jak zdefiniować alternatywny tekst, gdy obrazek nie załaduje się
* Jak dodaje się komentarze w HTMLu

</details>

<details><summary>CSS</summary>

* Resetowanie domyślnych styli przeglądarek (`body margin`)
* Jak wybrać kolor z listy predefiniowanych w CSS
* Jak się definiuje kolory w składni RGB oraz RGBA
* Selektorów razem z specificity
* Funkcji `calc()`
* Co to jest pseudo-klasa `:hover`
* Pozycjonowanie
* Określanie marginesów i paddingów
* Typografia - zabawa z fontem
* Tworzenie listy horyzontalnej
* Określanie wymiarów kontenera
* Obcinanie elementów wystających za kontener (`overflow`)
* Dodawania obramowania do kontenerów
* Centrowanie kontenerów i tekstu
* Jak zmienić domyślny kursor myszy
* Jak dodaje się komentarze w CSS

</details>

<details><summary>JavaScript</summary>

* Definiowanie zmiennych, funkcji, klas, stałych
* Czym jest konstruktor
* Stworzenie obiektu za pomocą operatora `new`
* Co to jest DOM
* Jak tworzy się metody
* Dowiesz się co to jest API
* Jak poczekać na załadowanie DOMa
* Co to są parametry vs. argumenty
* Jak nasłuchiwać na zdarzenia UI
* Jak wspierać skróty klawiszowe
* Jak dowiedzieć się w co user kliknął
* Wzorzec: dependency injection
* Jak zarządzać klasami CSS elementów DOMa
* Metody prywatne
* instrukcje `if` oraz `switch`
* Jak dodaje się komentarze w JavaScript

</details>

<details><summary>Google Chrome Developer Tools</summary>

* Czym są oraz w czym pomagają
* Jak "zbadać" element
* Debugowanie za pomocą metody `console.log` oraz wyrażenia `debugger`

</details>

## Znaki specjalne

<http://character-code.com/arrows-html-codes.php>

Opcje które wchodzą w grę jako strzałki (ikonki):

* W lewo: &#x276c; &#x276e; &#x2770;
* W prawo: &#x276d; &#x276f; &#x2771;
* Zamknięcie: &#xD7;
