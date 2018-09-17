module.exports = {
    // 数据库相关配置
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        options: {
            dialect: process.env.DIALECT || 'sqlite', // 声明数据库类型
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite' // 插入的数据将存储在这个文件中
        }
    }
}