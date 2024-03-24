import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  map,
  of,
  shareReplay,
} from 'rxjs';
import { HttpErrorService } from '../utilities/http-error.service';
import { TftRoot } from './tft-price-root';
import { Result } from '../utilities/Result';

@Injectable({
  providedIn: 'root',
})
export class TftService {
  private tftUrl =
    'https://raw.githubusercontent.com/The-Forbidden-Trove/tft-data-prices/master/lsc/bulk-compasses.json';

  constructor(
    private http: HttpClient,
    private errorService: HttpErrorService
  ) {}

  tftResult$ = this.http.get<TftRoot>(this.tftUrl).pipe(
    map((p) => ({ data: p } as Result<TftRoot>)),
    shareReplay(1),
    catchError((err) =>
      of({
        data: undefined,
        error: this.errorService.formatError(err),
      } as Result<TftRoot>)
    )
  );
}