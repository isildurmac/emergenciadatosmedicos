import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../services/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy'
import { AuthController } from './auth.controller';
import { UserRepository } from '../repositories/user-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { RoleRepository } from 'src/repositories/role-repository';
import { AuthRepository } from './auth.repository';

@Module({ 
  imports: [
    TypeOrmModule.forFeature([AuthRepository]), 
  PassportModule.register({
    defaultStrategy: 'jwt'
  }),
  JwtModule.registerAsync({
    useFactory() {
       return {
         secret: 'secretKey',
         signOptions: {
           expiresIn: 604800,
         }
       }
    }
  })
  ], 
      controllers: [AuthController], 
      providers: [JwtStrategy, AuthService],
      exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}

