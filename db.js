const mysql = require('mysql2/promise');

// 创建数据库连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'LP',
    waitForConnections: true,
    connectionLimit: 11,
    queueLimit: 0
});

module.exports = pool;
