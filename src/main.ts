/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //documentaciones
  const config = new DocumentBuilder()
    .setTitle('Api Productos')
    .setDescription('En esta API hay  description de productos')
    .setVersion('1.1')
    .addTag('productos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //permitir todos los dominios en "cors"
  app.enableCors();


  app.setGlobalPrefix('api');
  await app.listen(4000);
}
bootstrap();
