
import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}

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
