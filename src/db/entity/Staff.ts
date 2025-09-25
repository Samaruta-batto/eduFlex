import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { StaffRole } from './StaffRole';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @ManyToOne(() => StaffRole, (staffRole) => staffRole.staff)
  role: StaffRole;
}
