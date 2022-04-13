import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

/**
 The PartialType() function returns a type (class) with all the properties of the input type set to optional. 
 */
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
