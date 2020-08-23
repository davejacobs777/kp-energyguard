import {Component, OnInit} from '@angular/core';
import {FocusGroupNode} from '../../model/focusGroupNode.model';
import {ActivatedRoute} from '@angular/router';
import {InstallationsFacade} from './services/installations.facade';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.scss']
})
export class InstallationsComponent implements OnInit {
  focusGroups: FocusGroupNode[];

  constructor(private route: ActivatedRoute, private installationsFacade: InstallationsFacade) {
  }

  ngOnInit(): void {
    this.installationsFacade.updateFocusGroupData(this.route.snapshot.data.focusGroupsData[0]);
    this.focusGroups = this.route.snapshot.data.focusGroupsData;
  }

}
