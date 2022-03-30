import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  public id: number;
  public firstName: string;
  public lastName: string;
  public age: number;
  public grade: number;
}
