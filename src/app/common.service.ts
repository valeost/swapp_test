import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Injectable()
export class CommonService {
  constructor(public router: Router, private titleService: Title) {}

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getTitle(): string {
    return this.titleService.getTitle();
  }
}
