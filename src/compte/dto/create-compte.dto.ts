import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
export class CreateCompteDto {

@IsNotEmpty({ message: 'Le champ "username" ne doit pas être vide.' })
@IsString({ message: 'Le champ "username" doit être une chaîne de caractères.' })
username: string;

/*
@IsNotEmpty({ message: 'Le champ "email" ne doit pas être vide.' })
@IsEmail({}, { message: 'Le champ "email" doit être une adresse email valide.' })
email: string;
*/

@IsNotEmpty({ message: 'Le champ "password" ne doit pas être vide.' })
@IsString({ message: 'Le champ "password" doit être une chaîne de caractères.' })
password: string;
}

