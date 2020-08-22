import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, OnDestroy {
  focusGroupsUrl = 'api/focusGroups';
  focusGroups$: Observable<any>;
  subscription: Subscription;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
      this.focusGroups$ = this.http.get(this.focusGroupsUrl).pipe(tap(data => console.log(data)));
  }

  ngOnDestroy(): void {
  }

}
