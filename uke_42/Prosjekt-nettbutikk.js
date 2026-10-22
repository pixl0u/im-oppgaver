const ting = document.getElementById('ting')
const gjem = document.getElementById('gjem')
const knapp = document.getElementById('knapp')
const kurv = document.getElementById('kurv')
const hand = document.getElementById('hand')
var ting1=0

ting.addEventListener("click", function() {
    gjem.style.display = "flex";
});

ting.addEventListener("mouseleave", function() {
    gjem.style.display = "none";
});

function ti() {
    ting1 += 1;
    console.log(ting1);
    hand.value = ting1
}

function handle(){
    if (hand.style.display == 'block') {
        hand.style.display = 'none'
    }
    else if(ting1>0){hand.style.display = 'block'

    }
}