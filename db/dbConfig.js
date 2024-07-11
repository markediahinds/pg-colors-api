const pgp = require('pg-promise')()
require('dotenv').config()

// PG_PASSWORD does not exist locally, but it does exist and is require on Render when we deploy. So we add it to our `cn` object so the production environment can find it and use it.

const cn = { // configured our obj
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD
}

const db = pgp(cn) // assigning var for our postgres connection // our connection to the database

module.exports = db