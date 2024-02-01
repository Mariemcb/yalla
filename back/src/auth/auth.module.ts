import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CompteModule } from 'src/compte/compte.module';
import { CompteService } from 'src/compte/compte.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.auth';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';



@Module({
  providers: [AuthService,LocalStrategy,JwtStrategy,JwtService],
  imports :[CompteModule,PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: process.env.jwtSecret,
    signOptions:{ expiresIn: '3600s'}
  })
  ],
  exports: [AuthService],
  controllers: [AuthController],

})
export class AuthModule {}
