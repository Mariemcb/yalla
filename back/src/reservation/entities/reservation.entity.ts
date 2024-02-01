// Importez les modules nécessaires de TypeORM
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Participant } from "src/participant/entities/participant.entity";
import { Paiement } from "src/paiement/entities/paiement.entity";
import { Event } from "src/event/entities/event.entity";

// Enumération pour représenter les états possibles d'une réservation
export enum etat {
  PENDING = "en attente",
  CONFIRMED = "confirmée",
  CANCELED = "declined",
}


@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  idReservation: number;
  
  @ManyToOne(() => Participant, participant => participant.reservations)
  participant: Participant; // Relation avec Participant 

  @OneToOne(() => Paiement, paiement => paiement.reservation)
  paiement: Paiement;
  
  @ManyToOne(() => Event, event => event.reservations)
  event: Event;

  @Column({ type: "timestamp" })
  date: Date;

  @Column({
    type: "enum",
    enum: etat,
  })
  état: etat;

  // Date de création de la réservation
  @CreateDateColumn()
  createdAt: Date;

  // Date de mise à jour de la réservation
  @UpdateDateColumn()
  updatedAt: Date;

}

