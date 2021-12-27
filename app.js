const multiplicacion = require('./utlitily/multiplication');
const argv = require('./config/yargs')
var colors = require('colors');

console.clear();
console.log(argv);

multiplicacion.createFile(argv.base, argv.limit, argv.show)
    .then(fileName => console.log(colors.blue(fileName+'') +' created OK'))
    .catch(err => console.error('Error: '.red, err));