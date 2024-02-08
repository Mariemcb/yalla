import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganisateurDto } from './create-organisateur.dto';
import { IsString, IsDate, IsPhoneNumber, IsOptional } from 'class-validator';

export class UpdateOrganisateurDto extends PartialType(CreateOrganisateurDto) {

    @IsString()
    @IsOptional()
    nom?: string;
  
    @IsString()
    @IsOptional()
    prenom?: string;
  
    @IsString()
    @IsOptional()
    adresse?: string;
  
    @IsOptional()
    @IsString() // Use IsString decorator to ensure it is a string
    dn: string;
  
  


}