import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subject, switchMap, takeUntil } from "rxjs";
import { environment } from "src/environments/environment";
import { SWFilmImageMapping } from "../constants/detail.constant";
import {
  SWFilmListResponse,
  SWFilmResponse,
} from "../interfaces/detail.interface";
import { SWFilmListMock, SWFilmsMock } from "../mocks/initialize-detail.mock";
import { DetailService } from "../services/detail.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit, OnDestroy {
  public actorFilms: SWFilmResponse[] = SWFilmsMock;
  public films: SWFilmListResponse = SWFilmListMock;
  public sWFilmImageMapping = SWFilmImageMapping;
  private _unsubscribe$: Subject<void> = new Subject();
  constructor(
    private _detailService: DetailService,
    private _route: ActivatedRoute
  ) {}
  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  ngOnInit(): void {
    this.actorFilms = [];
    this._detailService
      .getFilms$()
      .pipe(
        takeUntil(this._unsubscribe$),
        switchMap((films: SWFilmListResponse) => {
          this.films = films;
          return this._route.paramMap;
        })
      )
      .subscribe((params: ParamMap) => {
        this.films.results.forEach((film: SWFilmResponse) => {
          const linkTmp = `${environment.apiUrl}/people/${params.get(
            "personId"
          )}/`;
          if (!!film.characters.find((character) => character === linkTmp)) {
            this.actorFilms.push(film);
          }
        });
      });
  }
}
