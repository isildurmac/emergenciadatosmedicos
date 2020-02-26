import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';
import { Role } from './role';
import { hashSync } from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @IsNumber() @IsOptional() readonly id: number;
  @Column({ name: 'name', length: 191 })
  @IsString() name: string;
  @Column({ name: 'password', length: 191 })
  @IsString() password: string;
  @Column({ name: 'email', length: 191 })
  @IsString() email: string;
  @Column({ name: 'ci', length: 11 })
  @IsString() ci: string;
  @CreateDateColumn({ name: 'created_At', type: 'timestamp' })
  @IsDate() createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_At', type: 'timestamp' })
  @IsDate() updatedAt: Timestamp;
  @JoinColumn({name: 'role_id'})
  rol: Role

  @ManyToOne(type => Role, role => role.users )
  role: Role;

  @BeforeInsert()
  encryptPassword() {
    this.password = hashSync(this.password);
  }

}
