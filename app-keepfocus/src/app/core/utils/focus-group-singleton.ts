// import {HttpClient} from '@angular/common/http';
//
// import {take} from 'rxjs/operators';
// import {Observable} from 'rxjs';
// import {FocusGroupNode} from '../../model/focusGroupNode.model';
//
// export const fetchFocusGroups = (http: HttpClient, focusGroupsUrl: string): () => Observable<FocusGroupNode[]> => {
//
//   class FocusGroupsSingleton {
//     private static uniqueInstance: FocusGroupsSingleton;
//     readonly focusGroups$: Observable<FocusGroupNode[]>;
//
//     private constructor() {
//       this.focusGroups$ = http.get<FocusGroupNode[]>(focusGroupsUrl).pipe(take(1));
//     }
//
//     static getInstance(): FocusGroupsSingleton {
//       if (!this.uniqueInstance) {
//         this.uniqueInstance = new FocusGroupsSingleton();
//       }
//       return this.uniqueInstance;
//     }
//
//     get getFocusGroups(): Observable<FocusGroupNode[]> {
//       return this.focusGroups$;
//     }
//   }
//
//   const focusGroupSingleton = FocusGroupsSingleton.getInstance();
//
//   const focusGroupNodes$: Observable<FocusGroupNode[]> = focusGroupSingleton.getFocusGroups;
//
//
//   return () => focusGroupNodes$;
// };
//
//
//
//
//
