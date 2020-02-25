import { Injectable, HttpException, HttpStatus, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SingUpuserDto } from './dto/signUpUser';
import { LoginUserDto } from '../auth/dto/auth';
import { UserService } from 'src/services/user.service';
import { IJwtPayload } from './jwt.payload.interface';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user';
import { compare } from 'bcryptjs'; 

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthRepository)
                private readonly authRepository: AuthRepository,
                private readonly jwtService: JwtService
               ){}

    async singUp(singupUserDto: SingUpuserDto): Promise<void> {
       const { email } = singupUserDto;
       const userExists = await this.authRepository.findOne({
           where: { email }
       });

       if(userExists) {
           throw new ConflictException('Este email ya existe');
       }

       return this.authRepository.signup(singupUserDto);
    }

    async signIn(signInDto: LoginUserDto): Promise<{token: string}> {
        const { email, password } = signInDto;
        const user: User = await this.authRepository.findOne({
            where: { email }
        });

        if(!user) {
            throw new NotFoundException('El usuario no existe');
        }

        const isMatch = await compare(password, user.password);

        if(!isMatch) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const payload: IJwtPayload = {
            id: user.id,
            username: user.name,
            email: user.email,
        }

        const token = await this.jwtService.sign(payload);
        return { token };
    }
    // async register(userDto: CreateUserDto):Promise<RegistrationStatus> { 
    //     let status: RegistrationStatus = { 
    //         success: true, 
    //         message: 'user registered', 
    //     };
    //     try { 
    //         await this.usersService.create(userDto); 
    //     } catch (err) { 
    //         status = { 
    //             success: false, 
    //             message: err, 
    //         }; 
    //     }
    //   return status; 
    // }

    // async create(userDto: CreateUserDto): Promise<UserDto> { 
    //     const { username, password, email } = userDto;
    //   // check if the user exists in the db 
    //   const userInDb = await this.userRepo.findOne({where: { email } }); 
    //   if (userInDb) { 
    //       throw new HttpException('User already exists', HttpStatus.BAD_REQUEST); 
    //     }
    //   const user: UserEntity = await this.userRepo.create({ username, password, email, });
    //   await this.userRepo.save(user);
    //   return toUserDto(user); 
    // }

    // async login(loginUserDto: LoginUserDto): Promise<any> { 
    //     // find user in db 
    //     const user = await this.userService.findByLogin(loginUserDto);
    //     // generate and sign token 
    //     const token = this._createToken(loginUserDto);
    //     return { email: loginUserDto.email, ...token }; 
    // }
    // private _createToken({ email, password }: LoginUserDto): any { 
    //     const user: IJwtPayload = { email, password }; 
    //     const accessToken = this.jwtService.sign(user); 
    //     return { expiresIn: process.env.EXPIRESIN, accessToken }; 
    // }

    // async validateUser(payload: IJwtPayload): Promise<any> { 
    //     const user = await this.userService.findByPayload(payload.email); 
    //     if (!user) { 
    //         throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED); 
    //     } 
    //     return user; 
    // }

}
