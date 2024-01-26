import { IsString, IsDate, IsPhoneNumber, IsNotEmpty, Length } from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  readonly nom: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  readonly prenom: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  readonly adresse: string;

  @IsDate()
  readonly dateNaissance: Date;

  @IsPhoneNumber('TN', { message: 'Invalid phone number' })
  readonly numTel: string;
}

