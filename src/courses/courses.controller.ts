import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll() {
    const courses = await this.coursesService.findAll();
    return courses
  }

  /**
    http://localhost:3000/courses/:id     http://localhost:3000/courses/101
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const course = await this.coursesService.findOne(+id);
    return course
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.create(createCourseDto);
    return course
  }

  /**
    http://localhost:3000/courses/:courseId         
   */
  @Patch(':id')
  async update( @Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto ) {
    const course = await this.coursesService.update(+id, updateCourseDto);
    return course
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const courses = await this.coursesService.remove(+id);
    return courses
  }

}
