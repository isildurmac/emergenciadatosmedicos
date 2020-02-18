import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res) {
    // return this.appService.getHello();
    res.sendFile(join(__dirname, '..', 'client/client/build/index.html'));
  }
}
