import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, filter, find, first, map, tap} from 'rxjs/operators';
import {FocusGroupNode} from '../../../model/focusGroupNode.model';

@Injectable({
  providedIn: 'root'
})
export class InstallationsService {
  private focusGroupsUrl = 'api/focusGroups';

  constructor(private http: HttpClient) {
  }

  getNodeGroups(): Observable<FocusGroupNode[]> {
    return this.http.get<FocusGroupNode[]>(this.focusGroupsUrl);
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  // fetch first node's children
  getFirstNode(): Observable<FocusGroupNode> {
    return this.http.get<FocusGroupNode[]>(this.focusGroupsUrl).pipe(map(data => data[0]));
  }


  // tslint:disable-next-line:typedef
  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
