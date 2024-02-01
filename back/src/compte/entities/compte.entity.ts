/* eslint-disable prettier/prettier */

import { organisateur } from "src/organisateur/entities/organisateur.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('compte')
export class Compte {
    @PrimaryGeneratedColumn()
    idCompte : number;
    @Column({length: 20 , unique:true})
    username : string;
    /*@Column({unique:true})
    email : string;*/
    @Column({length: 50})
    password : string;

    @OneToOne(() => organisateur, organisateur => organisateur.compte)
    organisateur: organisateur;


}
