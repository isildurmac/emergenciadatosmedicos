import { Repository, EntityRepository } from "typeorm";
import { User } from "../models/user";
import { SingUpuserDto } from "./dto";
import { genSalt, hash } from 'bcryptjs'

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
   async signup( userDto: SingUpuserDto) {
       const { username, email, password } = userDto;
       const user = new User();
       user.name = username;
       user.email = email;

       //Aquí va la implementación de los roles y los detalles del usuario

       const salt = await genSalt(10);
       user.password = await new hash(password, salt);
   }
} 