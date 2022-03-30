import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  //this class acts as our DAO.
  // private students: Student[] = [
  //   //type 'Student' acts as our DTO.
  //   // { id: 0, firstName: '', lastName: '', age: 0, grade: 0 },
  // ];
  constructor(
    @InjectRepository(Student) private studentsrepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const newStudent = this.studentsrepository.create({
      ...createStudentDto,
    });
    return this.studentsrepository.save(newStudent);
    // this.students.push(Student);
    // return this.students;
  }

  findAll(): Promise<Student[]> {
    return this.studentsrepository.find();
  }
  //  = () => this.students;

  async findOne(id: number): Promise<Student> {
    try {
      const student = await this.studentsrepository.findOneOrFail(id);
      return student;
    } catch (err) {
      throw err;
    }
  }
  //  = (id: number) => this.students[id];

  async update(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    grade: number,
  ) {
    const student = await this.findOne(id);
    student.firstName = firstName;
    student.lastName = lastName;
    student.age = age;
    student.grade = grade;

    return this.studentsrepository.save(student);
    // const studentFromRequest = { firstName, lastName, age, grade };

    // Object.keys(studentFromRequest).forEach((field) => {
    //   if (studentFromRequest[field])
    //     this.students[id][field] = studentFromRequest[field];
    // });

    // return this.students[id];
  }

  async remove(id: number): Promise<Student> {
    const student = await this.findOne(id);
    return this.studentsrepository.remove(student);
    // this.students.splice(id, 1);
    // return this.students;
  }
}

// import { Body, HttpException, Injectable, Param } from '@nestjs/common';
// // import { CreateStudentDto } from './dto/create-student.dto';
// import { UpdateStudentDto } from './dto/update-student.dto';
// import { Student } from './students.model';

// @Injectable()
// export class StudentsService {
//   private students: Student[] = [];

//   create(student) {
//     // const newStudent = new Student();
//     // this.students.push(newStudent);
//     this.students.push(student);
//     return this.students;
//     //return 'This action adds a new stuqdent';
//   }

//   findAll() {
//     return [...this.students];
//     //return `This action returns all students`;
//   }

//   findOne(id: number) {
//     const student = this.findStudent(id)[0];
//     return { ...student };

//     // return `This action returns a #${id} student`;
//   }

//   update(
//     id: number,
//     firstName: string,
//     lastName: string,
//     age: number,
//     grade: number,
//   ) {
//     console.log(`Looking for Student -> ${id}`);
//     const [student, index] = this.findStudent(id);
//     console.dir(student, { depth: null });
//     const updatedStudent = { ...student };
//     if (firstName) {
//       updatedStudent.firstName = firstName;
//     }
//     if (lastName) {
//       updatedStudent.lastName = lastName;
//     }
//     if (age) {
//       updatedStudent.age = age;
//     }
//     if (grade) {
//       updatedStudent.grade = grade;
//     }
//     this.students[index] = updatedStudent;
//     return updatedStudent;
//   }

//   remove(id: number) {
//     const index = this.findStudent(id)[1];
//     this.students.splice(index, 1);
//     return this.students;
//   }

//   private findStudent(id: number): [Student, number] {
//     const student = this.students[id > 0 ? id - 1 : 0];
//     if (!student) {
//       throw new HttpException('Student not found', 404);
//     }
//     return [student, id];
//   }
// }
