const fs = require('fs');
const csv = require('csv-parser');

const readCSV = (filepath)=>{
    const result = [];

    return new Promise((resolve,reject)=>{
        fs.createReadStream(filepath).pipe(csv())
        .on('data',(data)=> result.push(data))
        .on('end',()=>{
            resolve(result);
        })
        .on('error',(error)=>{
            reject(error);
        })
    })
}

module.exports = readCSV;