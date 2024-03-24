export interface SextantModCalculation {
  name: string;
  longName: string;
  weight: number;
  divine: number;
  chaos: number;
  lowConfidence?: boolean;
  ratio?: number;
  normalizedProbability: number;
  normalizedPrice: number;
}
