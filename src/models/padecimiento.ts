import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('padecimiento')
export class Padecimiento {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', length: 191 })
  name: string;

}
