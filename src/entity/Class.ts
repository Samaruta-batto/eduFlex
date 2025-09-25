
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Student } from "./Student"

@Entity()
export class Class {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Student, student => student.class)
    students: Student[]

}
