export type ProjectInput = {
  segment: string;
  seats: number;
  Vmax_kmh: number;

  // Dimensiuni principale (medii M1 din Îndrumar)
  wheelbase_mm: number;   // Ampatament
  length_mm: number;
  width_mm: number;
  height_mm: number;
  track_mm: number;       // Ecartament mediu

  // Masă & motor (orientativ; actualizezi după modelul ales)
  mass_kg: number;        // ma
  engine_power_kw: number;// Pmax
  cx: number;             // coef. rezistenței aerului (tipic berlină)
  tyres: string;          // ex. 185/65 R14
  pressure_bar: number;   // presiunea pneurilor (pt. λ)

  // Transmisie (poți ajusta ulterior la Cap.4)
  eta_t: number;          // randament transmisie global
  i0: number;             // raport transmisie principală
  ik: number[];           // rapoarte trepte CV (ex. 5/6 trepte)
};

export const defaultInput: ProjectInput = {
  segment: "M1 - 5 locuri",
  seats: 5,
  Vmax_kmh: 185,

  wheelbase_mm: 2572,
  length_mm: 4351,
  width_mm: 1718,
  height_mm: 1409,
  track_mm: 1459,

  mass_kg: 1350,
  engine_power_kw: 85,
  cx: 0.32,
  tyres: "185/65 R14",
  pressure_bar: 2.2,

  eta_t: 0.90,
  i0: 3.90,
  ik: [3.80, 2.10, 1.36, 1.03, 0.84] // exemplu
};
