const nav = document.getElementById('nav')
const knapp = document.getElementById('knapp')
const kurv = document.getElementById('kurv')
const prod = document.getElementById('prod')


const produkter = [
{
    navn:'mus',
    pris: 400,
    img: 'img/mus.jpg'
},

{
    navn:'skjerm',
    pris: 1300,
    img: 'img/skjerm.jpg'
},
{
    navn:'mikrofon',
    pris: 600,
    img: 'img/mic.jpg'
},
{
    navn:'hodetelefoner',
    pris: 350,
    img: 'img/hode.jpg'
},
{
    navn:'keyboard',
    pris: 750,
    img: 'img/keyboard.jpg'
},
{
    navn:'musematte',
    pris: 100,
    img: 'img/musematte.jpg'
}
]
let a=1
let ting = [];
let hand = [];
let ding = [];


for (produkt of produkter) {
    ting[a]=0

    prod.insertAdjacentHTML('beforeend', `
    <label for="hand${a}" id="ding${a}">${produkt.navn}:</label>
    <input type="number" id="hand${a}" name="hand${a}" min="0">
    `);



    hand[a] = document.getElementById('hand'+a);
    ding[a] = document.getElementById('ding'+a);
    hand[a].style.display = 'none'
    ding[a].style.display = 'none'
    
    

    const goon = document.getElementById('box' + a);
    goon.innerHTML += ` <div class="produktkort"> 
        <div class="ting">

        <img src="${produkt.img}" alt="${produkt.navn}"> 

        <h2>${produkt.navn}</h2> 
        </div>
        <div id="gjem${a}" class='gjem'>
        <p>${produkt.pris} kr</p> 
        <button id="handlekurv${a}" onclick="ti(${a})">legg til handlekurv</button>
        </div>
        `;
    const gjem = document.getElementById('gjem'+a)
    gjem.style.display = 'none';
        goon.addEventListener("click", function() {
        if (gjem.style.display == 'none'){gjem.style.display = "flex";}
    });

    goon.addEventListener("mouseleave", function() {
        gjem.style.display = "none";
        console.log(goon);
    
    });

    function visProdukter(liste) {

        container.innerHTML = "";

    }
    
    let nummers = a;
    hand[nummers].addEventListener('input', function() {
    ting[nummers] = Number(hand[nummers].value);
    console.log(ting[nummers]);
    });

    a++;


}

// prod.insertAdjacentHTML('beforeend',`<button>send</button>`)





let kurvApen = false;
function handle() {
    kurvApen = !kurvApen;

    for (let i = 1; i < ting.length; i++) {
        if (ting[i] > 0) {
            hand[i].style.display = kurvApen ? 'block' : 'none';
            ding[i].style.display = kurvApen ? 'block' : 'none';
        }
    }
}


function ti(nummer) {
    ting[nummer]++;

    hand[nummer].value = ting[nummer];

    console.log(hand[nummer].value);
}

// nav.innerHTML+=('beforeend', `
// <button id="kurv" onclick="handle(${nummers})"><img src="img/shopping-cart.png" alt="cart"></button>`);










