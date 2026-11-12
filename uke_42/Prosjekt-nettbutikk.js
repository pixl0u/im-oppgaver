const nav = document.getElementById('nav')
const knapp = document.getElementById('knapp')
const kurv = document.getElementById('kurv')
const prod = document.getElementById('prod')
const produkt_cont = document.getElementById('produkt_cont')

const produkter = [
{
    id: 1,
    navn:'mus',
    pris: 400,
    img: 'img/mus.jpg'
},

{
    id: 2,
    navn:'skjerm',
    pris: 1300,
    img: 'img/skjerm.jpg'
},
{
    id: 3,
    navn:'mikrofon',
    pris: 600,
    img: 'img/mic.jpg'
},
{
    id: 4,
    navn:'hodetelefoner',
    pris: 350,
    img: 'img/hode.jpg'
},
{
    id: 5,
    navn:'keyboard',
    pris: 750,
    img: 'img/keyboard.jpg'
},
{
    id: 6,
    navn:'musematte',
    pris: 100,
    img: 'img/musematte.jpg'
}
]
let totalsum =0
let ting = [];
let hand = [];
let ding = [];

for (let produkt of produkter) {
    ting[produkt.id] = 0;
}

function visProdukter(liste) {

    produkt_cont.innerHTML = "";
    
for (produkt of liste) {
    

    produkt_cont.insertAdjacentHTML('beforeend', `
            <div id="box${produkt.id}" class="box">
                <div class="produktkort">
                    <div class="ting">
                        <img src="${produkt.img}" alt="${produkt.navn}">
                        <h2>${produkt.navn}</h2>
                    </div>
                        
                    <div id="gjem${produkt.id}" class="gjem">
                        <p>${produkt.pris} kr</p>
                        <button onclick="ti(${produkt.id})">
                            legg til handlekurv
                        </button>
                    </div>
                </div>
            </div>
        `);

    const gjem = document.getElementById('gjem'+produkt.id)
    gjem.style.display = 'none';
    const goon = document.getElementById('box'+produkt.id)
        goon.addEventListener("click", function() {
        if (gjem.style.display == 'none'){gjem.style.display = "flex";}
    });

    goon.addEventListener("mouseleave", function() {
        gjem.style.display = "none";
        console.log(goon);
    
    });

}
}

function regnTotal() {

    let total = 0;

    for (let produkt of produkter) {

        total += produkt.pris * ting[produkt.id];

    }

    document.getElementById('totalpris').innerHTML =
        "Totalpris: " + total + " kr";
}



for (produkt of produkter){

    prod.insertAdjacentHTML('beforeend', `
    <label for="hand${produkt.id}" id="ding${produkt.id}">${produkt.navn}:</label>
    <input type="number" id="hand${produkt.id}" name="hand${produkt.id}" min="0">
    `);
    hand[produkt.id] = document.getElementById('hand'+produkt.id);
    ding[produkt.id] = document.getElementById('ding'+produkt.id);
    hand[produkt.id].style.display = 'none'
    ding[produkt.id].style.display = 'none'

    let nummers = produkt.id;
    hand[nummers].addEventListener('input', function() {
    ting[nummers] = Number(hand[nummers].value);
    console.log(ting[nummers]);
    regnTotal()
    });
}
let kurvApen = true;
function ti(nummer) {
    ting[nummer]++;

    hand[nummer].value = ting[nummer];

    console.log(hand[nummer].value);
    if (ting[nummer] > 0) {
            if (kurvApen == true){
            hand[nummer].style.display = 'none';
            ding[nummer].style.display = 'none';
            
            }
            else if (kurvApen == false){
                hand[nummer].style.display = 'block';
                ding[nummer].style.display = 'block';
            
            }
        }
    regnTotal()
}


visProdukter(produkter);

const sokefelt = document.getElementById("sokefelt");

sokefelt.addEventListener("input", () => {
let sok = sokefelt.value.toLowerCase();
console.log(sok);

        let resultat = produkter.filter(produkt =>

        produkt.navn.toLowerCase().includes(sok)
    
        );
        visProdukter(resultat);
        console.log(resultat);
});


const skrift = document.getElementById('skrift')

function handle() {
    kurvApen = !kurvApen;

    for (let i = 1; i < ting.length; i++) {
        if (kurvApen == true){
            skrift.style.display ='none';
            totalpris.style.display ='none';
        }
        else if (kurvApen == false){
            skrift.style.display ='block';
            totalpris.style.display ='block';
        }
        if (ting[i] > 0) {
            if (kurvApen == true){
            hand[i].style.display = 'none';
            ding[i].style.display = 'none';
            
            }
            else if (kurvApen == false){
                hand[i].style.display = 'block';
                ding[i].style.display = 'block';
            
            }
        }
    }
}














