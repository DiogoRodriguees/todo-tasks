export class TaskDTO {
  id: string;
  createdBy: string;
  updatedBy: string | null;
  title: string;
  description: string | null;

  constructor(createdBy: string, updatedBy: string | null, title: string, description: string | null) {
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.title = title;
    this.description = description;
  }
}
