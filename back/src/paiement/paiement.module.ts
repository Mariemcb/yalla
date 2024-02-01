import { Module } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { PaiementController } from './paiement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paiement } from './entities/paiement.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Facture } from 'src/facture/entities/facture.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Paiement,Reservation,Facture])],
  exports: [TypeOrmModule],
  controllers: [PaiementController],
  providers: [PaiementService],
})
export class PaiementModule {}
