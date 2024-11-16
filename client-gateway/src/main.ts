import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Social Media Club API')  // Título de la API
    .setDescription('The API for managing events and liquor orders at the club.')  // Descripción de la API
    .setVersion('1.0')  // Versión de la API
    .addTag('events')  // Agrega etiquetas (útil si tienes múltiples grupos de rutas)
    .addTag('orders')  // Etiqueta para las órdenes de licor
    .build();
  
  const document = SwaggerModule.createDocument(app, config);  // Crear el documento Swagger
  SwaggerModule.setup('api', app, document);  // Configurar la ruta /api para acceder a Swagger UI

  await app.listen(3001);
}
bootstrap();
