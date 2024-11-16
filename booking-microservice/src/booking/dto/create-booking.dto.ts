import { IsString, IsEmail, IsInt, IsDate, Min } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  eventName: string;

  @IsDate()
  eventDate: Date;

  @IsString()
  guestName: string;

  @IsEmail()
  guestEmail: string;

  @IsInt()
  @Min(1)
  guestCount: number;

  @IsString()
  specialRequests: string;
}
