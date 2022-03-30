import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { createConnection } from 'typeorm';
// import { Student } from './students/entities/student.entity';
// import 'reflect-metadata';

// createConnection()
// // type: 'sqlite',
// // database: 'C:/sqlite3/test.db',
// // logging: true,
// // synchronize: true,
// // entities: [__dirname + '/**/entities/*.{ts,js}'],
//   .then(async (connection) => {
//     console.log('Inserting a new user into the database...');
//     const user = new Student();
//     user.firstName = 'Timber';
//     user.lastName = 'Saw';
//     user.age = 25;
//     user.grade = 2;
//     await connection.manager.save(user);
//     console.log('Saved a new user with id: ' + user.id);

//     console.log('Loading users from the database...');
//     const users = await connection.manager.find(Student);
//     console.log('Loaded users: ', users);

//     console.log('Here you can setup and run express/koa/any other framework.');
//   })
//   .catch((error) => console.log(error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
