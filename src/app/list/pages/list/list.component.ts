import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { CommonService } from "src/app/common.service";
import {
  SWList,
  SWListRespose,
  SWPeopleRespose,
} from "../../interfaces/list.interface";
import { ListMock } from "../../mocks/initialize-data.mock";
import { ListService } from "../../services/list.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public list: SWList = ListMock;
  private _unsubscribe$: Subject<void> = new Subject();

  constructor(
    private _listService: ListService,
    private _router: Router,
    private _commonService: CommonService
  ) {}
  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  ngOnInit(): void {
    this._commonService.setTitle("Characters");
    this._getCharacterList(0);
  }

  public changePage(event: any) {
    this._getCharacterList(event.pageIndex);
  }

  public onSelect(event: any) {
    this._router.navigate([`${event.id}/detail`]);
    this._commonService.setTitle(`${event.name}`);
  }

  private _getCharacterList(page: number) {
    this._listService
      .getList$(this._parseIndexToPage(page))
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((list: SWListRespose) => {
        let id = 0;
        const people = list.results.map((result: SWPeopleRespose) => {
          id = parseInt(result.url.split("people/")[1].split("/")[0]);
          return {
            id: id,
            ...result,
          };
        });
        this.list = {
          count: list.count,
          next: list.next,
          previous: list.previous,
          results: people,
        };
      });
  }
  private _parseIndexToPage(index: number): number {
    return index + 1;
  }
}
