import { Controller, Post, Body, UsePipes, UseGuards, Get } from "@nestjs/common";
import { AuthService } from "../../services/auth.service";
import { LoginDto } from "../../dtos/login.dto";
import { ValidationTypes } from "class-validator";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "../../services/user.service";

@Controller('auth')
export class AuthController { 
    constructor(
                private readonly userService: UserService,
                private readonly authService:AuthService) {}

    // @Post('register') public async register( @Body() createUserDto: CreateUserDto, ): Promise<RegistrationStatus> { const result: RegistrationStatus =
    //     await this.authService.register( createUserDto, );
    //         if (!result.success) { throw new HttpException(result.message,
    //     HttpStatus.BAD_REQUEST); }
    //         return result; }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth() {
        return { auth: 'works' }
    }

    @Post('login') 
    @UsePipes(ValidationTypes)
    public async login(@Body() loginDto: LoginDto){ 
      return await this.authService.login(loginDto); 
    }


 }