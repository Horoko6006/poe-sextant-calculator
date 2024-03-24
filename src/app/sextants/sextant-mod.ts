export interface SextantMod {
  totalWeight: number;
  sextantMods: SextantModStatic[];
}

export interface SextantModStatic {
  shortName: string;
  longName: string;
  weight: number;
}
