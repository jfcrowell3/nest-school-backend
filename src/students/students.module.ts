import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { studentsrepository } from './students.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student, studentsrepository])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
