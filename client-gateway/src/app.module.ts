import { Module } from '@nestjs/common';
import { ClientGatewayModule } from './client-gateway/client-gateway.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Cargar el archivo .env
    ClientGatewayModule,     // Módulo de Client Gateway
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}

  static clientGatewayOptions(): MicroserviceOptions {
    return {
      transport: Transport.NATS,
      options: {
        url: process.env.NATS_URL,
        queue: process.env.BOOKING_SERVICE_QUEUE,  // Si quieres especificar un tipo de cola
      },
    };
  }
}
