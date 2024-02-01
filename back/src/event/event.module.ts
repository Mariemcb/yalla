import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Event,Reservation])],
  exports: [TypeOrmModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
