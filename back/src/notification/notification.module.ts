import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte } from 'src/compte/entities/compte.entity';
import { Notification } from './entities/notification.entity';

@Module({
  exports: [TypeOrmModule],
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [TypeOrmModule.forFeature([Compte,Notification])],
})
export class NotificationModule {}
