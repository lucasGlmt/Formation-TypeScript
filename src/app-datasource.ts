import { DataSource } from 'typeorm';
import { Flower } from './entities/flower';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "root",
    database: "plantus",
    synchronize: true,
    logging: true,
    entities: [Flower],
    subscribers: [],
    migrations: [],
})