import csv from 'csvtojson'

export async function convertCSVToJSON(data: string) {
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