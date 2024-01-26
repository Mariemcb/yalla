import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Controller('reservation')
export class ReservationController {

  
  constructor(private readonly reservationService: ReservationService) {}

  @Post(':eventId/:participantId')
  async createReservation(
    @Param('eventId') eventId: number,
    @Param('participantId') participantId: number,
  ): Promise<{ success: boolean, reservation?: Reservation, message?: string }> {
    try {
      const reservation = await this.reservationService.createReservation(eventId, participantId);
      return { success: true, reservation };
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        return { success: false, message: error.message };
      }
      throw error; // Re-throw unexpected errors
    }
  }
  
  @Delete('cancel/:reservationId')
  async cancelReservation(@Param('reservationId') reservationId: number): Promise<{ success: boolean, message?: string }> {
    try {
      await this.reservationService.cancelReservation(reservationId);
      return { success: true, message: `Reservation with ID ${reservationId} has been canceled` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { success: false, message: error.message };
      }
      throw error; // Re-throw unexpected errors
    }
  }
  

  @Get(':reservationId')
  async getReservationById(@Param('reservationId') reservationId: number): Promise<{ success: boolean, reservation?: any, message?: string }> {
    try {
      const reservation = await this.reservationService.GetReservationById(reservationId);
      
      if (!reservation) {
        throw new NotFoundException(`Reservation with ID ${reservationId} not found`);
      }

      return { success: true, reservation };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { success: false, message: error.message };
      }
      throw error; // Re-throw unexpected errors
    }
  }


  @Get('participant/:participantId')
  async getParticipantReservations(@Param('participantId') participantId: number): Promise<{ success: boolean, reservations?: any[], message?: string }> {
    try {
      const reservations = await this.reservationService.getParticipantReservations(participantId);

      if (reservations.length === 0) {
        throw new NotFoundException(`No reservations found for Participant with ID ${participantId}`);
      }

      return { success: true, reservations };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { success: false, message: error.message };
      }
      throw error; // Re-throw unexpected errors
    }
  }


  @Get('event/:eventId/confirmed-count')
  async getNumberOfEventReservationsConfirmed(@Param('eventId') eventId: number): Promise<{ confirmedCount: number }> {
    try {
      const [reservations, confirmedCount] = await this.reservationService.getNumberOfEventReservationsConfirmed(eventId);
      return { confirmedCount };
    } catch (error) {
      // Handle errors, such as event not found
      return { confirmedCount: 0 };
    }
  }


}

  
  

