//oppgave 4

let spill = {
navn: 'rayman',
pris: 349,
antall: 0,
rating: 95,
agrense: 'alle',
restock: 2
};

function visSpill(spill) {

    console.log(spill.navn,'-',spill.pris,'kr');

// utfrodring
if (spill.antall > 0) {
console.log('vi har',spill.antall,'på lager');
} else {
console.log('vi er utsolgt');
}

console.log('rating',spill.rating,'/100');

console.log('aldersgrensen er',spill.agrense,'år');

if (spill.restcok > 1){
    console.log('vi får flere av dette spillet om', spill.restock,'dager');
}
else if(spill.restcok == 1) {
    console.log('vi får mere av dette spillet i morgen');
}
else{
    console.log('vi fikk mere av dette spillet i dag, vi får mere neste uke');
}

}

visSpill(spill)