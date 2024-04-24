function validacija(){
    let input = document.querySelector('#email')
    let value = input.value
    
    //Provera da li value (string) sadrzi @ i .
    if(value.includes('@') && value.includes('.')){

        let pozicijaAt = value.indexOf('@'); //uzimamo poziciju @
        let pozicijaTacka = value.indexOf('.'); //uzimamo poziciju .

        //uzima vrednost izmedju pozocija
        let izmedjuAtTacka = value.substring(pozicijaAt+1,pozicijaTacka)

        //da li izmedju tacke i @ imamo vise od 0 karaktera
        if(izmedjuAtTacka.length>0){
          let preAt=value.substring(0,pozicijaAt)
            
          //da li pre @ imamo vise od 2 karaktera
          if(preAt.length>2){
            
            let posleTacke = value.substring(pozicijaTacka+1,value.length)

            //da li posle tacke imamo vise od 2 karaktera
            if(posleTacke.length>1){
                console.log('Email je validan');
            }else{
                console.log('Mail nije validan');
            }
            
          }else{
            console.log('mail nije validan');
          }

        }else{
            console.log('nije dobro');
        }
        

    }
    else{
        console.log('Mail nije validan');
    }
  
}