const fs = require('fs')

function readDb(dbName = 'db.json') {
    const data = fs.readFileSync(dbName, 'uft-8')
    return JSON.parse(data)
}

function writeDb(obj, dbName = 'db.json') {
    if (!obj) { return console.log('Please provide data to save') }

    try {
        fs.writeFileSync(dbName, JSON.stringify(obj))

        return console.log('Save successful')
    } catch (error) {
        return console.log('Save failed')
    }
}

module.exports = { readDb, writeDb }