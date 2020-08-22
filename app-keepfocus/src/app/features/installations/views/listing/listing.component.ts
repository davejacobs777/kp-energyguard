import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {InstallationsService} from '../../services/installations.service';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {MatSelectionList} from '@angular/material/list';
import {iconSearch} from '../../utils/find-icon';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  firstNode$: Observable<FocusGroupNode>;
  iconSearch = iconSearch();
  @ViewChild('nodes') nodes: any;

  constructor(private installationsService: InstallationsService) { }

  ngOnInit(): void {
    this.firstNode$ = this.installationsService.getFirstNode().pipe(tap(data => console.log(data)));
  }

  ngAfterViewInit(): void {
    console.log(this.nodes);
  }

}
