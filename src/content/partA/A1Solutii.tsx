// src/content/partA/A1Solutii.tsx
import React, { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import { SIMILAR_CARS, SimilarCar } from '../../data/solutii_similare';

export default function A1Solutii() {
  const [rows, setRows] = useState<SimilarCar[]>(SIMILAR_CARS);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = evt => {
      const data = evt.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const ws = workbook.Sheets[workbook.SheetNames[0]];
      const json: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' });
      const parsed: SimilarCar[] = json.map(row => ({
        model: String(row['Nr.'] || row['Model'] || ''),
        length_mm: Number(row['Lungimea [mm]'] || row['L [mm]'] || 0),
        mass_kg: Number(row['Masa proprie [kg]'] || row['m [kg]'] || 0),
        power_kw: Number(row['Puterea motorului [kw]'] || row['P [kW]'] || 0),
        Vmax_kmh: Number(row['Viteza maxima [km/h]'] || row['Vmax [km/h]'] || 0),
      }));
      setRows(parsed);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <>
      <h2>Soluții similare</h2>
      <p>Date preluate din Macarie pentru comparație între modele M1.</p>
      <button onClick={() => fileInputRef.current?.click()}>Încarcă Excel</button>
      <input
        type="file"
        accept=".xls,.xlsx"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
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
          {rows.map(car => (
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
