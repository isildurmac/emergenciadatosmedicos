import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: any) {
      const mensaje = "El usuario no está autorizado";
      const user = await this.authService.validateUserToken(payload);
      if (user) {
        const { id, name, email, role, ci, ...result } = user;
        return {
          id,
          name,
          email,
          role,
          ci,
        };
      }
      else{
        throw new UnauthorizedException(mensaje);
      }
  }
}
