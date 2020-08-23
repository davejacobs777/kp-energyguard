import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';
import {HttpClient} from '@angular/common/http';
import {InstallationsFacade} from '../../services/installations.facade';
import {iconSearch} from '../../utils/find-icon';

@Component({
  selector: 'app-focus-group',
  templateUrl: './focus-group.component.html',
  styleUrls: ['./focus-group.component.scss']
})
export class FocusGroupComponent implements OnInit {
  focusGroup$: Observable<FocusGroupNode>;
  iconSearch = iconSearch();

  constructor(private http: HttpClient, private installationsFacade: InstallationsFacade) {
  }

  ngOnInit(): void {
    this.focusGroup$ = this.installationsFacade.focusGroupNode$;
  }

}
