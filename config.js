module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'b3bdjnj1jknhs75s48af-mysql.services.clever-cloud.com',
        user: process.env.MYSQL_USER || 'u08mq1ek6wfgzr3c',
        password: process.env.MYSQL_PASS || '9qVIFagLqJdDegAfhzoP',
        database: process.env.MYSQL_DB || 'b3bdjnj1jknhs75s48af',
    },
}