import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {InstallationsFacade} from '../../services/installations.facade';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {
  focusGroup$: Observable<FocusGroupNode>;

  constructor(private http: HttpClient, private installationsFacade: InstallationsFacade) {
  }

  ngOnInit(): void {
    this.focusGroup$ = this.installationsFacade.focusGroupNode$;
  }
}
