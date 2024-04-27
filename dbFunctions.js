const fs = require('fs')

function readDb(dbName = 'db.json') {
    //reads JSON object from file
    const data = fs.readFileSync(dbName, 'uft-8')
    return JSON.parse(data)
}

function writeDb(obj, dbName = 'db.json') {
    if (!obj) return console.log('Please provide data to save')
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj)) //will overwrite existing data
        return console.log('Save successful')
    } catch (err) {
        return console.log('Save failed')
    }
}

module.exports = { readDb, writeDb }