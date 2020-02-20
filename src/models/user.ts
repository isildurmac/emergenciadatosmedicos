import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, BeforeInsert, ManyToOne } from 'typeorm';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';
import { Role } from './role';
import { hashSync } from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @IsNumber() @IsOptional() readonly id: number;
  @Column({ name: 'name', length: 191 })
  @IsString() readonly name: string;
  @Column({ name: 'password', length: 191 })
  @IsString() readonly password: string;
  @Column({ name: 'email', length: 191 })
  @IsString() readonly email: string;
  @Column({ name: 'ci', length: 11 })
  @IsString() readonly ci: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @IsDate() readonly createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @IsDate() readonly updatedAt: Timestamp;

  @ManyToOne(type => Role, role => role.users )
  role: Role;

  @BeforeInsert()
  encryptPassword() {
    this.password = hashSync(this.password);
  }

}
