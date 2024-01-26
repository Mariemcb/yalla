
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Commentaire } from 'src/commentaire/entities/commentaire.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  idParticipant: number;


  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  adresse: string;

  @Column({ type: 'date' })
  DN: Date;

  @Column()
  numTel: String;

  
  @OneToMany(() => Reservation, reservation => reservation.participant)
  reservations: Reservation[];

  @OneToMany(() => Commentaire, commentaire => commentaire.participant)
  commentaires: Commentaire[];
}