# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.
Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

<!--> 

  WEEK 1 

    1.1 LES/OEFENING
    Mijn HTML & CSS code voor Oefening 1
    Link: "https://codepen.io/jvb_hva/pen/abePEdz?editors=1100"
    
    1.1.1 GELEERD
    
    Het onderdeel “var(.........)”
    Staat voor de waarde van een custom property, dat wist ik nog niet. 
    Nu weet ik hoe ik moet refereren aan een custom property.
    
    Het onderdeel “hsl(.........)”
    Staat voor hue, saturation en lightness, dat wist ik niet. 
    Nu weet ik hoe ik moet refereren naar een van deze CSS functies.
    
    Het onderdeel ‘--’ ook wel een property
    Als je een custom property maakt, moeten er altijd twee (‘--’) streepjes vooral de naam van jouw property staan.
    
    Het onderdeel ‘skewy’ 
    Ik kende dit nog niet. Ik weet nu hoe ik een font/element kan transformeren in CSS.

    1.2 LES/OEFENING
    - Checklist gemaakt voor Icon Amsterdam (website die ik na ga maken)

    1.3 LES/OEFENING
    Oefening: https://cssgridgarden.com/#nl 
    Oefening 1,2,3 & 4: https://codepen.io/shooft/pen/RwzxdJq
    Geleerd om gebruik te maken met een grid.

  Week 2

    2.0 Hoorcollege: 
    Oefening: 
    
    2.1  LES/OEFENING
    Oefening 1: https://codepen.io/shooft/pen/bGPvJgb
    Oefening 2: https://codepen.io/shooft/pen/GRbxLrz?editors=1100
    Oefening 3: https://flukeout.github.io/ tot level 32

    2.2 LES/OEFENING
    Oefeningen: https://codepen.io/shooft/pen/JjQLVaB?editors=0110

    Aantekeningen hamburger menu: 
    Javascript:
      const menuButton = document.querySelector("header > button");
      const deNav = document.querySelector("nav");

      menuButton.onclick = toggleMenu;

      function toggleMenu(){
      deNav.classList.add("toonMenu") 
      }

      // sluiten van het hamburger menu
      const sluitButton = document.querySelector("nav button");
      sluitButton.onclick = sluitMenu;

      function sluitMenu(){
      deNav.classList.remove("toonMenu")

    CSS:
      nav.toonMenu {
      translate: 0;
      } 

      nav {
      position:fixed;
      inset: 0 0 0 0;
      translate:100%;
      transition:0.5s;
      }
    
      header > button {
      order:-1;
      }

      header {
      display:flex;
      justify-content:space-between;
      align-items:center;
      }


<-->

## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Jerry van Bussel

  #### Je startniveau:
  Blauw/Rood

  #### Je focus:
  Surface
 
</details>





## Je website

<details open>
  <summary>Ik ga een paar onderdelen van de website van Icon Amsterdam namaken.</summary>

  ### Je opdracht:
  Pagina 1: https://icon-amsterdam.com/nl/
  Pagina 2: Een detail pagina van een product van Icon Amsterdam

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="images/home_icon_amsterdam" width="375px" alt="Homepagina, Icon Amsterdam">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="images/" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Code schrijven gaat goed, alleen moeilijk om dezelfde iconen te krijgen als de website die ik namaak. Dat is een moeilijk puntje en om deze waarschijnlijk straks goed op een rijtje te krijgen wordt ook een priegel werkje.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
