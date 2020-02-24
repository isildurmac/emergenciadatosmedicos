import { Controller, Get, Param,Post,Body,Put,Delete } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user-repository';
import { UserDTO } from 'src/dtos/user.dto';
import {User} from 'src/models/user';

@Controller('user')
export class UserController {
  constructor(private userRepo: UserRepository) {
  }
  @Get()
  async findAll(): Promise<any[]> {
    return this.userRepo.find();
  }
  @Get(':id')
  findOne(@Param() params): Promise<any> {
    console.log(params.id);
    return this.userRepo.findOne(params.id);
  }
  @Post()
  create(@Body() user: User) {
    const myUser = Object.assign(new User(), user);
    return this.userRepo.save(myUser);
  }
  @Put(':id')  
  update(@Param('id') id: string, @Body() userDTO: UserDTO) {
    return this.userRepo.update(id,userDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRepo.delete(id);
  }

}
