import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from './booking/booking.module';  
import { typeOrmConfig } from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),  
    BookingModule,  
  ],
})
export class AppModule {}
