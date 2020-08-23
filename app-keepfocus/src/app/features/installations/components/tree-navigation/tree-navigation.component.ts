import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output, OnDestroy, Input
} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';
import {iconSearch} from '../../utils/find-icon';

@Component({
  selector: 'app-tree-navigation',
  templateUrl: './tree-navigation.component.html',
  styleUrls: ['./tree-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNavigationComponent implements OnInit {
  treeControl = new NestedTreeControl<FocusGroupNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FocusGroupNode>();
  iconSearch = iconSearch();
  @Input() focusGroups: FocusGroupNode[];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.data = this.focusGroups;
    console.log('tree nodes', this.focusGroups);
  }

  hasChild = (_: number, node: FocusGroupNode) => !!node.children && node.children.length > 0;
}

