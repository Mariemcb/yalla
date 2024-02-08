// create-event.dto.ts
import { IsString, IsNotEmpty, IsDate, IsInt, IsEnum, IsObject } from 'class-validator';
import { Categories } from '../entities/event.entity'; 

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  titre: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsInt()
  capacite: number;

  @IsString()
  @IsNotEmpty()
  heureDebut: string;

  @IsString()
  @IsNotEmpty()
  heureFin: string;

  @IsEnum(Categories)
  categorie: Categories;

  @IsString()
  location:String;

  @IsString()
  prix:string;


}
