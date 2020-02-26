import { UserService } from "./user.service";
import { LoginDto } from "../dtos/login.dto";
import { User } from "../models/user";
import { JwtPayload } from "src/controllers/auth-controller/jwt.payload";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/repositories/user-repository";
import { sign } from "jsonwebtoken";

@Injectable()
export class AuthService {
    constructor(
                 private readonly userService: UserService,
               ) {}

    // async register(userDto: UserDto):
    // Promise<RegistrationStatus> { let status: RegistrationStatus = { success: true, message: 'user registered', };
    //     try { await this.usersService.create(userDto); } catch (err) { status = { success: false, message: err, }; }
    //     return status; }

    async signPayload(payload: any) {
       return sign(payload, 'secretKey', { expiresIn: '3600s'});
    }

    async login(loginDto: LoginDto): Promise<void> { // find user in db 
        const user = await this.userService.findByLogin(loginDto);   
        // generate and sign token 
        const token = this._createToken(user);
        return { email: user.email, ...token, }; 
    }

    private _createToken({ email }: User): any { 
        const user: JwtPayload = { email }; 
        const accessToken =  sign(user, 'secretKey', { expiresIn: '3600s' }); 
        return accessToken; 
    }

    async validateUser(payload: JwtPayload): Promise<User> { 
        const user = await
        this.userService.findByPayload(payload); 
        if (!user) { 
            throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED); 
        } return user; 
    }
}