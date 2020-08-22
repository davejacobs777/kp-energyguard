// import {Component, OnInit} from '@angular/core';
// import {NestedTreeControl} from '@angular/cdk/tree';
// import {MatTreeNestedDataSource} from '@angular/material/tree';
// import {InstallationsService} from '../../services/installations.service';
// import {Observable, Subscription} from 'rxjs';
// import {Node} from '../../../../model/node.model';
//
// enum GroupType {
//   company = 'Company',
//   housingDepartment = 'Housing Department',
//   installations = 'Installation Group',
//   housingBlock = 'Housing Block',
//   housingDoor = 'Housing Door',
//   installation = 'Installation',
//   water = 'Water Meter',
//   electricity = 'Electric Meter',
//   heating = 'Heating Meter'
// }
//
// @Component({
//   selector: 'app-tree-navigation',
//   templateUrl: './tree-navigation.component.html',
//   styleUrls: ['./tree-navigation.component.scss']
// })
// export class TreeNavigationComponent implements OnInit {
//   treeControl = new NestedTreeControl<Node>(node => node.children);
//   dataSource = new MatTreeNestedDataSource<Node>();
//   subscription: Subscription;
//
//   // nodes$: Observable<Node[]>;
//
//   constructor(private installationsService: InstallationsService) {
//     this.subscription = this.installationsService.getNodeGroups()
//       .subscribe(
//         (data: Node[]) => {
//           console.log('nodes', data);
//           // @ts-ignore
//           if (data) {
//             this.dataSource.data = data;
//           } else {
//             this.dataSource.data = [];
//           }
//         }
//       );
//   }
//
//   ngOnInit(): void {
//     // this.nodes$ = this.installationsService.getNodeGroups();
//
//
//
//
//   }
//
//   hasChild = (_: number, node: Node) =>
//     !!node.children && node.children.length > 0
//
//   iconSearch(node: Node): string {
//     let iconString = '';
//
//     switch (node.type) {
//       case GroupType.company:
//         iconString = 'company';
//         break;
//       case GroupType.housingDepartment:
//         iconString = 'housing-department';
//         break;
//       case GroupType.installations:
//         iconString = 'installations';
//         break;
//       case GroupType.housingBlock:
//         iconString = 'housing-block';
//         break;
//       case GroupType.housingDoor:
//         iconString = 'housing-door';
//         break;
//       case GroupType.installation:
//         iconString = 'installation';
//         break;
//       case GroupType.water:
//         iconString = 'water';
//         break;
//       case GroupType.electricity:
//         iconString = 'electricity';
//         break;
//       case GroupType.heating:
//         iconString = 'heating';
//         break;
//       default:
//         iconString = '';
//     }
//
//     return iconString;
//   }
//
// }

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Subscription} from 'rxjs';
import {InstallationsService} from '../../services/installations.service';
import {Node} from '../../../../model/node.model';

enum GroupType {
  company = 'Company',
  housingDepartment = 'Housing Department',
  installations = 'Installation Group',
  housingBlock = 'Housing Block',
  housingDoor = 'Housing Door',
  installation = 'Installation',
  water = 'Water Meter',
  electricity = 'Electric Meter',
  heating = 'Heating Meter'
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {
            name: 'Fruit',
            children: [
              {
                name: 'Fruit',
                children: [
                  {
                    name: 'Fruit',
                    children: [
                      {name: 'Apple'},
                      {name: 'Banana'},
                      {name: 'Fruit loops'},
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
];

@Component({
  selector: 'app-tree-navigation',
  templateUrl: './tree-navigation.component.html',
  styleUrls: ['./tree-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNavigationComponent implements OnInit {
  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  subscription: Subscription;

  constructor(private installationsService: InstallationsService) {
    // this.dataSource.data = TREE_DATA;
    this.subscription = this.installationsService.getNodeGroups()
      .subscribe(
        (data: Node[]) => {
          console.log('nodes', data);
          // @ts-ignore
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

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

    iconSearch(node: Node): string {
    let iconString = '';

    switch (node.type) {
      case GroupType.company:
        iconString = 'company';
        break;
      case GroupType.housingDepartment:
        iconString = 'housing-department';
        break;
      case GroupType.installations:
        iconString = 'installations';
        break;
      case GroupType.housingBlock:
        iconString = 'housing-block';
        break;
      case GroupType.housingDoor:
        iconString = 'housing-door';
        break;
      case GroupType.installation:
        iconString = 'installation';
        break;
      case GroupType.water:
        iconString = 'water';
        break;
      case GroupType.electricity:
        iconString = 'electricity';
        break;
      case GroupType.heating:
        iconString = 'heating';
        break;
      default:
        iconString = '';
    }

    return iconString;
  }
}

