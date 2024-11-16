import { Test, TestingModule } from '@nestjs/testing';
import { ClientGatewayController } from './client-gateway.controller';
import { ClientGatewayService } from './client-gateway.service';

describe('ClientGatewayController', () => {
  let controller: ClientGatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientGatewayController],
      providers: [ClientGatewayService],
    }).compile();

    controller = module.get<ClientGatewayController>(ClientGatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
