import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { Commentaire } from './entities/commentaire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentaireService {
  constructor(
    @InjectRepository(Commentaire)
    private readonly commentaireRepository: Repository<Commentaire>,
  ) {}

  async createCommentaire(createCommentaireDto: CreateCommentaireDto): Promise<Commentaire> {
    const commentaire = this.commentaireRepository.create(createCommentaireDto);
    return this.commentaireRepository.save(commentaire);
  }

  async findAll(): Promise<Commentaire[]> {
    return this.commentaireRepository.find();
  }

  async findOne(id: number): Promise<Commentaire> {
    const commentaire = await this.commentaireRepository.findOne({where:{idComment:id}});
    if (!commentaire) {
      throw new NotFoundException("Commentaire with ID ${id} not found");
    }
    return commentaire;
  }

  async updateCommentaire(id: number, updateCommentaireDto: UpdateCommentaireDto): Promise<Commentaire> {
    const existingCommentaire = await this.findOne(id);
    const updatedCommentaire = this.commentaireRepository.merge(existingCommentaire, updateCommentaireDto);
    return this.commentaireRepository.save(updatedCommentaire);
  }

  async removeCommentaire(id: number): Promise<void> {
    await this.findOne(id);
    await this.commentaireRepository.delete(id);
  }
}