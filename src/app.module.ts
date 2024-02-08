import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte } from './compte/entities/compte.entity';
import { Facture } from './facture/entities/facture.entity';
import { Paiement } from './paiement/entities/paiement.entity';
import { Participant } from './participant/entities/participant.entity';
import { Reservation } from './reservation/entities/reservation.entity';
import { Notification } from './notification/entities/notification.entity';
import { ConfigModule } from '@nestjs/config';
import { ParticipantController } from './participant/participant.controller';
import { ParticipantService } from './participant/participant.service';
import { ParticipantModule } from './participant/participant.module';
import { ReservationModule } from './reservation/reservation.module';
import { EventModule } from './event/event.module';
import { PaiementModule } from './paiement/paiement.module';
import { CompteModule } from './compte/compte.module';
import { FactureModule } from './facture/facture.module';
import { NotificationModule } from './notification/notification.module';
import { OrganisateurModule } from './organisateur/organisateur.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,}),
    TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host:  process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password:  process.env.DB_PASSWORD,
      database:  process.env.DB_DATABASE,
      autoLoadEntities:true,
      synchronize: true,
      logging: true,
    }
    ),
    AuthModule,ParticipantModule, ReservationModule, EventModule, PaiementModule, CompteModule, FactureModule, NotificationModule, OrganisateurModule, CommentaireModule
    ],
    
  controllers: [AppController, ParticipantController],
  providers: [AppService, ParticipantService,AuthService,JwtService],
})
export class AppModule {}
