import { ECurrency } from 'src/protobuf/interface-ts/enums';
import { IsString, IsUUID } from 'class-validator';

export class CreateWalletDto {
  constructor(partial: Partial<CreateWalletDto>) {
    Object.assign(this, partial);
  }
  @IsString()
  userId: string;

  @IsString()
  currency: ECurrency;
}
