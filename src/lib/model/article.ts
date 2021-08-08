import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user';

@Entity()
export default class Article {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  author!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  title!: string;

  @Column()
  content!: string;
}
