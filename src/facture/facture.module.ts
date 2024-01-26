import { Module } from '@nestjs/common';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paiement } from 'src/paiement/entities/paiement.entity';
import { Facture } from './entities/facture.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Paiement,Facture])],
  exports: [TypeOrmModule],
  controllers: [FactureController],
  providers: [FactureService],
})
export class FactureModule {}
