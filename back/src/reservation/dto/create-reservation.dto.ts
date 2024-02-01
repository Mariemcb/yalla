// create-reservation.dto.ts
import { IsDate, IsEnum, IsNumber, IsNotEmpty } from 'class-validator';
import { etat } from '../entities/reservation.entity';

export class CreateReservationDto {

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsEnum(etat)
  état: etat;
  
}
