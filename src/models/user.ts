import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, BeforeInsert, ManyToOne } from 'typeorm';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';
import { Role } from './role';
import { hashSync } from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @IsNumber() @IsOptional() readonly id: number;
  @Column({ name: 'name', length: 191 })
  @IsString() name: string;
  @Column({ name: 'userName', length: 50 })
  @IsString() userName: string;
  @Column({ name: 'gender', length: 50 })
  @IsString() gender: string;
  @Column({ name: 'address', length: 150 })
  @IsString() address: string;
  @Column({ name: 'password', length: 191 })
  @IsString() password: string;
  @Column({ name: 'email', length: 191 })
  @IsString() email: string;
  @Column({ name: 'ci', length: 11 })
  @IsString() ci: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @IsDate() createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @IsDate() updatedAt: Timestamp;

  @ManyToOne(type => Role, role => role.users )
  role: Role;

  @BeforeInsert()
  encryptPassword() {
    this.password = hashSync(this.password);
  }

}
