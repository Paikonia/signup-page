import sqlite from 'sqlite3'

const db = new sqlite.Database('database.sqlite', (err)=> {
    if(err) {
        console.log(err)
    }else {
        console.log('Connected to database')
    }
})

db.run('CREATE TABLE IF NOT EXISTS students (userid TEXT PRIMARY KEY, username TEXT, password TEXT, first_name TEXT, last_name TEXT, email TEXT)', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Table created successfully');
    }
});

db.run('CREATE TABLE IF NOT EXISTS parents (userid INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT)', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Table created successfully');
    }
});


db.run('CREATE TABLE IF NOT EXISTS course (userid INTEGER PRIMARY KEY, course_name TEXT, session_time TEXT, session_start TEXT)', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Table created successfully');
    }
});


export const runOperation = (query:any, params: Array<string>) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if(err) {
                console.log(err)
                reject(err)
            
            }else {
                console.log(rows)
                resolve(rows)
            }
        })
    })
} 
