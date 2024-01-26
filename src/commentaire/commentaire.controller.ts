import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { Commentaire } from './entities/commentaire.entity';

@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Post()
  create(@Body() createCommentaireDto: CreateCommentaireDto): Promise<Commentaire> {
    return this.commentaireService.createCommentaire(createCommentaireDto);
  }

  @Get()
  findAll(): Promise<Commentaire[]> {
    return this.commentaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Commentaire> {
    return this.commentaireService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCommentaireDto: UpdateCommentaireDto): Promise<Commentaire> {
    return this.commentaireService.updateCommentaire(id, updateCommentaireDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.commentaireService.removeCommentaire(id);
  }
}