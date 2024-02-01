/* eslint-disable prettier/prettier */

import { Commentaire } from "src/commentaire/entities/commentaire.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { OneToOne, JoinColumn, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";


export enum Categories {
    Concert = 'Concert',
    Festival = 'Festival',
    Afterwork = 'Afterwork',
    Camping = 'Camping',
    Randonnee = 'Randonnée',
    Sport = 'Sport',
    BienEtre = 'Bien être',
    Food = 'Food',
  }
@Entity('event')
export class Event {
    @PrimaryGeneratedColumn()
    idEvent : number;
    @Column({ name: 'Titre' })
    titre : string;
    @Column({ name: 'description' })
    description : string; 
    @Column({ name: 'date' })
    date : Date;
    @Column({ name: 'capacite' })
    capacite : number;
    @Column({ name: 'Heure_Debut' })
    heureDebut : string;
    @Column({ name: 'Heure_Fin' })
    heureFin : string;
    @Column({ name: 'categorie' })
    categorie: Categories ;
    @Column({ name: 'numberofReservations', default: 0  })
    numberofReservations: number; 


    @Column({ name: 'location' })
    location: String;


    @Column({ name: 'prix' })
    prix: string ;

    
  @OneToMany(() => Reservation, reservation => reservation.event)
  reservations: Reservation[];

  @OneToMany(() => Commentaire, commentaire => commentaire.event)
  commentaires: Commentaire[];

    
}
