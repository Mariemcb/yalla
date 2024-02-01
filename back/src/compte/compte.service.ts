// compte.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compte } from './entities/compte.entity';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompteService {
createCompte(username: any, password: any) {
  throw new Error('Method not implemented.');
}
constructor(
@InjectRepository(Compte)
private compteRepository: Repository<Compte>,
) {}

async addCompte(compteDto: CreateCompteDto ): Promise<Compte> {

const { username, password } = compteDto;
// Generate a salt
const saltRounds = 10;
const salt =  bcrypt.genSaltSync(saltRounds);

// Hash the password with the salt
const hashedPassword = bcrypt.hashSync(password.trim(), salt);


const newCompte = this.compteRepository.create({
      username,
      password: hashedPassword,
    });
return await this.compteRepository.save(newCompte);
}


async updateCompte(id: number, compteDto: UpdateCompteDto):
Promise<Compte> {
const existingCompte = await this.compteRepository.preload({
idCompte:id,
...Compte,
});
if (!existingCompte) {
throw new NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
}
// Merge les modifications avec le compte existant
const updatedCompte = this.compteRepository.merge(existingCompte, 
compteDto);
return await this.compteRepository.save(updatedCompte);
}

async getCompteById(id: number): Promise<Compte> {
const compte = await this.compteRepository.findOne({where:{idCompte: id}});
if (!compte) {
throw new NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
}
return compte;
}


async getAllComptes(): Promise<Compte[]> {
return await this.compteRepository.find();
}


async deleteCompte(id: number): Promise<void> {
const compte = await this.compteRepository.preload({
idCompte: id,
});
if (!compte) {
throw new NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
}
await this.compteRepository.remove(compte);
}

async findByUsername(username: string): Promise<Compte | undefined> {
  return this.compteRepository.findOne({ where:{username : username} });
}

}