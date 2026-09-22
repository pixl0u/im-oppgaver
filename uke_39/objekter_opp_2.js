//oppgave 2

let produkt = {
navn: 'Tastatur',
pris: 599,
antall: 3,
rabatt: 0.75
};

console.log(produkt.navn,'koster',produkt.pris);

let lagerverdi = produkt.pris * produkt.antall;
console.log('total lagerverdi',lagerverdi,'kr');

if (produkt.antall > 0) {
console.log('vi har',produkt.antall,'på lager');
} else {
console.log('Utsolgt');
}
console.log('vi har',100-produkt.rabatt*100,'%');

// //utfordring

let sum = produkt.pris * produkt.rabatt

console.log('sluttprisen blir',Math.floor(sum));
