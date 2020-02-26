import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/user';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {

        // async findAll() {
        // const users: User[] = await this.createQueryBuilder('user')
        //     .getMany();
        // return users;
    //}
}