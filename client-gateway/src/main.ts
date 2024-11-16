import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Social Media Club API') 
    .setDescription('The API for managing events and liquor orders at the club.')  
    .setVersion('1.0')  
    .addTag('events')  
    .addTag('orders')  
    .build();
  
  const document = SwaggerModule.createDocument(app, config);  
  SwaggerModule.setup('api', app, document);  

  await app.listen(3001);
}
bootstrap();
