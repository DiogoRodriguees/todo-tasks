import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TasksListEntity } from './ListEntity';

Entity('tasks');
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'varchar', length: 30 })
  title: string;

  @Column({ name: 'description', type: 'varchar', length: 90 })
  description: string;

  @Column({ name: 'created_by', type: 'uuid' })
  createdBy: string;

  @Column({ name: 'updated_by', type: 'uuid', nullable: true })
  updatedBy: string;

  @Column({ name: 'deleted_by', type: 'uuid', nullable: true })
  deletedBy: string;

  @Column({ name: 'list', type: 'uuid', nullable: true })
  list: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => TasksListEntity, (tasksList) => tasksList.id)
  @JoinColumn({ name: 'list' })
  tasksList: TasksListEntity;

  constructor(createdBy: string, updatedBy: string | null, title: string, description: string, list: string | null) {
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.list = list;
  }

  public update(updatedBy: string, title: string, description: string, list: string) {
    this.updatedBy = updatedBy || this.updatedBy;
    this.title = title || this.title;
    this.description = description || this.description;
    this.list = list || this.list;
  }

  public delete(userId: string) {
    this.deletedBy = userId;
  }
}
