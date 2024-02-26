import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'test',
    connectionLimit: 5
})

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('Database Connection Lost');
        }
        throw err;
    }
    if(connection) connection.release();
    return;
});

export default pool;