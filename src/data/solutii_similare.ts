// src/data/solutii_similare.ts
// Date orientative pentru vehicule similare utilizate la capitolul 1.
export type SimilarCar = {
  model: string;
  length_mm: number; // Lungime totală [mm]
  mass_kg: number;   // Masă proprie [kg]
  power_kw: number;  // Putere motor [kW]
  Vmax_kmh: number;  // Viteză maximă [km/h]
};

export const SIMILAR_CARS: SimilarCar[] = [
  { model: 'Dacia Logan 1.0 TCe', length_mm: 4340, mass_kg: 1090, power_kw: 74, Vmax_kmh: 180 },
  { model: 'VW Golf 1.5 TSI', length_mm: 4284, mass_kg: 1237, power_kw: 110, Vmax_kmh: 214 },
  { model: 'Ford Focus 1.0 EcoBoost', length_mm: 4378, mass_kg: 1250, power_kw: 92, Vmax_kmh: 200 }
];
