import { Controller, Get } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user-repository';

@Controller('user')
export class UserController {
  constructor(private userRepo: UserRepository) {
  }
  @Get()
  async findAll(): Promise<any[]> {
    return this.userRepo.find();
  }
  
}
