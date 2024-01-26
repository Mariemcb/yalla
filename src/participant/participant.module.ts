import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { Participant } from './entities/participant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participant,Reservation])],
  controllers: [ParticipantController],
  providers: [ParticipantService],
  exports: [TypeOrmModule],
})
export class ParticipantModule {}
