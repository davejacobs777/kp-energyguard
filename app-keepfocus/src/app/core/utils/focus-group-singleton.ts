// import {HttpClient} from '@angular/common/http';
// import {FocusGroupNode} from '../../../model/focusGroupNode.model';
// import {take} from 'rxjs/operators';
// import {Observable} from 'rxjs';
//
// export const fetchFocusGroups = (focusGroupData: FocusGroupNode[]): () => FocusGroupsSingleton => {
//
//   class FocusGroupsSingleton {
//     private static uniqueInstance: FocusGroupsSingleton;
//     readonly focusGroups: FocusGroupNode[];
//
//     private constructor() {
//       this.focusGroups = focusGroupData;
//     }
//
//     static getInstance(): FocusGroupsSingleton {
//       if (!this.uniqueInstance) {
//         this.uniqueInstance = new FocusGroupsSingleton();
//       }
//       return this.uniqueInstance;
//     }
//
//     get getFocusGroups(): FocusGroupNode[] {
//       return this.focusGroups;
//     }
//
//   }
//
//   return () => FocusGroupsSingleton.getInstance();
// };





