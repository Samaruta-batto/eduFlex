import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  logging: false,
  entities: ['src/db/entity/**/*.ts'], // Keep existing entities if they are still part of the project structure
  migrations: [],
  subscribers: [],
});
