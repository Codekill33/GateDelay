import { Module } from '@nestjs/common';
import { PriceGateway } from './price.gateway';
import { AuthModule } from '../auth/auth.module';
import { PositionsModule } from '../positions/positions.module';

@Module({
  imports: [AuthModule, PositionsModule],
  providers: [PriceGateway],
  exports: [PriceGateway],
})
export class WebsocketModule {}
