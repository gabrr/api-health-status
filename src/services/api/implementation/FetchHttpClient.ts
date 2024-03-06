import {
  HttpClient,
  HttpError,
  RequestConfig,
} from "../abstraction/IHttpClient";

export class FetchHttpClient implements HttpClient {
  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    try {
      const response = await fetch(this.buildUrl(url, config?.params), {
        method: "GET",
        headers: config?.headers,
      });

      if (!response.ok) {
        // Handle any non-2xx responses here
        throw new HttpError(
          response.status,
          response.statusText || "HTTP error occurred"
        );
      }

      return response.json();
    } catch (error) {
      throw new Error("Network or CORS error occurred");
    }
  }

  private buildUrl(url: string, params?: Record<string, string>): string {
    const baseUrl = process.env.NEXT_PUBLIC_API || "";

    if (!params) return baseUrl + url;

    const urlObj = new URL(baseUrl + url);

    Object.keys(params).forEach((key) =>
      urlObj.searchParams.append(key, params[key])
    );

    return urlObj.toString();
  }
}
