const { Pool } = require("pg")

const db = new Pool()

db.query(`CREATE TABLE IF NOT EXISTS testing(id SERIAL PRIMARY KEY);`)