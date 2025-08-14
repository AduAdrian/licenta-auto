// src/lib/physics.ts
export const g = 9.81;             // [m/s^2]
export const rhoAir = 1.225;       // [kg/m^3] aer la nivelul mării, 15°C

export function kmhToMs(vKmh: number) { return vKmh / 3.6; }
export function msToKmh(vMs: number) { return vMs * 3.6; }
export function degToRad(deg: number) { return (deg * Math.PI) / 180; }

/** Rezistența la rulare: Rr = f * m * g * cos(alpha) */
export function rollingResistance(m: number, f: number, alphaDeg = 0): number {
  const alpha = degToRad(alphaDeg);
  return f * m * g * Math.cos(alpha);
}

/** Rezistența aerului: Ra = 0.5 * rho * cx * A * v^2  (v în m/s) */
export function airResistance(vMs: number, cx: number, A: number, rho = rhoAir): number {
  return 0.5 * rho * cx * A * vMs * vMs;
}

/** Rezistența la pantă: Rp = m * g * sin(alpha)  (alpha în grade) */
export function gradeResistance(m: number, alphaDeg: number): number {
  const alpha = degToRad(alphaDeg);
  return m * g * Math.sin(alpha);
}

/** Rezistența la demarare: Rd = m * delta * a */
export function accelResistance(m: number, delta: number, a: number): number {
  return m * delta * a;
}

/** δ_k ≈ 1.04 + 0.0025 * i_cv,k * i0 (exemplu din Îndrumar) */
export function deltaK(i_cv_k: number, i0: number) {
  return 1.04 + 0.0025 * i_cv_k * i0;
}

/** RPM din viteză + rap raport total: rpm = v/(2πr) * i_tot * 60 */
export function rpmFromSpeed(vMs: number, iTot: number, rWheel: number) {
  return (vMs / (2 * Math.PI * rWheel)) * iTot * 60;
}

/** Viteză din rpm + rap raport total */
export function speedFromRpm(rpm: number, iTot: number, rWheel: number) {
  const v = (rpm / (iTot * 60)) * (2 * Math.PI * rWheel);
  return v; // [m/s]
}

/** Interpolare liniară (x ascendent) */
export function interp1(x: number[], y: number[], xi: number): number {
  if (x.length !== y.length || x.length === 0) return NaN;
  if (xi <= x[0]) return y[0];
  if (xi >= x[x.length - 1]) return y[y.length - 1];
  let lo = 0, hi = x.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (x[mid] > xi) hi = mid; else lo = mid;
  }
  const t = (xi - x[lo]) / (x[hi] - x[lo]);
  return y[lo] + t * (y[hi] - y[lo]);
}

/** Forță la roată din moment motor [Nm], raport total și rază roată [m] */
export function wheelForceFromTorque(T_engine: number, iTot: number, etaTr: number, rWheel: number) {
  return (T_engine * iTot * etaTr) / rWheel;
}
