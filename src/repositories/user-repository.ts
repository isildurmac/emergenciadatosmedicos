import { EntityRepository, Repository } from "typeorm";
import { User } from "src/models/user";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async findAll() {
        const users: User[] = await this.createQueryBuilder('user')
            .getMany();

        return users;

    }
}
