import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import * as mongoose from 'mongoose'

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  // await mongoose.connect('mongodb://localhost:27017/', { dbName: 'test' });

  const config = new DocumentBuilder()
  .setTitle('NestJs Api 博客')
  .setDescription('我的第一个使用 NestJs 的项目')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
    await app.listen(5000);
    console.log(5000)
}

bootstrap();
