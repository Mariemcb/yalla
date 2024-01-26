import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from 'src/participant/entities/participant.entity';
import { Reservation } from './entities/reservation.entity';
import { Paiement } from 'src/paiement/entities/paiement.entity';
import { Event } from 'src/event/entities/event.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Participant,Reservation,Paiement,Event])],
  controllers: [ReservationController],
  providers: [ReservationService],
  exports: [TypeOrmModule],
})
export class ReservationModule {}
