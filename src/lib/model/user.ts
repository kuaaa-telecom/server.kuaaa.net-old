import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column({ default: null })
  profileImageId!: string;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
