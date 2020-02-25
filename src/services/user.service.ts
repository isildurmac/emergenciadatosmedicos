import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from '../models/user.dto'
import { LoginDTO } from '../models/auth.dto'
import { UserRepository } from 'src/repositories/user-repository';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneByUsername(email: string) {
    return this.userRepository.findOneOrFail({ where: { email } });
  }

  async findOneById(id: string) {
    return this.userRepository.findOne(id);
  }

  async findOneByLogin(login: LoginDTO) {
    const user = await this.userRepository.findOne(login.email);
    if(!user) {
      throw new UnauthorizedException("Credenciales inválidas");
    }
    
    if(await bcrypt.compare(login.password, user.password))
    {
      return user;
    }
    else {
      throw new UnauthorizedException("Credenciales inválidas");
    }
  }

  /* async saveOrEditUser(user: CreateEditUser) {
    if (user.id) {
      if (user.password === '') {
        const { name, email, type } = user;
        return this.usersRepository.update(user.id, { name, email, type });
      } else {
        user.password = hashSync(user.password);
        return this.usersRepository.update(user.id, user);
      }
    }
    return this.usersRepository.save(user);
  }*/ 
}
