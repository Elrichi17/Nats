import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from './booking/booking.module';  // Importa el módulo de Booking
import { typeOrmConfig } from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),  // Usamos la configuración de ormconfig.ts
    BookingModule,  // Asegúrate de importar tu módulo de Booking
  ],
})
export class AppModule {}
