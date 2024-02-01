
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paiement } from "src/paiement/entities/paiement.entity";

@Entity('facture')
export class Facture {
    @PrimaryGeneratedColumn()
    idFacture : number;
    @OneToOne(() => Paiement, paiement => paiement.facture)
    paiement: Paiement;

}
