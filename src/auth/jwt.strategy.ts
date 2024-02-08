import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";
import { CompteService } from "src/compte/compte.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    CompteService: any;
    constructor(private readonly usersService: CompteService ){

    super ({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.jwtSecret
    })

    }

    async validate( validationPayload: {username:String, sub: string}): Promise <any> {
        return this.CompteService.findByUsername(validationPayload.username);

    }
}