import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderingDto {
  @IsString()
  @IsNotEmpty()
  liquorType: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsOptional()
  stockLevel?: number;

  @IsNumber()
  @IsNotEmpty()
  reorderThreshold: number;

  @IsString()
  @IsOptional()
  supplierContact?: string;

  @IsString()
  @IsOptional()
  eventServed?: string;
}
