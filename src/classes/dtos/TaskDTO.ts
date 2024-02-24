export class TaskDTO {
  id: string;
  createdBy: string;
  updatedBy: string | null;
  title: string;
  description: string | null;

  constructor(updatedBy: string | null, title: string, description: string | null) {
    this.updatedBy = updatedBy;
    this.title = title;
    this.description = description;
  }
}
