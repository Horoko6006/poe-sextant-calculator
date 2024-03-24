import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {

  formatError(err: HttpErrorResponse): string {
    console.log('we here too', err);
    return this.httpErrorFormatter(err);
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    return this.httpHandleError(err);
  }

  private httpErrorFormatter(err: HttpErrorResponse): string {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.statusText}`;
    }
    return errorMessage;
  }

  private httpHandleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    return throwError(() => errorMessage);
  }
}
