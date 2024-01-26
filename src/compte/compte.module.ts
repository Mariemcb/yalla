import { Module } from '@nestjs/common';
import { CompteService } from './compte.service';
import { CompteController } from './compte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte } from './entities/compte.entity';
import { Participant } from 'src/participant/entities/participant.entity';
import { Notification } from 'src/notification/entities/notification.entity';
import { organisateur } from 'src/organisateur/entities/organisateur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compte,Participant,Notification,organisateur])],
  exports: [TypeOrmModule,CompteService],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}
