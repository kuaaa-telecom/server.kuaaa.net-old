import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './user';

@Entity()
export default class Auth {
  @OneToOne(() => User, { primary: true })
  @JoinColumn({ name: 'uid' })
  uid!: User;

  @Column({ width: 512 })
  digest!: string;

  @Column({ default: false })
  oauth2!: boolean;

  @Column({ default: 0 })
  level!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
