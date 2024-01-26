/* eslint-disable prettier/prettier */

import { Compte } from "src/compte/entities/compte.entity";
import { Column, Entity, PrimaryGeneratedColumn, Check, OneToOne } from "typeorm";

@Entity('organisateur')
export class organisateur {
    @PrimaryGeneratedColumn()
    idOrg : number;
    @Column({ name: 'last_name' })
    nom : string;
    @Column({ name: 'first_name' })
    prenom : string;
    @Column({ name: 'address' })
    adresse : string;
    @Column({ name: 'date_of_birth' })
    @Check('date_of_birth <= NOW()')
    dn : Date;
    @Column({ name: 'phone_number' })
    @Check('phone_number LIKE \'+216%\' AND LENGTH(phone_number) = 12')
    numtlf: string;

    @OneToOne(() => Compte, compte => compte.organisateur)
    compte: Compte;
    



}
