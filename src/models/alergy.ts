import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';
import { User } from './user';

@Entity('alergies')
export class Alergy {
  @PrimaryGeneratedColumn()
  @IsNumber() id: number;
  @Column({ name: 'name', length: 55 })
  @IsString() name: string;

  @OneToMany(type => User, user => user.alergies)
  users: User[];
}
