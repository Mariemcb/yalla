import { IsString, IsDate, IsPhoneNumber, IsOptional } from 'class-validator';

export class UpdateParticipantDto {
  @IsOptional()
  @IsString()
  readonly nom?: string;

  @IsOptional()
  @IsString()
  readonly prenom?: string;

  @IsOptional()
  @IsString()
  readonly adresse?: string;

  @IsOptional()
  @IsDate()
  readonly dn?: Date;

}
