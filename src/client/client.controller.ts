import { Body, Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { WalletServiceClient, WALLET_SERVICE_NAME } from 'src/protobuf/interface-ts/wallet';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Controller('client')
export class ClientController implements OnModuleInit {
  private clientService: WalletServiceClient;

  constructor(@Inject(WALLET_SERVICE_NAME) private client: ClientGrpc) {}
  onModuleInit() {
    this.clientService = this.client.getService<WalletServiceClient>(WALLET_SERVICE_NAME);
  }
  @Get()
  getHello(): string {
    return 'hello';
  }

  @Post('/create')
  async createWallet(@Body() dto: CreateWalletDto) {
    console.log('222 :>> ', 222);
    return await this.clientService.createWallet({ userId: dto.userId, currency: dto.currency }).toPromise();
  }

  @Post('/get-balance')
  async getBalance(@Body() dto: CreateWalletDto) {
    return await this.clientService.getBalance({ id: dto.userId }).toPromise();
  }
}
