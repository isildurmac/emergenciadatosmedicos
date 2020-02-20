import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';
import { User } from './user';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
  @IsNumber() id: number;
  @Column({ name: 'name', length: 55 })
  @IsString() name: string;

  @OneToMany(type => User, user => user.contacts)
  users: User[];
}
