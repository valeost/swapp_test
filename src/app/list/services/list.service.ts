import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseDataService } from "src/app/base-data.service";
import { SWListRespose } from "../interfaces/list.interface";

@Injectable({
  providedIn: "root",
})
export class ListService extends BaseDataService {
  private _people = "people";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getList$(nextPage: number): Observable<SWListRespose> {
    const options: RequestInit = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = this.getUrlWithParams({
      options: { page: nextPage },
      path: this._people,
    });

    return this.get$(url, options).pipe() as Observable<SWListRespose>;
  }
}
