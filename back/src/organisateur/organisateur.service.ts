import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
import { organisateur } from './entities/organisateur.entity';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';

@Injectable()
export class OrganisateurService {
  constructor(
    @InjectRepository(organisateur)
    private readonly organisateursRepository: Repository<organisateur>,
  ) {}

  async findAll(): Promise<organisateur[]> {
    return this.organisateursRepository.find();
  }

  async findOne(id: number): Promise<organisateur> {
    return this.organisateursRepository.findOne({ where: { idOrg: id } });
  }

  async create(createOrganisateurDto: CreateOrganisateurDto): Promise<organisateur> {
    const { nom, prenom, adresse, dn } = createOrganisateurDto;
    
    // Vous pouvez ajouter ici des validations supplémentaires si nécessaire

    const organisateur = this.organisateursRepository.create({
      nom,
      prenom,
      adresse,
      dn,
    });

    return this.organisateursRepository.save(organisateur);
  }

  async update(id: number, updateOrganisateurDto: UpdateOrganisateurDto): Promise<organisateur> {
    const existingOrganisateur = await this.organisateursRepository.findOne({where:{idOrg: id}});

    if (!existingOrganisateur) {
      throw new BadRequestException('Organisateur not found');
    }


    const updatedOrganisateur = this.organisateursRepository.merge(existingOrganisateur, updateOrganisateurDto);
    
    return this.organisateursRepository.save(updatedOrganisateur);
  }

  async remove(id: number): Promise<void> {
    await this.organisateursRepository.delete(id);
  }

  async findByName(nom: string): Promise<organisateur[]> {
    return this.organisateursRepository.find({ where: { nom } });
  }
}