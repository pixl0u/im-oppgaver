const ting = document.getElementById('ting')
const gjem = document.getElementById('gjem')
const knapp = document.getElementById('knapp')
const kurv = document.getElementById('kurv')
const hand = document.getElementById('hand')
const ding = document.getElementById('ding')

var ting1=0

const produkter = [
{
    navn:'ting',
    pris: 150,
    img: 'img/george-droyd.png'
},

{
    navn:'ting1',
    pris: 151,
    img: 'img/george-droyd.png'
},
{
    navn:'ting2',
    pris: 151,
    img: 'img/george-droyd.png'
},
{
    navn:'ting3',
    pris: 151,
    img: 'img/george-droyd.png'
},
{
    navn:'ting4',
    pris: 151,
    img: 'img/george-droyd.png'
},
{
    navn:'ting5',
    pris: 151,
    img: 'img/george-droyd.png'
},
]
a=1

for (produkt of produkter) {
    const goon = document.getElementById('box' + a);
    goon.innerHTML += ` <div class="produktkort"> 

        <img src="${produkt.img}" alt="${produkt.navn}"> 

        <h2>${produkt.navn}</h2> 
        
        <p>${produkt.pris} kr</p> 
        <button id="handlekurv" onclick="ti()">legg til handlekurv</button>
        `;
    a+=1;
}

// goon.addEventListener("click", function() {
//     if (gjem.style.display == 'flex'){gjem.style.display = "none";}
//     else {gjem.style.display = "flex";}
// });

// goon.addEventListener("mouseleave", function() {
//     gjem.style.display = "none";
//     console.log(goon);
    
// });

hand.addEventListener('input', function() {
    ting1 = Number(hand.value);
    console.log(ting1);
});

function ti() {
    ting1 += 1;
    console.log(ting1);
    hand.value = ting1
}



function handle(){
    if (hand.style.display == 'block') {
        hand.style.display = 'none'
        ding.style.display = 'none'
    }
    else if(ting1>0){hand.style.display = 'block'
        ding.style.display = 'block'
    }
}






