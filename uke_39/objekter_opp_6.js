let elever = [
{ navn: 'Ali', poeng: 67 },
{ navn: 'Nora', poeng: 89 },
{ navn: 'Sofie', poeng: 42 },
{ navn: 'gunnar', poeng: 1 },
{ navn: 'per', poeng: 300 }
];

let sum = 0;
let bestatt = 0;
let besteElev = elever[0];
let versteElev = elever[0];

for (let elev of elever) {
if (elev.poeng>=60){
    bestatt+=1
}
sum += elev.poeng
if (elev.poeng>besteElev.poeng){
    besteElev=elev
}
if (elev.poeng<versteElev.poeng){
    versteElev=elev
}

}
gjen = sum / 5

console.log(bestatt,'personer har bestått');
console.log('gjennomsnitt poengene er', gjen);
console.log('den høyeste poengsummen var',besteElev.poeng);
console.log(besteElev.navn,'hadde høyest poeng');
console.log(versteElev.navn,'hadde lavest poeng');

