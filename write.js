const { writeDb } = require("./dbFunctions")

const dataObj = {
    Chris: 'I am trying to learn json databases'
}

writeDb(dataObj)