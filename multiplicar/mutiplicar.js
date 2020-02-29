const fs = require('fs');
let colors= require('colors');

let listar = (base, limite=10)=>{

    console.log("=========================".green);  
    console.log(`======== listando tabla ${base} ==========`.green); 
    console.log("=========================".green);   

    var str='';
    for (let i=1;i<limite; i++){
        str+=`${base} X ${i}= ${base*i}\n`;
    }
    console.log(str)
}

let crearArchivo = (base,limite=10) => {
    return new Promise((reject, resolve) => {
        if(!Number(base)){
            reject(`lo que se introdujo: ${base} NO es un numero`);
            return;
        }
        var str='';
        for (let i=1;i<limite; i++){
            str+=`${base} X ${i}= ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/Tabla-${base}.txt`,str, (err)=>{
            if (err){
                reject(err);
            } 
             resolve (`el archivo con la Tabla-${base}.txt hasta el numero ${limite} fue creado`);

        });
        
    })
    
}

module.exports = {
    crearArchivo,
    listar
}