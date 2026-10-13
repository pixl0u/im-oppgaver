
tall = [10,3,57,19,2,3]
fant=false
antall =0

function sok() {
    for (let tal of tall){
        if (tal == 19){
            fant = true
            antall += 1
            
        }
    }
    if (fant == true){
            console.log('det var',antall,'19 i listen');
        }
        else{
            console.log('det var ingen 19 i listen');
        }
}

sok()


