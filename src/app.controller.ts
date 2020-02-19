import { Controller, Get, Res, UseGuards, Post, Next, Req, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { AuthService } from './services/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { NextFunction, Response, Request as RequestExp } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get('*')
  getHello(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Req() req: RequestExp,
  ) {

    if (req.path.includes('api')) {
      console.log("NEXT ROUTING..........");
      return next();
    }
    // return this.appService.getHello();
    res.sendFile(join(__dirname, '..', 'client/client/build/index.html'));
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post('api/auth/login')
  async login(@Body() user: any) {
    console.log('USER: ', user);
    return this.authService.login(user);
  }
}
