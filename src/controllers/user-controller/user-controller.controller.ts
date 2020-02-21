import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../../app.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Controller('user-controller')
export class UserControllerController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}
/*
  @Get('api/user/data/:id')
  async getUserData(@Param('id') id: any): Promise<User> {
    console.log('USER ID: ', id);
    return this.userService.findOneById(id);
  }
*/
}
