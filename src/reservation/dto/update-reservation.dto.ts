
import { IsDate, IsEnum } from 'class-validator';
import { etat } from '../entities/reservation.entity';

export class UpdateReservationDto {

    @IsEnum(etat)
  état: etat;
}

