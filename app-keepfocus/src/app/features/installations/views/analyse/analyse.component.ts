import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {
  focusGroups: FocusGroupNode[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.parent.data
      .subscribe((data) => {
        this.focusGroups = data.focusGroupsData;
      });
    console.log(this.focusGroups);
  }


}
