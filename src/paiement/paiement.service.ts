/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paiement } from './entities/paiement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaiementService {

    constructor(
        @InjectRepository(Paiement)
        private readonly paiementRepository: Repository<Paiement>,
      ) {}

      async findAll(): Promise<Paiement[]> {
        return this.paiementRepository.find();
      }
    
      async findOne(id: number): Promise<Paiement> {
        return this.paiementRepository.findOne({where: {idPaiement:id}});
      }
    
      async create(paiementData: Partial<Paiement>): Promise<Paiement> {
        const paiement = this.paiementRepository.create(paiementData);
        return this.paiementRepository.save(paiement);
      }
    
      async update(id: number, paiementData: Partial<Paiement>): Promise<Paiement> {
        await this.paiementRepository.update(id, paiementData);
        return this.paiementRepository.findOne({where: {idPaiement:id}});
      }
    
      async remove(id: number): Promise<void> {
        await this.paiementRepository.delete(id);
      }

    



}