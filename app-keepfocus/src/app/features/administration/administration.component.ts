import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {InstallationsFacade} from '../installations/services/installations.facade';
import {FocusGroupNode} from '../../model/focusGroupNode.model';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, OnDestroy {
  focusGroupsUrl = 'api/focusGroups';
  focusGroup$: Observable<FocusGroupNode>;
  subscription: Subscription;

  constructor(private http: HttpClient, private installationsFacade: InstallationsFacade) {
  }

  ngOnInit(): void {
      this.focusGroup$ = this.installationsFacade.focusGroupNode$;
  }

  ngOnDestroy(): void {
  }

}
