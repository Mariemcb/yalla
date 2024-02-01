import { IsNotEmpty } from 'class-validator';
export class CreateNotificationDto {
@IsNotEmpty({ message: 'Le champ "libelle" ne doit pas être vide.' })
libelle: string;
@IsNotEmpty({ message: 'Le champ "contenu" ne doit pas être vide.' })
contenu: string;
}

