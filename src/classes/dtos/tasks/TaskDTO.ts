export class TaskDTO {
  id: string;
  title: string;
  description: string | null;
  createdBy: string;
  updatedBy: string | null;
  list: string;

  constructor(updatedBy: string | null, title: string, description: string | null) {
    this.updatedBy = updatedBy;
    this.title = title;
    this.description = description;
  }
}
