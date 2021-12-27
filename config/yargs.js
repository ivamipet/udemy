const argv = require('yargs')
                .option('b', {
                    alias : 'base',
                    type : 'number',
                    demandOption : true,
                    describe : 'Value to multiply'
                })
                .option('l', {
                    alias : 'limit',
                    type : 'number',
                    demandOption : true,
                    describe : 'Limit value to multiply'
                })
                .option('s', {
                    alias : 'show',
                    type : 'boolean',
                    demandOption : false,
                    default : false,
                    describe : 'Flag to display information on console'
                })
                .check( (argv, option) => {
                    if(isNaN(argv.base)){
                        throw 'base must be a number'
                    }

                    return true;
                })
                .argv;

module.exports = argv;