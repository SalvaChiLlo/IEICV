const fs = require('fs')
import csv from 'csvtojson'

export async function convertCSVToJSON(data: string) {
  console.log(data)
  console.log('PARSING CSV')
  try {
    const res = await csv({
      delimiter: ';'
    }).fromString(data);
    return res;
  } catch (error: any) {
    throw Error(error)
  }
}

async function parseData() {
  fs.writeFileSync('./VAL.json', JSON.stringify(await convertCSVToJSON(fs.readFileSync('./directorio-de-bibliotecas-valencianas_2020.csv').toString()).toString()));
}

// parseData()
// fs.writeFileSync('./VAL.json', JSON.stringify({ bibliotecas: fs.readFileSync('./directorio-de-bibliotecas-valencianas_2020.csv').toString() }));
