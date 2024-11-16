import { Injectable, Inject } from '@nestjs/common';
import {  Client, ClientProxy } from '@nestjs/microservices'; // Corregido aquí
import { Observable } from 'rxjs';

@Injectable()
export class ClientGatewayService {
  constructor(
    @Inject('BOOKING_SERVICE') private readonly bookingClient: ClientProxy,
    @Inject('LIQUOR_ORDER_SERVICE') private readonly liquorOrderClient: ClientProxy,
  ) {}


  getAllBookings(): Observable<any> {
    return this.bookingClient.send('findAllBooking', {});
  }

r
  getAllLiquorOrders(): Observable<any> {
    return this.liquorOrderClient.send('findAllLiquorOrders', {});
  }


  getBooking(id: string): Observable<any> {
    return this.bookingClient.send('findOneBooking', id);
  }

  getLiquorStock(id: string): Observable<any> {
    return this.liquorOrderClient.send('getLiquorStock', id);
  }
}
