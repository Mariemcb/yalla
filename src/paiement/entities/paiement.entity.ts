
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Facture } from "src/facture/entities/facture.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";

@Entity('paiement')
export class Paiement {
    @PrimaryGeneratedColumn()
    idPaiement : number;
    @Column()
    montant : string;
    @Column()
    date : Date;
    @OneToOne(() => Facture, facture => facture.paiement)
    @JoinColumn()
    facture: Facture;
    @OneToOne(() => Reservation, reservation => reservation.paiement)
    reservation: Reservation;

}
