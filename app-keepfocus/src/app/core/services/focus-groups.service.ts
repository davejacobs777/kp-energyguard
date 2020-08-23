import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs';
import {FocusGroupNode} from '../../model/focusGroupNode.model';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FocusGroupsService {
  private focusGroupsUrl = 'api/focusGroups';

  constructor(private http: HttpClient) {
  }

  getFocusGroupsObservable(): Observable<FocusGroupNode[]> {
    return this.http.get<FocusGroupNode[]>(this.focusGroupsUrl).pipe(take(1));;
  }
}



