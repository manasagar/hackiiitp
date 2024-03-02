import pg from 'pg';
import '../node_modules/dotenv/config.js'
export const db = new pg.Client({
    connectionString: process.env.connectionString,
});

