import { Participant } from "src/participant/entities/participant.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "src/event/entities/event.entity";

@Entity('commentaire')
export class Commentaire {
  @PrimaryGeneratedColumn()
  idComment: number;

  @Column({ name: 'contenu' })
  contenu: string;

  @ManyToOne(() => Participant, participant => participant.commentaires)
  participant: Participant;  

  @ManyToOne(() => Event, event => event.commentaires)
  event: Event;

}