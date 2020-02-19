import { Role } from 'src/models/role';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {

}
