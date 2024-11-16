// ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',  // Tipo de base de datos
  database: process.env.DB_NAME || './booking.db',  // Usa la variable de entorno o la ruta por defecto
  entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Encuentra todas las entidades en el proyecto
  synchronize: true,  // Solo en desarrollo, sincroniza las entidades con la base de datos
};
