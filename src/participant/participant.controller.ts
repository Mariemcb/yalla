import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.create(createParticipantDto);
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }

  @Get(':id')
  async getParticipant(@Param('id') id: number) {
    try {
      const participant = await this.participantService.findOne(id);
      return { success: true, participant };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipantDto: UpdateParticipantDto) {
    return this.participantService.update(+id, updateParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantService.remove(+id);
  }

  @Get('/username/:username')
  async findOneByUsername(@Param('username') username: string) {
    try {
      const participant = await this.participantService.findOneByUsername(username);
      return true;
    } catch (error) {
      return false;
    }
  }


  @Get(':username/id')
  async getParticipantIdByUsername(@Param('username') username: string): Promise<number> {
    try {
      const participantId = await this.participantService.getParticipantIdByUsername(username);
      return participantId;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  
  

}
