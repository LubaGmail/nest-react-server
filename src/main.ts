import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

const logger = new Logger('NestApplication');

async function bootstrap() {
  // creates a new instance of the Nest application
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5000);
  logger.log('server is running on localhost:5000')       // where is the output?
}
bootstrap();
