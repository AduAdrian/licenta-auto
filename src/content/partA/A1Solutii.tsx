// src/content/partA/A1Solutii.tsx
import React from 'react';
import { SIMILAR_CARS } from '../../data/solutii_similare';

export default function A1Solutii() {
  return (
    <>
      <h2>Soluții similare</h2>
      <p>Date preluate din Macarie pentru comparație între modele M1.</p>
      <table className="placeholder" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Model</th>
            <th>L [mm]</th>
            <th>m [kg]</th>
            <th>P [kW]</th>
            <th>Vmax [km/h]</th>
          </tr>
        </thead>
        <tbody>
          {SIMILAR_CARS.map(car => (
            <tr key={car.model}>
              <td>{car.model}</td>
              <td>{car.length_mm}</td>
              <td>{car.mass_kg}</td>
              <td>{car.power_kw}</td>
              <td>{car.Vmax_kmh}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
