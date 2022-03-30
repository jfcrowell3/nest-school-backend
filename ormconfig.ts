import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { Student } from './src/students/entities/student.entity';

export const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['./build/src/students/entities/*.{ts,js}'],
  synchronize: true,
  logging: true,
  migrations: ['./build/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};
