import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderingService } from './ordering.service';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('orders') // Etiqueta para organizar las rutas en Swagger
@Controller()
export class OrderingController {
  constructor(private readonly orderingService: OrderingService) {}

  @ApiOperation({ summary: 'Create a new ordering' }) // Descripción de la operación
  @ApiResponse({ status: 201, description: 'The ordering has been successfully created.' }) // Respuesta de éxito
  @MessagePattern('createOrdering')
  create(@Payload() createOrderingDto: CreateOrderingDto) {
    return this.orderingService.create(createOrderingDto);
  }

  @ApiOperation({ summary: 'Find all orders' }) 
  @ApiResponse({ status: 200, description: 'Found all orders.' })
  @MessagePattern('findAllOrdering')
  findAll() {
    return this.orderingService.findAll();
  }

  @ApiOperation({ summary: 'Find one ordering by id' })
  @ApiResponse({ status: 200, description: 'Found the order by id.' })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @MessagePattern('findOneOrdering')
  findOne(@Payload() id: number) {
    return this.orderingService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an existing ordering' })
  @ApiResponse({ status: 200, description: 'The ordering has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @MessagePattern('updateOrdering')
  update(@Payload() updateOrderingDto: UpdateOrderingDto) {
    return this.orderingService.update(updateOrderingDto.id, updateOrderingDto);
  }

  @ApiOperation({ summary: 'Remove an ordering' })
  @ApiResponse({ status: 200, description: 'The ordering has been successfully removed.' })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @MessagePattern('removeOrdering')
  remove(@Payload() id: number) {
    return this.orderingService.remove(id);
  }
}
