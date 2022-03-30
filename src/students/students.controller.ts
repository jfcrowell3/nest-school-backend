import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './students.model';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('age') age: number,
    @Body('grade') grade: number,
    @Body() request: any,
  ) {
    console.dir(request, { depth: null });
    return this.studentsService.update(id, firstName, lastName, age, grade);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentsService.remove(+id);
  }
}
