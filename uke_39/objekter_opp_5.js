let elever = [
{ navn: 'Ali', poeng: 67 },
{ navn: 'Nora', poeng: 89 },
{ navn: 'Sofie', poeng: 42 },
{ navn: 'gunnar', poeng: 1 },
{ navn: 'per', poeng: 300 }
];

for (let elev of elever) {
if (elev.poeng>=60){
    console.log(elev.navn,'fikk',elev.poeng,'poeng - bestått');
}
else{
    console.log(elev.navn,'fikk',elev.poeng,'poeng - ikke bestått');
}
}
