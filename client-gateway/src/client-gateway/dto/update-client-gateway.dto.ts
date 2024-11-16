import { PartialType } from '@nestjs/mapped-types';
import { CreateClientGatewayDto } from './create-client-gateway.dto';

export class UpdateClientGatewayDto extends PartialType(CreateClientGatewayDto) {
  id: number;
}
