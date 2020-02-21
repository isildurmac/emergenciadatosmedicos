import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repositories/user-repository';

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
    return this.userRepository.findById(id);
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
  } */
}
