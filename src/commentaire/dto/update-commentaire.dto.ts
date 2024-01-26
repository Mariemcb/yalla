import { IsString, IsOptional } from 'class-validator';

export class UpdateCommentaireDto {
  @IsString()
  @IsOptional()
  contenu?: string;
}