import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderingDto } from './dto/create-ordering.dto';
import { UpdateOrderingDto } from './dto/update-ordering.dto';
import { Ordering } from './entities/ordering.entity';

@Injectable()
export class OrderingService {
  constructor(
    @InjectRepository(Ordering)
    private orderingRepository: Repository<Ordering>,
  ) {}

  create(createOrderingDto: CreateOrderingDto) {
    const order = this.orderingRepository.create(createOrderingDto);
    return this.orderingRepository.save(order);
  }

  findAll() {
    return this.orderingRepository.find();
  }

  findOne(id: number) {
    return this.orderingRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOrderingDto: UpdateOrderingDto) {
    const order = await this.orderingRepository.preload({
      id,
      ...updateOrderingDto,
    });
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return this.orderingRepository.save(order);
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    return this.orderingRepository.remove(order);
  }
}
