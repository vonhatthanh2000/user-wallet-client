import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WalletService',
        transport: Transport.GRPC,
        options: {
          package: 'WalletService',
          protoPath: join(process.cwd(), 'src/protobuf/wallet.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController, ClientController],
  providers: [AppService],
})
export class AppModule {}
