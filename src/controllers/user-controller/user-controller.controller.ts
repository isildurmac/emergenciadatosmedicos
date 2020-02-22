import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AppService } from '../../app.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Controller('user')
export class UserControllerController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get('/:id')
  async getUserData(@Param('id') id: any): Promise<User> {
    console.log('USER ID: ', id);
    return this.userService.findOneById(id);
  }

  @Post('/login')
  async login(userDTO: any): Promise<User> {
    return this.userService.findOneByLogin(userDTO);
  }


}
