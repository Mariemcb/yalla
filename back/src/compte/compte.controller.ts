// compte.controller.ts
import { Controller, Post, Body, Get, Param, Patch, Delete } from
'@nestjs/common';
import { CompteService } from './compte.service';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import { Compte } from './entities/compte.entity';
@Controller('compte')
export class CompteController {

constructor(private readonly compteService: CompteService) {}

@Post('/register')
async addCompte(@Body() compteDto: CreateCompteDto): Promise<Compte> {
return await this.compteService.addCompte(compteDto);
}

@Patch('/update/:id')
async updateCompte(@Param('id') id: number, @Body() compteDto:
UpdateCompteDto): Promise<Compte> {
return await this.compteService.updateCompte(id, compteDto);
}

@Get('/:id')
async getCompteById(@Param('id') id: number): Promise<Compte> {
return await this.compteService.getCompteById(id);
}

@Get()
async getAllComptes(): Promise<Compte[]> {
  try {
    return await this.compteService.getAllComptes();
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for detailed information
  }
}


@Delete('/delete/:id')
async deleteCompte(@Param('id') id: number): Promise<void> {
return await this.compteService.deleteCompte(id);
}

@Get('username/:username')
  getCompteByUsername(@Param('username') username: string): Promise<Compte> {
    return this.compteService.findByUsername(username);
  }
  
}