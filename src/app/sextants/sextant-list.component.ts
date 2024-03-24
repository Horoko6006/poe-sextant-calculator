import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnter,
  CdkDragExit,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { SextantModCalculation } from './sextant-mod-calculation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculationService } from './calculation-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'sextant-root',
  standalone: true,
  imports: [RouterOutlet, DragDropModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './sextant-list.component.html',
  styleUrl: './sextant-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SextantListComponent {
  title = 'Sextants';
  errorMessage = this.calulcationService.sextantModsError;

  blockedSextantMods: SextantModCalculation[] = [];
  sextantModsInitial = this.calulcationService.sextantModsInitial;
  sextantModsCalculated = this.calulcationService.sextantModsCalculated;
  currentChaosPrice = this.calulcationService.currentChaosPriceForSextant;
  userInputThreshold = this.calulcationService.userInputThreshold;
  totalWeight = this.calulcationService.totalWeight;
  totalWeightValue = this.calulcationService.totalWeightValue;
  profitPerClickIncludingCheapMods = this.calulcationService.profitPerClickIncludingCheapMods;
  profitPerClickNotIncludingCheapMods = this.calulcationService.profitPerClickNotInclingCheapMods;
  totalWeightedValueWithThreshold = this.calulcationService.totalWeightedValueWithThreshold;

  constructor(private calulcationService: CalculationService) {
  }

  onDrop(event: CdkDragDrop<SextantModCalculation[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.sextantModsInitial()?.sort((a, b) => b.chaos - a.chaos);
  }

  limitePredicate(
    item: CdkDrag<SextantModCalculation>,
    container: CdkDropList
  ) {
    if (container.data.length >= 3) {
      return false;
    }
    return true;
  }

  noReturnPredicate() {
    return true;
  }

  //For some reason the CdkDragExit emits JoinedTftData[] but we know it is one item, this is why we set 'any' for type
  onExited(item: CdkDragExit<any>) {
    this.remove(item.item.data);
  }

  onEntered(item: CdkDragEnter<any>) {
    this.add(item.item.data);
  }

  onThresholdChange(newValue: number) {
    this.userInputThreshold.set(newValue);
  }

  isHighlightedRow(currentChaosValue: number) {
    return currentChaosValue < this.userInputThreshold();
  }

  private remove(data: SextantModCalculation) {
    this.calulcationService.removeFromMainList(data);
  }

  private add(data: SextantModCalculation) {
    this.calulcationService.addToMainList(data);
  }
}
