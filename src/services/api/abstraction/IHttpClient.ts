export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, statusText: string) {
    super(statusText || "HTTP Error");
    this.name = "HttpError";
    this.statusCode = statusCode;
  }
}

export interface RequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface HttpClient {
  get<T>(url: string, config?: RequestConfig): Promise<T>;
}
