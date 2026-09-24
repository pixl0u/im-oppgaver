let produkter = [
{
navn: "Tastatur",
pris: 599,
antall: 4
},
{
navn: "Mus",
pris: 299,
antall: 8
},
{
navn: "Skjerm",
pris: 2499,
antall: 2
},
{
navn: "pc",
pris: 5000,
antall: 0
}
];

let sum = 0;
let utsol = 0;
let besteprod = produkter[0];
let versteprod = produkter[0];
let antall =0


function print() {
    console.log(utsol,'ting som er utsolgt');
console.log('total summen til lageret er',sum);
console.log(besteprod.navn,'hadde har høygest pris');
console.log(versteprod.navn,'har lavest pris');
console.log('vi har',antall,'varer på lager');
}

function vis_produkt(produkt) {
        console.log(produkt.navn,'-',produkt.pris,'kr');
    if (produkt.antall > 0) {
console.log('vi har',produkt.antall,'på lager');
} else {
console.log('vi er utsolgt');
utsol+=1
}
}


for (let produkt of produkter){
vis_produkt(produkt)


sum += produkt.pris * produkt.antall
antall += produkt.antall

if (produkt.pris>besteprod.pris){
    besteprod=produkt
}
if (produkt.pris<versteprod.pris){
    versteprod=produkt
}

}


print()
