import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, BeforeInsert, ManyToOne } from 'typeorm';
import { Role } from './role';
import { hashSync } from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', length: 191 })
  name: string;
  @Column({ name: 'password', length: 191 })
  password: string;
  @Column({ name: 'email', length: 191 })
  email: string;
  @Column({ name: 'ci', length: 11 })
  ci: string;
  @Column({ name: 'userName', length: 50 })
  userName: string;
  @Column({ name: 'gender', length: 50 })
  gender: string;
  @Column({ name: 'address', length: 150 })
  address: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Timestamp;

  @ManyToOne(type => Role, role => role.users )
  role: Role;

  @BeforeInsert()
  encryptPassword() {
    this.password = hashSync(this.password);
  }

}
