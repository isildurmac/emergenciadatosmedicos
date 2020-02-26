import { Controller, Post, Body, UseGuards, Req, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create_user';
import { UserDto } from './dto/user.dto';
import { UserService } from 'src/services/user.service';
import { LoginUserDto } from './dto/auth';
import { SingUpuserDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
        ) {}

    @Post('/register')
    @UsePipes(ValidationPipe)
    async singUp(@Body() signUpDto: SingUpuserDto): Promise<void> {
       return this.authService.singUp(signUpDto);
    }

    @Post('/login')
    @UsePipes(ValidationPipe)
    async signIn(@Body() loginUserDto: LoginUserDto) {
       return this.authService.signIn(loginUserDto);
    }
    
    // @Post('register') 
    // public async register( @Body() createUserDto: CreateUserDto, ): 
    // Promise<RegistrationStatus> { const result: RegistrationStatus =
    //     await this.authService.register( createUserDto, );
    //         if (!result.success) { 
    //             throw new HttpException(result.message, HttpStatus.BAD_REQUEST); 
    //     }
    // return result; }

    // @Post() 
    // @UseGuards(AuthGuard()) 
    // async create( @Body() createTodoDto: CreateUserDto, @Req() req: any, ): Promise<UserDto> { 
    //     const user = <UserDto>req.user;
    //     return await this.userService.create(user,
    // createTodoDto); }
    
    // @Get()
    // @UseGuards(AuthGuard('jwt'))
    // tempAuth(){
    //     return { auth: 'works' };
    // }

    // @Post('login')
    // async login(@Body() logged: LoginUserDto) {
    //     const user = await this.userService.findByLogin(logged);
    //     const payload = {
    //         email : logged.email,
    //         password: logged.password
    //     }

    //     const token = await this.authService.login(payload);
    //     return { user, token };
    // }
}
