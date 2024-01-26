import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { Participant } from 'src/participant/entities/participant.entity';
import {etat} from './entities/reservation.entity'
import { Event } from 'src/event/entities/event.entity';

@Injectable()
export class ReservationService {
  
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}
  /*
  private async getParticipantById(participantId: number): Promise<Participant> {
    // Implement the logic to get a participant by ID
    return await this.participantRepository.findOne({where: { idParticipant: participantId }});
  }*/
  
  async createReservation(eventId: number, participantId: number): Promise<Reservation> {
    // Retrieve the participant and event information
    const participant = await this.participantRepository.findOne({where:{idParticipant:participantId}});
    const event = await this.eventRepository.findOne({where:{idEvent:eventId}});

    if (!participant) {
      throw new NotFoundException(`Participant with ID ${participantId} not found`);
    }

    if (!event) {
      throw new NotFoundException(`Event with ID ${eventId} not found`);
    }


    // Check if the event has reached its capacity
    if (event.numberofReservations >= event.capacite) {
      throw new BadRequestException(`Event with ID ${eventId} has reached its capacity for reservations`);
    }

    // Create a new reservation
    const reservation = new Reservation();
    reservation.participant = participant;
    reservation.date = new Date();
    reservation.état=etat.CONFIRMED;

    // Save the reservation to the database
    await this.reservationRepository.save(reservation);

    // Update the event's numberOfReservations
    event.numberofReservations += 1;
    await this.eventRepository.save(event);

    return reservation;
  }
    
  

  async cancelReservation(reservationId: number): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({ where: { idReservation: reservationId } });
  
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${reservationId} not found`);
    }
  
    reservation.état = etat.CANCELED;
  
    // Save the updated reservation to the database
    await this.reservationRepository.save(reservation);
    return reservation ; 
  }
  
  /*
  async getAllReservations(): Promise<Reservation[]> {
    return await this.reservationRepository.find({where: {état: etat.CONFIRMED,}});
  }
*/

  async GetReservationById(reservationId:number){
    const reservation = this.reservationRepository.findOne({where: {idReservation : reservationId}});
    return reservation
  }


  
  async getParticipantReservations(participantId: number): Promise<Reservation[]> {
    // Placeholder: Implement the logic to get reservations for a participant
    return await this.reservationRepository.find({ where: { participant: { idParticipant: participantId } } });
  }

  
  async getEventReservations(eventId: number): Promise<Reservation[]> {
    const reservations = await this.reservationRepository.find({
      select: ["idReservation", "état"],
      where: { état: etat.CONFIRMED, event: { idEvent: eventId } },
    });
  
    return reservations;
  }


  async getNumberOfEventReservationsConfirmed (eventId: number) {
    const NumberReservations = await this.reservationRepository.findAndCount({
      select: ["idReservation", "état"],
      where: { état: etat.CONFIRMED, event: { idEvent: eventId } },
    });
  
    return NumberReservations;
  }

  
}
