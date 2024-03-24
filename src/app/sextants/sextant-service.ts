import { Injectable } from '@angular/core';
import { TftService } from '../tft/tft-service';
import { forkJoin, map, of } from 'rxjs';
import { SextantData } from './sextant-mod-data';
import { SextantModPrice } from './sextant-mod-price';
import { Result } from '../utilities/Result';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SextantService {
  constructor(private tftService: TftService) {}

  sextantModPriceResult$ = forkJoin([
    of(SextantData.sextantMod.sextantMods),
    this.tftService.tftResult$,
  ]).pipe(
    takeUntilDestroyed(),
    map(([sextantMods, tftResult]) => {
      if (tftResult.error) {
        const message = tftResult.error;
        return {
          data: undefined,
          error: message,
        } as Result<SextantModPrice[]>;
      }

      const sextantModPricesResult: Result<SextantModPrice[]> = {
        data: [],
        error: undefined,
      };

      const tftData = tftResult.data?.data!;

      for (const sextantMod of sextantMods) {
        const correspondingTftItem = tftData.find(
          (x) => x.name.toLowerCase() === sextantMod.shortName.toLowerCase()
        );
        const divine = correspondingTftItem?.divine ?? 0;
        const chaos = correspondingTftItem?.chaos ?? 0;

        sextantModPricesResult.data!.push({
          name: sextantMod.shortName,
          longName: sextantMod.longName,
          weight: sextantMod.weight,
          divine: divine,
          chaos: chaos,
          lowConfidence: correspondingTftItem?.lowConfidence,
          ratio: correspondingTftItem?.ratio,
        });
      }

      return sextantModPricesResult;
    })
  );
}
