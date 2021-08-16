import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import Image from './image';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  uid!: string;

  @Column()
  id!: string;

  @Column()
  password!: string;

  @Column()
  name!: string;

  @Column()
  sid!: string;

  @Column()
  belong!: string;

  @Column()
  email!: string;

  @OneToOne(() => Image)
  @JoinColumn()
  profileImage!: Image;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
