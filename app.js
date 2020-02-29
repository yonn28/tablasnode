
let { crearArchivo,listar } = require('./multiplicar/mutiplicar');
let {argv} = require('./config/yargs');
let colors= require('colors');

// console.log(argv);
// console.log(argv._[0]);

let comando =argv._[0];

switch (comando){
    case 'listar':
        
        listar(argv.base,argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite).then( 
            (res)=> {console.log(colors.green(res));} 
          ).catch( 
            err => console.log(err) 
          );
    break;
    default:
        console.log("Comando no reconocido");
}

// console.log(process.argv);

// let parametro= process.argv[2];
// console.log(parametro);

