import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseDataService } from "src/app/base-data.service";
import { SWFilmListResponse } from "../interfaces/detail.interface";

@Injectable({
  providedIn: "root",
})
export class DetailService extends BaseDataService {
  private _films = "films";
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getFilms$(): Observable<SWFilmListResponse> {
    const options: RequestInit = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = this.getUrlWithParams({
      path: `${this._films}`,
    });

    return this.get$(url, options).pipe() as Observable<SWFilmListResponse>;
  }
}
