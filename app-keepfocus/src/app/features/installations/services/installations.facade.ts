import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FocusGroupNode} from '../../../model/focusGroupNode.model';
import {distinctUntilChanged} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


const state: FocusGroupNode = {
  id: 0,
  name: '',
  type: '',
  children: null
};

@Injectable({
  providedIn: 'root'
})
export class InstallationsFacade {
  private store = new BehaviorSubject<FocusGroupNode>(state);
  private state$ = this.store.asObservable();

  focusGroupNode$ = this.state$.pipe(distinctUntilChanged());

  constructor(private http: HttpClient) {
  }

  updateFocusGroupData(data: FocusGroupNode): void {
    this.store.next({...state, ...data});
  }
}

