import {registerAs} from '@nestjs/config';

export default registerAs('database', () => ({
    type: 'mssql',
    // host: 'localhost',
    // port: 6666,
    // username: 'sa',
    // password: 'Hussnain20',
    // database: 'shoply',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
}));