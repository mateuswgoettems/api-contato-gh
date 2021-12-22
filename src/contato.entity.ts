import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contato')
export class Contato extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 50})
    nome: string;

    @Column({ type: 'varchar', length: 80 })
    email: string;

    @Column({ type: 'varchar', length: 15 })
    telefone: string;

    @CreateDateColumn()
    createdAt: Date;
}