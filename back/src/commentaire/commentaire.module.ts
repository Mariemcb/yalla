import { Module } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireController } from './commentaire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from 'src/participant/entities/participant.entity';
import { Event } from 'src/event/entities/event.entity';
import { Commentaire } from './entities/commentaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participant,Event,Commentaire])],
  exports: [TypeOrmModule],
  controllers: [CommentaireController],
  providers: [CommentaireService],
})
export class CommentaireModule {}
