import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repositories/user-repository';
import { UserDTO } from 'src/dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneByUsername(userName: string) {
    return this.userRepository.findOneOrFail({ where: { userName } });
  }

   async saveOrEditUser(user: UserDTO) {
    if (user.id) {
      if (user.password === '') {
        const { name, password, ci, userName, email,gender, address } = user;
        return this.userRepository.update(user.id, { name, ci, userName, email,gender, address });
      } else {
        user.password = hashSync(user.password);
        return this.userRepository.update(user.id, user);
      }
    }
    return this.userRepository.save(user);
  } 
}
