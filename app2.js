const multiplicacion = require('./utlitily/multiplication');

console.log('>>>>> app');
console.log(process.argv);

const [,, arg3 = 'base=1'] = process.argv;
const [, base = 1] = arg3.split('=');

//const base = 7;

multiplicacion.createFile(base)
    .then(fileName => console.log(`${fileName} created OK`))
    .catch(err => console.error('Error: ', err));

console.log('<<<<< app');