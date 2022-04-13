import { Controller, Get, Post, Body, Put, Patch, Param, Delete, Header, Redirect, Logger, HttpException } from '@nestjs/common';

import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}
  
  /**
    http://localhost:3000/dogs
   */
  @Get()
  async findAll() {
    Logger.log('controller.findAll')
    let courses = await this.dogsService.findAll()
    return courses
  }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    Logger.log('controller.create', createDogDto)
    let course = await this.dogsService.create(createDogDto);
    return course
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    // Logger.log('controller.findOne.id', id)
    let course = await this.dogsService.findOne(+id);
    return course
  }
  
  /**

   */
  @Put(':id')
  async update(@Param('id') id, @Body() updateDogDto: UpdateDogDto) {
    let dog = await this.dogsService.update(+id, updateDogDto);
    Logger.log('controller.dog ' + dog.name)
    return dog
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
function HttpCode(arg0: number) {
  throw new Error('Function not implemented.');
}

