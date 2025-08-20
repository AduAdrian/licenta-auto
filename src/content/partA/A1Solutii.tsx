// src/content/partA/A1Solutii.tsx
// src/content/partA/A1Solutii.tsx
import React, { useRef, useState } from 'react';
import { SIMILAR_CARS, SimilarCar } from '../../data/solutii_similare';

export default function A1Solutii() {
  const [cars, setCars] = useState<SimilarCar[]>(SIMILAR_CARS);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = evt => {
      const data = evt.target?.result;
      try {
        const workbook = (window as any).XLSX.read(data, { type: 'binary' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows: any[] = (window as any).XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const [header, ...rest] = rows;
        const idx = {
          model: header.findIndex((h: string) => /model/i.test(h)),
          length: header.findIndex((h: string) => /l.*mm/i.test(h)),
          mass: header.findIndex((h: string) => /mas.*kg/i.test(h)),
          power: header.findIndex((h: string) => /puter/i.test(h)),
          vmax: header.findIndex((h: string) => /v.*max/i.test(h)),
        };

        const parsed: SimilarCar[] = rest
          .map(row => ({
            model: row[idx.model],
            length_mm: Number(row[idx.length]),
            mass_kg: Number(row[idx.mass]),
            power_kw: Number(row[idx.power]),
            Vmax_kmh: Number(row[idx.vmax]),
          }))
          .filter(car => car.model);

        if (parsed.length) setCars(parsed);
      } catch (err) {
        console.error('Eroare la citirea fișierului Excel', err);
      }
    };

    reader.readAsBinaryString(file);
  };

  return (
    <>
      <h2>Soluții similare</h2>
      <p>Date preluate din Macarie pentru comparație între modele M1.</p>
      <input
        ref={fileInputRef}
        type="file"
        accept=".xls,.xlsx"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button onClick={() => fileInputRef.current?.click()}>Încarcă tabel Excel</button>
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
          {cars.map(car => (
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
