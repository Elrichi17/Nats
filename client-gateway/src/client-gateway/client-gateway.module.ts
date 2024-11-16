import { Module } from '@nestjs/common';
import { ClientGatewayController } from './client-gateway.controller';
import { ClientGatewayService } from './client-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKING_SERVICE',
        transport: Transport.NATS,
        options: {
          url: process.env.NATS_URL,
          queue: process.env.BOOKING_SERVICE_QUEUE,
        },
      },
      {
        name: 'LIQUOR_ORDER_SERVICE',
        transport: Transport.NATS,
        options: {
          url: process.env.NATS_URL,
          queue: process.env.LIQUOR_ORDER_SERVICE_QUEUE,
        },
      },
    ]),
    ConfigModule.forRoot(), 
  ],
  controllers: [ClientGatewayController],
  providers: [ClientGatewayService],
})
export class ClientGatewayModule {}
