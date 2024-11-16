import { IsString, IsEmail, IsInt, IsDate, Min, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @IsOptional()
  eventName?: string;

  @IsDate()
  @IsOptional()
  eventDate?: Date;

  @IsString()
  @IsOptional()
  guestName?: string;

  @IsEmail()
  @IsOptional()
  guestEmail?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  guestCount?: number;

  @IsString()
  @IsOptional()
  specialRequests?: string;
}
