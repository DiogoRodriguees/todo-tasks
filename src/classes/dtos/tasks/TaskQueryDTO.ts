export class TaskQueryDTO {
  updatedBy: string;
  title: string;
  description: string;
  id: string;
  deletedBy: string;
  createdAt: string;
  updatedAt: string;
  sortBy: string;
  orderBy: 'ASC' | 'DESC';

  constructor(
    updatedBy: string,
    title: string,
    description: string,
    id: string,
    deletedBy: string,
    createdAt: string,
    updatedAt: string,
    sortBy: string = 'id',
    orderBy: 'ASC' | 'DESC' = 'ASC',
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.updatedBy = updatedBy;
    this.deletedBy = deletedBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.sortBy = sortBy;
    this.orderBy = orderBy;
  }
}
