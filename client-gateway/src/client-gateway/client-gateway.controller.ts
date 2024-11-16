import { Controller, Get, Param } from '@nestjs/common';
import { ClientGatewayService } from './client-gateway.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('client-gateway')
export class ClientGatewayController {
  constructor(private readonly clientGatewayService: ClientGatewayService) {}

  // Endpoint para ver todas las reservas
  @Get('bookings')
  async getAllBookings() {
    return await this.clientGatewayService.getAllBookings();
  }

  // Endpoint para ver todas las órdenes de licor
  @Get('liquor-orders')
  async getAllLiquorOrders() {
    return await this.clientGatewayService.getAllLiquorOrders();
  }

  // Endpoint para obtener información de una reserva por ID
  @Get('booking/:id')
  async getBooking(@Param('id') id: string) {
    return await this.clientGatewayService.getBooking(id);
  }

  // Endpoint para obtener el nivel de stock de licor
  @Get('liquor-stock/:id')
  async getLiquorStock(@Param('id') id: string) {
    return await this.clientGatewayService.getLiquorStock(id);
  }
}
