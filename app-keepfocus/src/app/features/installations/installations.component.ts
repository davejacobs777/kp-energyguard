import {Component, OnInit} from '@angular/core';
import {FocusGroupNode} from '../../model/focusGroupNode.model';
import {ActivatedRoute} from '@angular/router';

interface NavItem {
  iconName: string;
  itemUrl: string;
  itemName: string;
}

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.scss']
})
export class InstallationsComponent implements OnInit {
  links: NavItem[] = [
    {itemName: 'LISTING', itemUrl: 'listing', iconName: 'listing'},
    {itemName: 'MAP', itemUrl: 'map', iconName: 'map'},
    {itemName: 'MEASURE', itemUrl: 'measure', iconName: 'measurements'},
    {itemName: 'ANALYSE', itemUrl: 'analyse', iconName: 'analysis'},
    {itemName: 'ALARMS', itemUrl: 'alarms', iconName: 'alarm'},
    {itemName: 'REPORTS', itemUrl: 'reports', iconName: 'reports'},
    {itemName: 'SETTINGS', itemUrl: 'settings', iconName: 'settings'},
  ];
  activeLink: NavItem = this.links[0];
  itemColor: '#FBFCFD';

  focusGroups: FocusGroupNode[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.focusGroups = this.route.snapshot.data.focusGroupsData;
  }

}
