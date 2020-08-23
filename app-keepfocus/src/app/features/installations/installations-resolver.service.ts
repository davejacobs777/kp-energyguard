import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {FocusGroupNode} from '../../model/focusGroupNode.model';
import {Observable} from 'rxjs';
import {FocusGroupsService} from '../../core/services/focus-groups.service';
import {InstallationsFacade} from './services/installations.facade';

@Injectable({
  providedIn: 'root'
})
export class InstallationsResolver implements Resolve<FocusGroupNode[]> {

  constructor(private focusGroupsService: FocusGroupsService, private installationsFacade: InstallationsFacade) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<FocusGroupNode[]> {
    return this.focusGroupsService.getFocusGroupsObservable();
  }

}
