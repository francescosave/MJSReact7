// cosa sono gli oggetti

// sono l'unico tipo di dato non primitivo

// I primitivi sono numeri,stringhe,boolean,null,undefined e Nan
// le funzioni sono oggetti
// la rappresentazione delle funzioni in quanto funzioni avviene accedendo con le tonde ()
// la rappresentazione delle funzioni in quanto oggetti avviene accedendo con il punto .

// se il parte di destra ai due punti è un valore viene chiamata propieta
// se il parte di destra ai due punti è una funzione viene chiamato metodo
let car = {
    "pippo" : 25,
    "azione" : function(){
        return 23;
    }
}

console.log('sto leggendo una propieta in quanto oggetto',car.pippo);
console.log('sto richiamando un metodo in quanto oggetto',car.azione());



function pippo(){
    return 'spesso';
}

console.log('richiama la funzione pippo in quanto funzione' , pippo());

// posso aggiungere a runtime o dimamicamente una propietà
pippo.propieta = 22;

// posso aggiungere a runtime o dimamicamente un metodo
pippo.funzione1 = () => "questo è il return della arrow function funzione1";

pippo.funzione2 = function(){
    return "questo è il return della funzione2";
}

console.log(pippo.funzione1());
console.log(pippo.funzione2());


// le funzioni in javascript sono first class object/ citizen

console.log(2 && true);
 

