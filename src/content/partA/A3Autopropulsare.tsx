// src/content/partA/A3Autopropulsare.tsx
import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { VEHICLE_BASE, SPEED_GRID_KMH } from '../../data/m1_macarie';
import { kmhToMs, rollingResistance, airResistance } from '../../lib/physics';

type Row = { v: number; Rr: number; Ra: number; Rtot: number };

export default function A3Autopropulsare() {
  const rows: Row[] = useMemo(() => {
    return SPEED_GRID_KMH.filter(v => v > 0).map(v => {
      const vMs = kmhToMs(v);
      const Rr = rollingResistance(VEHICLE_BASE.m_kg, VEHICLE_BASE.f0, VEHICLE_BASE.alpha_deg);
      const Ra = airResistance(vMs, VEHICLE_BASE.cx, VEHICLE_BASE.A_m2, VEHICLE_BASE.rho);
      return { v, Rr, Ra, Rtot: Rr + Ra };
    });
  }, []);

  return (
    <>
      <p className="meta">Rr, Ra și Rtotal (drum orizontal). Valorile f, c<sub>x</sub>, A sunt alese conform recomandărilor Îndrumarului.</p>

      <h2>Tabel rezistențe (selectiv)</h2>
      <table className="placeholder" style={{ width:'100%', borderCollapse:'collapse' }}>
        <thead><tr><th>v [km/h]</th><th>Rr [N]</th><th>Ra [N]</th><th>Rtotal [N]</th></tr></thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.v}>
              <td>{r.v}</td><td>{r.Rr.toFixed(0)}</td><td>{r.Ra.toFixed(0)}</td><td>{r.Rtot.toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Grafic rezistențe vs viteză</h2>
      <div style={{ height: 360 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="v" label={{ value: 'v [km/h]', position: 'insideBottom', offset: -2 }} />
            <YAxis label={{ value: 'Forță [N]', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Rr" />
            <Line type="monotone" dataKey="Ra" />
            <Line type="monotone" dataKey="Rtot" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
