export class ResponseDTO {
  status: number;
  reason: string;
  data: any;

  constructor(htttpStatus: number, reason: string, data: any) {
    this.status = htttpStatus;
    this.reason = reason;
    this.data = data;
  }
}
