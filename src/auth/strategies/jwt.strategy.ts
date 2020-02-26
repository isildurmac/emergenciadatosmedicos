// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { Strategy, ExtractJwt} from "passport-jwt";
// import { PassportStrategy } from '@nestjs/passport';
// import { AuthService } from 'src/services/auth.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: 'secretKey',
//     });
//   }

//   async validate(payload: any) {
//       const mensaje = "El usuario no está autorizado";
//       const user = await this.authService.validateUserToken(payload);
//       if (user) {
//         const { id, name, email, role, ci, ...result } = user;
//         return {
//           id,
//           name,
//           email,
//           role,
//           ci,
//         };
//       }
//       else{
//         throw new UnauthorizedException(mensaje);
//       }
//   }
// }

import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SingUpuserDto } from '../dto/signUpUser';
import { AuthService } from '../auth.service';
import { AuthRepository } from "../auth.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { IJwtPayload } from "../jwt.payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
  constructor(@InjectRepository(AuthRepository)
              private readonly authRepository: AuthRepository,
              private readonly authService: AuthService) { 
    super({ 
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      secretOrKey: 'secretKey', 
    }); 
  }

  async validate(payload: IJwtPayload) { 
    
    const { username } = payload;
    const user = await this.authRepository.findOne({
      where: { username, status:'ACTIVE' }
    });
    
    if (!user) { 
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED); 
    } 

    return payload;

    // const user = await this.authService.validateUser(payload); 
    // if (!user) { 
    //   throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED); 
    // } 
    // else{
    //   const { id, name, email, ci, gender, ...result } = user;
    //     return user;
    // }
  }
}
