import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from '../dtos/login.dto';
import { UserRepository } from '../repositories/user-repository';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor( 
             @InjectRepository(User) 
             private readonly userRepository: Repository<User>, ) {}

  async findOne(options?: object): Promise<User> { 
    const user = await this.userRepository.findOne(options); 
    return user; 
  }

  async findByLogin({ email, password }: LoginDto):
        Promise<User> { const user = await this.userRepository.findOne({ where: { email } });
        if (!user) { 
          throw new HttpException('El usuario no existe', HttpStatus.UNAUTHORIZED); 
        }
        // compare passwords 
        const areEqual = await bcrypt.compare(user.password, password);
        if (!areEqual) { 
          throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED); 
        }
        return user 
  }
   
  async findByPayload({ email }: any): Promise<User> { 
    return await this.findOne({ where:{ email } }); }

  async findAll() {
    return await this.userRepository.find();
  }
  
  async findOneById(id: string) {
    return this.userRepository.findOne(id);
  }
}
