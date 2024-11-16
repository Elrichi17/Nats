import { Test, TestingModule } from '@nestjs/testing';
import { ClientGatewayService } from './client-gateway.service';

describe('ClientGatewayService', () => {
  let service: ClientGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientGatewayService],
    }).compile();

    service = module.get<ClientGatewayService>(ClientGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
