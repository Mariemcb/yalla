import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participant } from './entities/participant.entity';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>,
  ) {}

  async create(createParticipantDto: CreateParticipantDto) {
    // Create a new participant entity based on the DTO
    const participant = this.participantRepository.create(createParticipantDto);

    // Save the newly created participant entity to the database
    return await this.participantRepository.save(participant);
}

  async findAll() {
    await this.participantRepository.find();
  }

  
  async findOne(id: number) {
   const participant = await this.participantRepository.findOne({ where: { idParticipant: id } });
  
    if (!participant) {
      throw new NotFoundException('Participant not found');
    }
    return participant;
  }

  
  async update(id: number, updateParticipantDto: UpdateParticipantDto){
    await this.participantRepository.update(id, updateParticipantDto);
  }

  async remove(id: number) {
    const participant = await this.findOne(id);
    await this.participantRepository.remove(participant);
  }
}
