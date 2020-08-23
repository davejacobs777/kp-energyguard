import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';
import {iconSearch} from '../../utils/find-icon';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {InstallationsFacade} from '../../services/installations.facade';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
  focusGroup$: Observable<FocusGroupNode>;
  iconSearch = iconSearch();
  @ViewChild('nodes') nodes: any;

  constructor(private http: HttpClient, private installationsFacade: InstallationsFacade) {
  }

  ngOnInit(): void {
    this.focusGroup$ = this.installationsFacade.focusGroupNode$;
  }

  ngAfterViewInit(): void {
    console.log(this.nodes);
  }

}
