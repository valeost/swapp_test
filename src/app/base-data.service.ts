import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

/**
 * Request url object definition
 */
export interface RequestUrlDefinition {
  base?: string;
  options?: unknown; // TODO think about this options
  path: string;
  version?: string;
}

@Injectable()
export class BaseDataService {
  protected options: RequestInit = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  private _apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {
    this.setHeaders(this.options.headers as HeadersInit);
  }

  /**
   * Get request body deserialized content
   */
  public getBody(): object {
    return JSON.parse(<string>this.options.body || "{}");
  }

  /**
   * Set request headers
   */
  public getHeaders(): object {
    return this.options.headers || {};
  }

  /**
   * Get request URL
   */
  public getUrl(props: RequestUrlDefinition): string {
    return `${this._apiUrl}/${props.path}`;
  }

  /**
   * Parser parameters and include on the URL path
   * @param props Request definition object
   */
  public getUrlWithParams(props: RequestUrlDefinition): string {
    const { options } = props;
    let updatedProps = props;

    if (options) {
      const urlParams = this.setURLParams(options);

      updatedProps = {
        ...props,
        path: `${props.path}?${urlParams.toString()}`,
      };
    }

    return this.getUrl(updatedProps);
  }
  /**
   * Set request body
   */
  public setBody(body: object): void {
    this.options.body = JSON.stringify({
      ...this.getBody(),
      ...body,
    });
  }

  /**
   * Set request headers
   */
  public setHeaders(headersObject: HeadersInit): void {
    this.options.headers = { ...this.options.headers, ...headersObject };
  }

  /**
   * Transform and prepare the paremeters into URLSearchParams
   * @param params Parameters options
   */
  public setURLParams(params: any): URLSearchParams {
    const urlSearchParams = new URLSearchParams();

    Object.keys(params).forEach((param) => {
      urlSearchParams.append(param, params[param]);
    });

    return urlSearchParams;
  }

  protected get$(
    url: string,
    options?: RequestInit | any
  ): Observable<unknown> {
    return this._http.get(url, options);
  }
}
