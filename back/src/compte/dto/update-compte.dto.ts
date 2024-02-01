import { IsString, IsEmail, IsOptional } from 'class-validator';
export class UpdateCompteDto {
@IsOptional()
@IsString({ message: 'Le champ "username" doit être une chaîne de caractères.' })
username?: string;

/*
@IsOptional()
@IsEmail({}, { message: 'Le champ "email" doit être une adresse email valide.' })
email?: string;
*/

@IsOptional()
@IsString({ message: 'Le champ "password" doit être une chaîne de caractères.' })
password?: string;
}