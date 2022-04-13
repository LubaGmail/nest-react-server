import { HttpException, Injectable , Logger} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {

  courses = COURSES
 
  findAll(): Promise<any> {
    return new Promise( (resolve, reject) => {
      resolve(this.courses)
      // reject(new Error("Resource is not available"))
    })
  }

  findOne(id: number): Promise<any>{
    // Logger.log('service.id', id)
    return new Promise( (resolve, reject) => {
      let course = this.courses.find(c => c.id === id)
      if (!course) throw new HttpException('Not Found', 404)
      resolve(course)
    })
  }
  
  create(createCourseDto: CreateCourseDto): Promise<any> {
    // return 'This action adds a new course';
    return new Promise( (resolve, reject) => {
      this.courses.push(createCourseDto)
      resolve(this.courses)
    })
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return new Promise( (resolve, reject) => {
      let course = this.courses.find(c => c.id === id)
      if (!course) throw new HttpException('Not Found', 404)
      course.title = 'New Title'
      resolve(course)
    })
  }

  remove(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let index = this.courses.findIndex(c => c.id === id)
      if (index == -1) throw new HttpException('Not Found', 404)
      // this.courses.splice(index, 1)
      resolve(this.courses)
    })
  }

}



