import {Component, OnInit} from '@angular/core';
import {Url} from "./model/url";
import {Api} from "./model/api";
import {History} from "./model/history";

@Component({
  selector: 'api-history',
  templateUrl: 'app/api/api.history.component.html'
})
export class ApiHistoryComponent implements OnInit {
  histories: History[] = [];

  ngOnInit() {
    let url: Url = new Url();
    url.host = 'www.google.com';

    let api: Api = new Api();
    api.method = 'GET';
    api.url = url;

    let history = new History();
    history.api = api;
    history.date = new Date();
    history.user = 'Dale Seo';

    this.histories.push(history);
  }
}