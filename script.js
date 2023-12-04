/* 
Consegna:
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
*/

//Il mio array di oggetti
const images = [
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' },

    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.' },

    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos." },

    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city' },

    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.' }
];

// MILESTONE 1
let contenitoreCarousel = document.querySelector(".items-container");
images.forEach((element, index) => {

    let cardClass = (index === 0) ? "item active" : "item"

    contenitoreCarousel.innerHTML += `
    <div class="${cardClass}">
    <img class="fix_img" src=${element.image} alt="">
    <h2 id="carousel-title">${element.title}</h2>
    <p id="carousel-text">${element.text}</p>
    </div>
    `

    //UTILIZZO  (ternary) operator
    // <condizione> ? <istruzione1> : <istruzione2></istruzione2>
    // (index === 0) ? (cardClass = "item active") : ("");


    // if (index === 0) {
    //     cardClass = "item active";
    // }

});


const items = document.getElementsByClassName("item");
console.log(items);

let activeItem = 0;

//navigazione in su
const downBtn = document.getElementById("angle_down");

//aggiungo l'azione di scroll sopra al mio bottone
downBtn.addEventListener("click", function () {

    if (activeItem < items.length - 1) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //incremento l'indice dell'elemento da visualizzare
        activeItem++;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // if (activeItem === items.length - 1) {
        //     //siamo arrivati all'ultimo elemento (sparisce la freccia (btn))
        //     downBtn.classList.add('hidden');
        // }

    }
}
)


//navigazione in su
const upBtn = document.getElementById("angle_up");

//aggiungo l'azione di scroll sopra al mio bottone
upBtn.addEventListener("click", function () {

    if (activeItem > 0) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //decremento l'indice dell'elemento da visualizzare
        activeItem--;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // if (activeItem === 0) {
        //     //siamo arrivati al primo elemento (sparisce la freccia (btn))
        //     upBtn.classList.add('hidden');
        // }

    }
}
)