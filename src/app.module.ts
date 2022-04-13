import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DogsModule } from './dogs/dogs.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CoursesModule, DogsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
