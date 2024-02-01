import { Controller, Post,Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Request } from 'express';
import { Compte } from 'src/compte/entities/compte.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }


    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req:Request){
    return await this.authService.login(req.user as Compte);
    }
}