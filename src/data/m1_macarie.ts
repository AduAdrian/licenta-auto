// src/data/m1_macarie.ts
// Date de bază pentru calculele de autopropulsare.
export const VEHICLE_BASE = {
  m_kg: 1500,      // masă vehicul [kg]
  f0: 0.015,       // coeficient rezistență la rulare
  alpha_deg: 0,    // pantă drum [deg]
  cx: 0.3,         // coeficient aerodinamic
  A_m2: 2.2,       // suprafață frontală [m^2]
  rho: 1.225       // densitatea aerului [kg/m^3]
};

// Domeniu de viteze utilizat în calcule [km/h]
export const SPEED_GRID_KMH: number[] = [0, 20, 40, 60, 80, 100, 120];
