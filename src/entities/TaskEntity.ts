import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @Generated('uuid')
  @PrimaryColumn({ name: 'id', type: 'uuid', primaryKeyConstraintName: 'id' })
  id: string;

  @Column({ name: 'created_by', type: 'uuid', nullable: false })
  createdBy: string;

  @Column({ name: 'updated_by', type: 'uuid', nullable: true })
  updatedBy: string;

  @Column({ name: 'deleted_by', type: 'uuid', nullable: true })
  deletedBy: string;

  @Column({ name: 'title', type: 'varchar', nullable: false })
  title: string;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp with time zone', nullable: true })
  deletedAt: string;

  constructor(createdBy: string, updatedBy: string, title: string, description: string) {
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.title = title;
    this.description = description;
  }

  public update(updatedBy: string, title: string, description: string) {
    this.updatedBy = updatedBy || this.updatedBy;
    this.title = title || this.title;
    this.description = description || this.description;
  }

  public setDeletedBy(userId: string) {
    this.deletedBy = userId;
  }
}
