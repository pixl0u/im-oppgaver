
//oppgave 3

let produkt = {
navn: 'mus',
pris: 100,
antall: 20
};

function visProdukt(produkt) {

    console.log(produkt.navn,'-',produkt.pris,'kr');

// utfrodring
if (produkt.antall > 0) {
console.log('vi har',produkt.antall,'på lager');
} else {
console.log('Utsolgt');
}
}

visProdukt(produkt)