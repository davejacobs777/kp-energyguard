import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {FocusGroupNode} from '../../model/focusGroupNode.model';
import {Observable} from 'rxjs';
import {FocusGroupsService} from '../../core/services/focus-groups.service';

@Injectable({
  providedIn: 'root'
})
export class InstallationsResolver implements Resolve<FocusGroupNode[]> {

  constructor(private focusGroupsService: FocusGroupsService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<FocusGroupNode[]> {
    return this.focusGroupsService.getFocusGroupsObservable();
  }

}
