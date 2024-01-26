import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CompteModule } from 'src/compte/compte.module';
import { CompteService } from 'src/compte/compte.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.auth';
import { AuthController } from './auth.controller';



@Module({
  providers: [AuthService,LocalStrategy,CompteService],
  imports :[CompteModule,PassportModule.register({ defaultStrategy: 'local' }),
  ],
  exports: [AuthService],
  controllers: [AuthController],

})
export class AuthModule {}
