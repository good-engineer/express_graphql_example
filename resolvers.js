const { students, colleges , findById} = require("./db")

const Query = {
    test : () => 'test success, GeaphQL server is up & running',
    student: () => students.list(),

}

module.exports = {Query}