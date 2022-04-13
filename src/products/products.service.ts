import { Injectable, HttpException, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import axios from 'axios'

/**
  https://axios-http.com/docs/intro
    Axios is a promise-based HTTP Client for node.js
    On the server-side it uses the native node.js http module
 */

const BASE_URL = 'https://reqres.in/api/'
const PRODUCTS_URL = 'https://reqres.in/api/products/'

@Injectable()
export class ProductsService {
  /**
    http://localhost:3000/products
   */
  findAll(): Promise <CreateProductDto[]> {
    return axios.get(PRODUCTS_URL)
      .then( res => {
        return res.data.data
      })
      .catch(err => {
        throw new HttpException('findAll resource is not available', 500)
      })
  }

  /**
    http://localhost:3000/products/1
   */
  findOne(id: number): Promise<CreateProductDto>  {
    return axios.get(PRODUCTS_URL, { params: { id: id } })
      .then(res => {

        return res.data.data
      })
      .catch(err => {
        throw new HttpException('findAll with param ${id} failed', 404)
      })
  }

  create(dto: CreateProductDto) : Promise<CreateProductDto> {

    return axios.post(`${PRODUCTS_URL}`, {
        dto
      })
      .then(function (res) {
  
        return res.data
      })
      .catch(function (error) {
        throw new HttpException(error, 500)
      })
  }

  /**
    http://localhost:3000/products/1

    the second parameter is the data you will be sending to change
   */
  update(id: number, data: Object) : Object {
 
    return axios.patch(`${PRODUCTS_URL}/${id}`, { params: data })
      .then ((res) => {
        return res.data
      })
      .catch(err => {
        throw new HttpException(err, 500)
     })
  }

  remove(id: number): any {
    axios.delete(`${PRODUCTS_URL}/${id}`)
        .then((res) => {

          return res.data
        })
        .catch(err => {
          throw new HttpException(err, 500)
        })
  }
}
