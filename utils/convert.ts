export const kgToLbs = (kg: number): number => Math.round(kg * 2.20462);

export const cmToFoot = (m: number): number =>
  Math.round(m * 0.0328084 * 10) / 10;
