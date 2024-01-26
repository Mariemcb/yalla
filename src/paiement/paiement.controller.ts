/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Paiement } from './entities/paiement.entity';
import { PaiementService } from './paiement.service';

@Controller('paiement')
export class PaiementController {

    constructor(
        private readonly paiementService: PaiementService,
      ) {}
      
    @Get()
    findAllPaiements() {
      return this.paiementService.findAll();
    }
  
    @Get(':id')
    findOnePaiement(@Param('id') id: number) {
      return this.paiementService.findOne(id);
    }
  
    @Post()
    createPaiement(@Body() paiementData: Partial<Paiement>){
      return this.paiementService.create(paiementData);
    }
  
    @Put(':id')
    updatePaiement(@Param('id') id: number, @Body() paiementData: Partial<Paiement>) {
      return this.paiementService.update(id, paiementData);
    }
  
    @Delete(':id')
    removePaiement(@Param('id') id: number){
      return this.paiementService.remove(id);
    }
  
}