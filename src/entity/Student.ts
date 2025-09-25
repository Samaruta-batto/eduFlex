
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Class } from "./Class"

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Class, classroom => classroom.students)
    class: Class

}
