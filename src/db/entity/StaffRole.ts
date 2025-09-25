import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Staff } from './Staff';

@Entity()
export class StaffRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // e.g., 'Teacher', 'Management', 'Admin'

  @OneToMany(() => Staff, (staff) => staff.role)
  staff: Staff[];
}
