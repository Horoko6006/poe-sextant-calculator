import { Injectable, Signal, computed, signal } from '@angular/core';
import { SextantService } from './sextant-service';
import { SextantModCalculation } from './sextant-mod-calculation';
import { SextantModPrice } from './sextant-mod-price';
import { toSignal } from '@angular/core/rxjs-interop';
import { Result } from '../utilities/Result';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  private sextantModsResult = toSignal(
    this.sextantService.sextantModPriceResult$,
    {
      initialValue: { data: [] } as Result<SextantModPrice[]>,
    }
  );
  private sextantArray: SextantModCalculation[] = [];

  constructor(private sextantService: SextantService) {}

  sextantModsError = computed(() => this.sextantModsResult()?.error);

  sextantModsCalculated = signal<SextantModCalculation[]>(this.sextantArray);

  currentChaosPriceForSextant = signal(2);

  userInputThreshold = signal(0);

  sextantModsInitial = computed(() => {
    const mods = this.sextantModsResult().data;
    if (!mods) {
      return [];
    }

    const data = this.calculateValues(mods);
    this.sextantArray.push(...data);

    return data;
  });

  totalWeight: Signal<number> = computed(() =>
    this.calculateTotalWeight(this.sextantModsCalculated())
  );

  totalWeightValue: Signal<number> = computed(() =>
    this.calculateTotalWeightValue(this.sextantModsCalculated())
  );

  profitPerClickIncludingCheapMods: Signal<number> = computed(
    () => this.totalWeightValue() - this.currentChaosPriceForSextant()
  );

  profitPerClickNotInclingCheapMods: Signal<number> = computed(
    () =>
      this.totalWeightedValueWithThreshold() -
      this.currentChaosPriceForSextant()
  );

  totalWeightedValueWithThreshold: Signal<number> = computed(() =>
    this.sextantModsCalculated().reduce((accumulator, currentValue) => {
      if (currentValue.chaos < this.userInputThreshold()) {
        return accumulator;
      }

      return accumulator + currentValue.normalizedPrice;
    }, 0)
  );

  removeFromMainList(data: SextantModCalculation): void {
    this.sextantModsCalculated.update((items) => {
      let filtered = items.filter(
        (item) =>
          item.name.toLocaleLowerCase() !== data.name.toLocaleLowerCase()
      );
      filtered = this.calculateValues(filtered);
      return filtered;
    });
  }

  addToMainList(data: SextantModCalculation): void {
    this.sextantModsCalculated.update((items) => {
      let updated = [...items, data];
      updated = this.calculateValues(updated);
      return updated;
    });
  }

  private calculateValues(
    sextantMods: SextantModCalculation[] | SextantModPrice[]
  ): SextantModCalculation[] {
    const modsWithCalculationResult: SextantModCalculation[] = [];
    const totalWeight = this.calculateTotalWeight(sextantMods);

    for (const mod of sextantMods) {
      modsWithCalculationResult.push({
        ...mod,
        normalizedProbability: this.calculateNormalizedProbability(
          mod.weight,
          totalWeight
        ),
        normalizedPrice: this.calculateNormalizedProbabilityValue(
          mod.weight,
          totalWeight,
          mod.chaos
        ),
      });
    }

    return modsWithCalculationResult.sort((a, b) => b.chaos - a.chaos);
  }

  private calculateTotalWeight(
    sextantMods: SextantModCalculation[] | SextantModPrice[]
  ): number {
    return sextantMods.reduce(
      (accumulator, currentValue) => accumulator + currentValue.weight,
      0
    );
  }

  private calculateTotalWeightValue(
    sextantMods: SextantModCalculation[]
  ): number {
    return sextantMods.reduce(
      (accumulator, currentValue) => accumulator + currentValue.normalizedPrice,
      0
    );
  }

  private calculateNormalizedProbabilityValue(
    modWeight: number,
    totalWeight: number,
    price: number
  ): number {
    return this.calculateNormalizedProbability(modWeight, totalWeight) * price;
  }

  private calculateNormalizedProbability(
    modWeight: number,
    totalWeight: number
  ): number {
    return modWeight / totalWeight;
  }
}
