import { Entity, Timestamp } from "typeorm";
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"board", schema:"board"})
export class Board {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    user : string;

    @Column()
    title : string;

    @Column()
    context : string;

    @Column({ default: 0 })
    view : number;
}
