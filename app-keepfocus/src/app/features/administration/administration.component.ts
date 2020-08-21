import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, OnDestroy {
  focusGroupsUrl = 'api/focus_groups';
  focusGroups$: Observable<any>;
  subscription: Subscription;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.focusGroups$ = this.http.get(this.focusGroupsUrl).pipe(map(data => data[0].groups));
    }, 3000);

  }

  ngOnDestroy(): void {
  }

}
