import { EntityRepository, Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@EntityRepository(Student)
export class studentsrepository extends Repository<Student> {
  createStudent = async (createStudentDto: CreateStudentDto) => {
    return await this.save(createStudentDto);
  };
}
