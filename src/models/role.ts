import { Entity, PrimaryGeneratedColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, Timestamp, JoinTable } from 'typeorm';
import { User } from './user';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'role', length: 55 })
  role: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Timestamp;

  @OneToMany(type => User, user => user.role,
  )
  users: User[];
}
