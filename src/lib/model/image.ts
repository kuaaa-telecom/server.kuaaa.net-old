import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export default class Image {
  @PrimaryColumn()
  id!: string;

  @Column()
  path!: string;

  @Column()
  mimetype!: string;

  @Column()
  size!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
