//https://www.youtube.com/watch?v=UdfpnS6eyDQ&list=PL_CImUqaeU3-2JHKoeosP0ASl6rFnb3Pf&index=2

//prvo smo napravili tml kod
 //onda se koristimo sa inspekt elementom da vidimo koje podatke treba da povucemo iz html-a
 // div pod klasom kartica prvo smo njega inspektovli
 //onda smo videli da treba da povucemo naslov i cenu
 let sveUkupno = 0; // ovo je za ukupnu cenu svih filmova u korpi
 function dodajFilm(element){ // ovo je funkcija za dodavanje filma u korpu koja se zove dodajFilm i ima argument element taj element je vezan za dugme koje se klikne u ovom slucaju je to dugme dodaj
    
    let mainEl = element.closest(".kartica");// ovde uzimamo div kartica i iz njega povlacimo podatke naslov i cenu
   
    //sada izvlacimo cenu
    let cena = mainEl.querySelector(".cena").innerText; //.cena je klasa u html-u gde se nalazi cena
    //sada izvlacimo naslov
    let naslov = mainEl.querySelector("h2").innerText;//h2 je tag u html-u gde se nalazi naslov. querySelector je za selektovanje taga, a mainEl je div kartica u kojoj se nalazi naslov i selektujemo h2 tag pomocu querySelector
    let korpicaFilmovi = document.querySelector("#korpaFilmovi");//ovde selektujemo div u kome ce se prikazivati filmovi u korpi a #korpaFilmovi je id diva i pise # jer je id
    
    cena = cena.substring(5);
    cena = parseInt(cena);
    let ukupnaCena = cena

    sveUkupno += ukupnaCena; // ovo je za racunanje ukupne cene svih filmova u korpi

    korpicaFilmovi.innerHTML += `<div class="film"><h3>${naslov}</h3> Dinara:<span>${ukupnaCena}</span> <button onclick="izbaciIzKorpe(this)" class="ukloniFilm">Ukloni</button></div>`; //ovde dodajemo u div film naslov i cenu filma a koristimo innerHTML da bi dodali html kod u div film a += da bi dodali vise filmova u div film a ako bi bilo samo = onda bi se prebrisao prethodni film takodje smo dodali dugme ukloni 

    document.querySelector("#ukupnaCena").innerText = `${sveUkupno}`; //ovde dodajemo ukupnu cenu filma u korpi
    //sada dodajemo opciju da kada je jedan film dodat da se dugme promeni u dodato i da se onemoguci
    element.innerText = "Dodato";//ovde menjamo tekst dugmeta a element je dugme koje se klikne i zove se element zato sto je to argument funkcije dodajFilm
    element.setAttribute("disabled", "true");//ovde onemogucujemo dugme

}

function izbaciIzKorpe(element){
    let mainEl = element.closest(".film");//ovde selektujemo div film koji je div u kome se prikazuju filmovi u korpi
    let cena = mainEl.querySelector("span").innerText;//ovde selektujemo span tag unutar diva film
    let ime = mainEl.querySelector("h3").innerText;//ovde selektujemo h3 tag unutar diva film
    let filmovi = document.querySelectorAll(".kartica");//ovde selektujemo sve filmove
    cena = parseInt(cena);//ovde pretvaramo cenu u broj
    sveUkupno -= cena;//ovde oduzimamo cenu filma koji se uklanja iz korpe od ukupne cene svih filmova u korpi
    document.querySelector("#ukupnaCena").innerText = `${sveUkupno}`;//ovde dodajemo ukupnu cenu filma u korpi
    mainEl.remove();//ovde uklanjamo film iz korpe

    filmovi.forEach(function(film){//ovde koristimo forEach petlju da bi prosla kroz sve filmove
        let imeFilma = film.querySelector("h2").innerText;//ovde selektujemo h2 tag unutar diva kartica
        if(imeFilma === ime){//ovde proveravamo da li je ime filma u korpi isto kao ime filma koji se uklanja iz korpe
            film.querySelector("button.gledaj").removeAttribute("disabled");//ovde uklanjamo atribut disabled sa dugmeta
            film.querySelector("button.gledaj").innerText = "Gledaj film";//ovde menjamo tekst dugmeta
        }
    });

}