import { Injectable } from '@nestjs/common';

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
}
