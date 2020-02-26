import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtPayload } from './jwt.payload';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(
        private readonly authService: AuthService) { 
        super({ jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: 'secretKey', 
             }); 
    }
  
    async validate(payload: JwtPayload): Promise<User> { const user = await
        this.authService.validateUser(payload); if (!user) { 
            throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED); 
        } 
        return user; 
    }
}