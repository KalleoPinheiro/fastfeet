class HttpException extends Error {
  status: number;
  message: string;
  detail: string | null;
  constructor(status: number, message: string, detail?: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.detail = detail || null;
  }
}

export default HttpException;
