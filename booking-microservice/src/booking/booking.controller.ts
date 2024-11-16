import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('bookings') // Etiqueta para organizar las rutas en Swagger
@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'Create a new booking' }) // Descripción de la operación
  @ApiResponse({ status: 201, description: 'The booking has been successfully created.' }) // Respuesta de éxito
  @MessagePattern('createBooking')
  create(@Payload() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: 'Find all bookings' })
  @ApiResponse({ status: 200, description: 'Found all bookings.' })
  @MessagePattern('findAllBooking')
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: 'Find one booking by id' })
  @ApiResponse({ status: 200, description: 'Found the booking by id.' })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  @MessagePattern('findOneBooking')
  findOne(@Payload() id: number) {
    return this.bookingService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an existing booking' })
  @ApiResponse({ status: 200, description: 'The booking has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  @MessagePattern('updateBooking')
  update(@Payload() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(updateBookingDto.id, updateBookingDto);
  }

  @ApiOperation({ summary: 'Remove a booking' })
  @ApiResponse({ status: 200, description: 'The booking has been successfully removed.' })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  @MessagePattern('removeBooking')
  remove(@Payload() id: number) {
    return this.bookingService.remove(id);
  }
}
