// src/data/solutii_similare.ts
// Date preluate din Macarie pentru studiul soluțiilor similare.
export type SimilarCar = {
  model: string;
  length_mm: number; // Lungime totală [mm]
  mass_kg: number;   // Masă proprie [kg]
  power_kw: number;  // Putere motor [kW]
  Vmax_kmh: number;  // Viteză maximă [km/h]
};

export const SIMILAR_CARS: SimilarCar[] = [
  {
    model: 'Dacia Logan 1.0 TCe',
    length_mm: 4340,
    mass_kg: 1090,
    power_kw: 74,
    Vmax_kmh: 180,
  },
  {
    model: 'VW Golf 1.5 TSI',
    length_mm: 4284,
    mass_kg: 1237,
    power_kw: 110,
    Vmax_kmh: 214,
  },
  {
    model: 'Ford Focus 1.0 EcoBoost',
    length_mm: 4378,
    mass_kg: 1250,
    power_kw: 92,
    Vmax_kmh: 200,
  },
  {
    model: 'Renault Megane 1.3 TCe',
    length_mm: 4359,
    mass_kg: 1213,
    power_kw: 103,
    Vmax_kmh: 205,
  },
  {
    model: 'Skoda Octavia 1.5 TSI',
    length_mm: 4689,
    mass_kg: 1312,
    power_kw: 110,
    Vmax_kmh: 223,
  },
  {
    model: 'Opel Astra 1.2 Turbo',
    length_mm: 4374,
    mass_kg: 1173,
    power_kw: 96,
    Vmax_kmh: 207,
  },
  {
    model: 'Toyota Corolla 1.2T',
    length_mm: 4370,
    mass_kg: 1250,
    power_kw: 85,
    Vmax_kmh: 200,
  },
  {
    model: 'Hyundai i30 1.5 DPI',
    length_mm: 4340,
    mass_kg: 1185,
    power_kw: 81,
    Vmax_kmh: 192,
  },
  {
    model: 'Peugeot 308 1.2 PureTech',
    length_mm: 4253,
    mass_kg: 1204,
    power_kw: 96,
    Vmax_kmh: 208,
  },
];
