import { Controller, Get, Param } from '@nestjs/common';
import { ClientGatewayService } from './client-gateway.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('client-gateway')
export class ClientGatewayController {
  constructor(private readonly clientGatewayService: ClientGatewayService) {}


  @Get('bookings')
  async getAllBookings() {
    return await this.clientGatewayService.getAllBookings();
  }


  @Get('liquor-orders')
  async getAllLiquorOrders() {
    return await this.clientGatewayService.getAllLiquorOrders();
  }

  @Get('booking/:id')
  async getBooking(@Param('id') id: string) {
    return await this.clientGatewayService.getBooking(id);
  }

  @Get('liquor-stock/:id')
  async getLiquorStock(@Param('id') id: string) {
    return await this.clientGatewayService.getLiquorStock(id);
  }
}
