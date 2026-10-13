
varer = [
    {navn:'mus',pris: 299},
    {navn:'tastatur',pris: 287},
    {navn:'skjerm',pris: 29},
    {navn:'pc',pris: 2999}
]
fant=false
antall =0

function sok() {
    for (let varr of varer){
        if (varr.navn == 'skjerm'){
            fant = true
            antall += 1
            pris=varr.pris
            break
        }
    }
    if (fant == true){
            console.log('det var',antall,'skjerm i listen den koster',pris,'kr');
        }
        else{
            console.log('det var ingen skjerm i listen');
        }
}

sok()
