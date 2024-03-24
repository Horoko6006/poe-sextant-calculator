export interface TftRoot {
  data: Tft[];
}

export interface Tft {
  name: string;
  divine: number;
  chaos: number;
  lowConfidence: boolean;
  ratio: number;
}
