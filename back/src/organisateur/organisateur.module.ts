import { Module } from '@nestjs/common';
import { OrganisateurService } from './organisateur.service';
import { OrganisateurController } from './organisateur.controller';
import { organisateur } from './entities/organisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte } from 'src/compte/entities/compte.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Event,organisateur,Compte])],
  exports: [TypeOrmModule],
  controllers: [OrganisateurController],
  providers: [OrganisateurService],
})
export class OrganisateurModule {}
