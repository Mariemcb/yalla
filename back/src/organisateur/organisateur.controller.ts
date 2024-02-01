import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrganisateurService } from './organisateur.service';
import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
import { organisateur } from './entities/organisateur.entity';

@Controller('organisateur')
export class OrganisateurController {
  constructor(private readonly organisateurService: OrganisateurService) {}

  @Get()
  findAll(): Promise<organisateur[]> {
    return this.organisateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<organisateur> {
    return this.organisateurService.findOne(id);
  }

  @Post()
  createOrganisateur(@Body() createOrganisateurDto: CreateOrganisateurDto): Promise<organisateur> {
    return this.organisateurService.create(createOrganisateurDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrganisateurDto: UpdateOrganisateurDto): Promise<organisateur> {
    return this.organisateurService.update(id, updateOrganisateurDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.organisateurService.remove(id);
  }

  @Get('name/:nom')
  findByName(@Param('nom') nom: string): Promise<organisateur[]> {
    return this.organisateurService.findByName(nom);
  }
}