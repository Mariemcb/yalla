import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentaireDto {
  @IsString()
  @IsNotEmpty()
  contenu: string;
}