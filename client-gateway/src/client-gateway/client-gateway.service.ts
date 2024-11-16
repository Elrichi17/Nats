import { Injectable, Inject } from '@nestjs/common';
import {  Client, ClientProxy } from '@nestjs/microservices'; // Corregido aquí
import { Observable } from 'rxjs';

@Injectable()
export class ClientGatewayService {
  constructor(
    @Inject('BOOKING_SERVICE') private readonly bookingClient: ClientProxy,
    @Inject('LIQUOR_ORDER_SERVICE') private readonly liquorOrderClient: ClientProxy,
  ) {}

  // Obtener todas las reservas
  getAllBookings(): Observable<any> {
    return this.bookingClient.send('findAllBooking', {});
  }

  // Obtener todas las órdenes de licor
  getAllLiquorOrders(): Observable<any> {
    return this.liquorOrderClient.send('findAllLiquorOrders', {});
  }

  // Obtener una reserva por ID
  getBooking(id: string): Observable<any> {
    return this.bookingClient.send('findOneBooking', id);
  }

  // Obtener stock de licor
  getLiquorStock(id: string): Observable<any> {
    return this.liquorOrderClient.send('getLiquorStock', id);
  }
}
