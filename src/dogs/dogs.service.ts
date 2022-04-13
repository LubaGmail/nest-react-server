import { Injectable, Logger, HttpException } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { DOGS } from './dogs.mock'
import { debounce } from 'rxjs';

@Injectable()
export class DogsService {
  dogs = DOGS

  findAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.dogs)
    })
  }

  create(createDogDto: CreateDogDto): Promise<CreateDogDto[]> {
    // Logger.log('create', createDogDto)
    return new Promise( (resolve, reject) => {
      this.dogs.push(createDogDto)
      resolve(this.dogs)
    })
  }

  findOne(id: number): Promise<CreateDogDto> {
    // Logger.log('service.findOne.id', id)
    return new Promise( (resolve, reject) => {
      let dog = this.dogs.find(dog => dog.id === id)
      if (!dog) throw new HttpException('Not Found', 404)
      resolve(dog)
    })
  }
 
  update(id: number, updateDogDto: UpdateDogDto): Promise<any> {
    // return `This action updates a #${id} dog`;
    return new Promise( (resolve, result) => {
      let dog = this.dogs.find(d => d.id === id)
      if (!dog) throw new HttpException('Not Found', 404)
      dog.name = 'abc'
      resolve(dog)
    })
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
