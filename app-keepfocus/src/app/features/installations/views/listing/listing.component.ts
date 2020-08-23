import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';
import {iconSearch} from '../../utils/find-icon';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
  firstNode: FocusGroupNode;
  iconSearch = iconSearch();
  @ViewChild('nodes') nodes: any;
  @Input() focusGroups: FocusGroupNode[];

  constructor() { }

  ngOnInit(): void {
    if (this.focusGroups) {
      this.firstNode = this.focusGroups[0];
    }
  }

  ngAfterViewInit(): void {
    console.log(this.nodes);
  }

}
