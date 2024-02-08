import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';



import { IsString, IsDate, IsInt, IsOptional, IsEnum } from 'class-validator';
import { Categories } from '../entities/event.entity'; 

export class UpdateEventDto extends PartialType(CreateEventDto)  {
  @IsString()
  @IsOptional()
  titre?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDate()
  @IsOptional()
  date?: Date;

  @IsInt()
  
  @IsOptional()
  capacite?: number;

  @IsString()
  @IsOptional()
  heureDebut?: string;

  @IsString()
  @IsOptional()
  heureFin?: string;

  @IsEnum(Categories)
  @IsOptional()
  categorie?: Categories;

  @IsString()
  @IsOptional()
  prix?: string;


}