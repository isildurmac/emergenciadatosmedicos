import { Body, Controller, Post, Get, UseGuards }  from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { LoginDTO } from '../models/auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
        ) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth(){
        return { auth: 'works' };
    }

    @Post('login')
    async login(@Body() logged: LoginDTO) {
        const user = await this.userService.findOneByLogin(logged);
        const payload = {
            email : logged.email
        }

        const token = await this.authService.signPayLoad(payload);
        return { user, token };
    }
}