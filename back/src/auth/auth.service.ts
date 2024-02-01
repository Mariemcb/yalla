import { Injectable, NotAcceptableException,Logger } from '@nestjs/common';
import { CompteService } from 'src/compte/compte.service';
import * as bcrypt from 'bcrypt' ; 
import { JwtService } from '@nestjs/jwt';
import { Compte } from 'src/compte/entities/compte.entity';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
    constructor(private readonly compteService : CompteService,
      private readonly jwtService: JwtService){}
/*
    async login(user: any) {
      const payload = { username: user.username, sub: user.idCompte };
      return {
          access_token: this.jwtService.sign(payload),
      };
    }
*/
    async validateUser(username: string, password: string): Promise<any> {
      
      const user = await this.compteService.findByUsername(username);
      if (!user) return null;
      if (!user) {
        throw new NotAcceptableException('could not find the user');
       }

       console.log('Entered password:', password);
        console.log('Stored hashed password:', user.password);

       if (! bcrypt.compareSync(password, String(user.password).trim())) {
           throw new NotAcceptableException('Invalid password haha');
       }

       return user;
    }




    async login(user: Compte):Promise <any> {
      const payload = {
        username: user.username, sub: user.idCompte 
      } ;
      const secretKey = process.env.jwtSecret;
      if (!secretKey) {
        throw new Error('JWT secret key is not defined.');
      }

      return {
        access_token: this.jwtService.sign(payload,  { secret: secretKey }),
      };

    }


    async verify(token:string): Promise<any> {
      const decoded= this.jwtService.verify(token , {
        secret: process.env.jwtSecret  
      })

      const user = await this.compteService.findByUsername(decoded.username);

      if (!user) {
        throw new Error('Unable the user from decoded token');
      }

      return user;

    
    }

}
