# warsawjs-workshop-1-gallery

Testowa aplikacja stworzona na potrzeby WarsawJS Workshop #1

![](images/logo-warsawjs-transparent-240x240.png)

## Założenia projektu

* obrazki tego samego rozmiaru
* liczba zdjęć jest nieograniczona
* prezentacja list miniaturek oraz 1 zdjęcia powiększonego

## Etapy

### Etap 1: Scaffold :file_folder:

* Stworzenie katalogu na projekt np. `test-project-1`
* Stworzenie w katalogu stworzonym w poprzednim punkcie plików:
    - `index.html` - struktura dokumentu w formacie HTML
        * określenie typu pliku
        * zbudowanie podstawowej struktury (`<html>, <head>, <body>`)
        * określenie kodowania dokumentu (`<html>` -> `<head>` -> `<meta>`)
        * wpisanie tytułu strony (`<html>` -> `<head>` -> `<title>`)
        * wpisanie w pliku kilku słów (`<html>` -> `<body>` -> `<p>`)
        * reset domyślnego marginesu w `body`
    - `styles/main.css` - definicja wyglądu strony w formacie CSS 
        * pokolorowanie tła i tekstu
    - `scripts/main.js` - definicja działania aplikacji w JavaScript
        * wyświetlenie dowolnego tekstu w narzędziach developerskich
* Dołączenie plików CSS i JavaScript do pliku HTML.
* Załączenie customowego fontu korzystając z http://fonts.google.com/
* Dodanie nagłówka i stopki
    - tworząc nowe kontenery (`header` & `footer`)
    - posiłkując się dowolną paletą kolorystyczną
    - oddzielając w pliku CSS komentarze 3 sekcje: `header, main, footer`
* Wyświetlenie pionowej listy miniaturek
    - wykorzystując dowolny place holder
    - likwidując domyślny styl listy pionowej
* Zmiana trybu wyświetlania listy z pionowej na poziomą

### Etap 2: Display singe zoom photo &#x1F3C3;

* Stworzenie linków do zdjęć w rozdzielczości ok. 600x400
* Stworzenie kontenera gdzie będzie wyświetlane zdjęcie w powiększeniu
* Nasłuchiwanie na kliknięcie w zdjęcie
* Zablokowanie domyślną akcję kliknięcia w link
* Wyświetlenie większego zdjęcia pod listą poprzez stworzenie obiekt zdjęcia
i dodać je do strony, pamiętając o wyrzuceniu wszystkiego co było wcześniej.

### Etap 3: Magnifier :mag:

* Zmiana kontenera wyświetlania na overlay
* Dodanie wsparcia skrótów klawiaturowych (LEFT, RIGHT, ESCAPE)
* Zapętlenie przewijania listy zdjęć

### Etap 4: GitHub :octocat: 

* Założenie projektu na GitHubie
* Stworzenie repozytorium w projekcie za pomocą GitHub Desktop
* Wrzucenie projektu na serwer za pomocą GitHub Desktop
* Dodanie GitHub Ribbons

## Zadania dodatkowe?

* Wsparcie różnych rozmiarów obrazków
* Skalowanie zdjęcia przy zmniejszaniu okna przeglądarki
* Responsywność (mobile)

## Czego nauczą się uczestnicy podczas realizacji tego zadania?

### HTML

* dlaczego nazwa pliku `index.html` jest taka specjalna
* definicji dokumentu HTML
* jak załączyć plik CSS oraz JavaScript
* jak zmienić tytuł strony
* jak wprowadzić podział w strukturze projektu na 3 warstwy
* znaczenia znaczników: `html, head, body, title, meta, link, script, div, header, h1, ul, li, a, img, main, footer, p`
* jak ustawić kodowanie dokumentu
* jak ustawić typ pliku
* jak dodać link do dokumentu HTML
* korzystania z serwisów zewnętrznych do pobierania obrazków
* jak dołączyć ładny font ze strony http://fonts.google.com
* definiowania atrybutów
* dodawania GitHub Ribbon: https://github.com/blog/273-github-ribbons
* kolejności w definiowaniu elementów ma znaczenie
* jak zdefiniować alternatywny tekst, gdy obrazek nie załaduje się
* jak dodaje się komentarze w HTMLu

### CSS

* resetowanie domyślnych styli przeglądarek (`body margin`)
* jak wybrać kolor z listy predefiniowanych w CSS
* jak się definiuje kolory w składni RGB oraz RGBA
* selektorów razem z specificity
* funkcji `calc()`
* co to jest pseudo-klasa `:hover`
* pozycjonowanie
* określanie marginesów i paddingów
* typografia - zabawa z fontem
* tworzenie listy horyzontalnej
* określanie wymiarów kontenera
* obcinanie elementów wystających za kontener (`overflow`)
* dodawania obramowania do kontenerów
* centrowanie kontenerów i tekstu
* jak zmienić domyślny kursor myszy
* jak dodaje się komentarze w CSS

### JavaScript

* definiowanie zmiennych, funkcji, klas, stałych
* czym jest konstruktor
* stworzenie obiektu za pomocą operatora `new`
* co to jest DOM
* jak tworzy się metody
* dowiesz się co to jest API
* jak poczekać na załadowanie DOMa
* co to są parametry vs. argumenty
* jak nasłuchiwać na zdarzenia UI
* jak wspierać skróty klawiszowe
* jak dowiedzieć się w co user kliknął
* wzorzec: dependency injection
* jak zarządzać klasami CSS elementów DOMa
* metody prywatne
* instrukcje `if` oraz `switch`
* jak dodaje się komentarze w JavaScript

### Google Chrome Developer Tools

* czym są oraz w czym pomagają
* jak "zbadać" element
* debugowanie za pomocą metody `console.log` oraz wyrażenia `debugger`

## Znaki specjalne

<http://character-code.com/arrows-html-codes.php>

Opcje które wchodzą w grę jako strzałki (ikonki):

* w lewo: &#x276c; &#x276e; &#x2770;
* w prawo: &#x276d; &#x276f; &#x2771;
* zamknięcie: &#xD7;
