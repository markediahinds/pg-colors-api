const db = require('../db/dbConfig') // import connection to db

// functions to use inside of controllers
// one function for each time of query/request
const getAllColors = async () => {
    // db.any() -- db is the connection to the database. `.any` is one of the methods that say what kind of data we're expecting to get back. "Any" specifically means we will be happy with ANY kind of data, as in NO data, SOME data, or just ONE piece of data
    try {
        const allColors = await db.any("SELECT * FROM colors")
        return allColors
    } catch (error) {
        return error
    }
} // .any is what we are expecting to be returned

module.exports = { getAllColors }