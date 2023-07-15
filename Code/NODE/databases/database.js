import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function getNotes() {
    const result = await pool.query('SELECT * FROM notes');
    const rows = result[0];
    console.log(rows);
}

//This will look for an element with a particular id
async function getNote(id) {
    const result = await pool.query(`SELECT * FROM notes WHERE id = ?`, [id]);
    const rows = result[0];
    console.log('Note function ', rows);
}

getNotes();
getNote(1);

async function createNote(title, content) {
    await pool.query(`
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
    `, [title, content])
    console.log(`NOTE CREATED: ${title} ${content}`)
}
// createNote('Testing one', 'Testing two')