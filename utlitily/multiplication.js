const fs = require('fs');
var colors = require('colors');

const moduleCreateFile = async(base, limit, show) => {

    try{
        const fileName = `./outputFiles/tabla_${base}.txt`;
            
        let outputConsole = '';
        let outputFile = '';

        for(let i=1;i<=limit;i++){
            outputConsole += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
            outputFile += (`${base} x ${i} = ${base * i}\n`);
        }

        if(show) console.log(outputConsole);

        fs.writeFileSync(fileName, outputFile);

        return (fileName)

    }catch(ex) {
        throw ex;
    }

}

module.exports = {
    createFile : moduleCreateFile
}



