import { Injectable, NotAcceptableException } from '@nestjs/common';

import { CompteService } from 'src/compte/compte.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private readonly compteService : CompteService){}
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
      const passwordValid = await bcrypt.compare(password, user.password)
      if (!user) {
        throw new NotAcceptableException('could not find the user');
       }
      if (user && passwordValid) {
        return user;
      }
      return null;
    }

}
