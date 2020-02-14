import { Module } from '@nestjs/common';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { ChannelController } from '../channel/channel.controller';
import { ChannelService } from '../channel/channel.service';

@Module({
  controllers: [AuthController, ChannelController],
  providers: [AuthService, ChannelService],
})
export class AppModule {}
