/* eslint-disable prettier/prettier */

import { Compte } from "src/compte/entities/compte.entity";
import { Event } from "src/event/entities/event.entity";
import { Column, Entity, PrimaryGeneratedColumn, Check, OneToOne, OneToMany } from "typeorm";

@Entity('organisateur')
export class organisateur {
    @PrimaryGeneratedColumn()
    idOrg : number;
    @Column({ name: 'username' })
    username: string;
    @Column({ name: 'last_name' })
    nom : string;
    @Column({ name: 'first_name' })
    prenom : string;
    @Column({ name: 'address' })
    adresse : string;
    @Column({ name: 'date_of_birth' })
    dn : string;

    @OneToOne(() => Compte, compte => compte.organisateur)
    compte: Compte;
    
    @OneToMany(() => Event, (event) => event.organisateur)
    events: Event[];



}
