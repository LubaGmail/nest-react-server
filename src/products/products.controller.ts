import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    const products = await this.productsService.findAll();
 
    return products
  }

  /**
      http://localhost:3000/products/1       -OR-       https://reqres.in/api/products/:id
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(+id);
    return product
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    let dto = new CreateProductDto()
    dto.id = 7 
    dto.name = 'abc'
    dto.year = 2011
    dto.color = 'red'
    const product = await this.productsService.create(dto);
   
    return product
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: Object) {
    data = {color: 'green'}
    const res = await this.productsService.update(+id, data );

    return res
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    let res = await this.productsService.remove(+id);

    return res
  }
}
