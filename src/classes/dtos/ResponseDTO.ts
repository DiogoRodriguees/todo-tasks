export class ResponseDTO<T> {
  status: number;
  reason: string;
  data: T;

  constructor(htttpStatus: number, reason: string, data: T) {
    this.status = htttpStatus;
    this.reason = reason;
    this.data = data;
  }
}
