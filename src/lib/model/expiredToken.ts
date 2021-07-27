import { Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity()
export default class ExpiredToken {
    @PrimaryColumn()
    token!: string;

    @CreateDateColumn()
    createdAt!: Date;
}
