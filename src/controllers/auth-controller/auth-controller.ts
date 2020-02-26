import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "../../services/auth.service";
import { LoginDto } from "../../dtos/login.dto";

@Controller('auth')
export class AuthController { 
    constructor(private readonly authService:AuthService) {}

    // @Post('register') public async register( @Body() createUserDto: CreateUserDto, ): Promise<RegistrationStatus> { const result: RegistrationStatus =
    //     await this.authService.register( createUserDto, );
    //         if (!result.success) { throw new HttpException(result.message,
    //     HttpStatus.BAD_REQUEST); }
    //         return result; }

    @Post('login') 
    public async login(@Body() loginDto: LoginDto): Promise<any> { 
        return await this.authService.login(loginDto); 
    }


 }