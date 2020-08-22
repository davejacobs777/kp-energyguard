import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output, OnDestroy
} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Subscription} from 'rxjs';
import {InstallationsService} from '../../services/installations.service';
import {FocusGroupNode} from '../../../../model/focusGroupNode.model';
import {iconSearch} from '../../utils/find-icon';

@Component({
  selector: 'app-tree-navigation',
  templateUrl: './tree-navigation.component.html',
  styleUrls: ['./tree-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNavigationComponent implements OnInit, OnDestroy {
  treeControl = new NestedTreeControl<FocusGroupNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FocusGroupNode>();
  subscription: Subscription;
  iconSearch = iconSearch();

  constructor(private installationsService: InstallationsService) {
    this.subscription = this.installationsService.getNodeGroups()
      .subscribe(
        (data: FocusGroupNode[]) => {
          // console.log('nodes', data);
          if (data) {
            this.dataSource.data = data;
          } else {
            this.dataSource.data = [];
          }
        }
      );
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FocusGroupNode) => !!node.children && node.children.length > 0;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

