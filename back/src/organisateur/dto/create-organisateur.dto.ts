import { IsString, IsNotEmpty, IsDate, IsPhoneNumber } from 'class-validator';

export class CreateOrganisateurDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsString()
  @IsNotEmpty()
  adresse: string;

  @IsNotEmpty()
  @IsString()
  dn: string;

}