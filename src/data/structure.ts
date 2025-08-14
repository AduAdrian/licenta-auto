import type { TreeNode } from '../types';

/**
 * Arborele complet al aplicației.
 * Conținutul este organizat pe:
 *  - Intro (Gantt, Metodologie)
 *  - Partea A (comun)
 *  - Partea B – două ramuri: Licență Sisteme (Automobile) și Licență Motoare
 *  - Partea C (tehnologie / diagnosticare)
 *  - Partea grafică – centralizare (opțional, pentru organizarea desenelor)
 *
 * Titlurile urmează capitolarea din ghidul programului Autovehicule Rutiere.
 */

export const TREE: TreeNode[] = [
  {
    title: 'Intro',
    slug: 'intro',
    tag: '0',
    children: [
      { title: 'Planning (diagrama Gantt)', slug: 'planning-gantt' },
      { title: 'Metodologia proiectului (flowchart)', slug: 'metodologie' }
    ]
  },

  // Partea A (comun)
  {
    title: 'Partea A — Studiul dinamic al automobilului (comun)',
    slug: 'partea-a',
    tag: 'A',
    children: [
      {
        title: '1. Studiul soluțiilor similare & tendințe',
        slug: '1-studiul-solutiilor-similare-si-tendinte',
        children: [
          {
            title: '1.1 Soluții similare',
            slug: '1-1-solutii-similare',
            children: [
              { title: '1.1.1 Parametri constructivi', slug: '1-1-1-parametri-constructivi' },
              { title: '1.1.2 Parametri energetici & de adaptare', slug: '1-1-2-parametri-energetici-adaptare' },
              { title: '1.1.3 Performanțe (viteză, demaraj, frânare)', slug: '1-1-3-performante' }
            ]
          },
          { title: '1.2 Tendințe de dezvoltare', slug: '1-2-tendinte-de-dezvoltare' }
        ]
      },
      {
        title: '2. Alegerea parametrilor principali ai autovehiculului',
        slug: '2-alegerea-parametrilor-principali',
        children: [
          {
            title: '2.1 Organizare generală & amenajare interioară',
            slug: '2-1-organizare-si-amenajare',
            children: [
              { title: '2.1.1 Dispunere echipament tracțiune', slug: '2-1-1-dispunere-echipament-tractiune' },
              { title: '2.1.2 Dimensiuni principale', slug: '2-1-2-dimensiuni-principale' },
              { title: '2.1.3 Ergonomia postului de conducere', slug: '2-1-3-ergonomia-postului' }
            ]
          },
          { title: '2.2 Masa, repartiția pe punți & coordonatele CG', slug: '2-2-masa-repartitie-si-cg' },
          { title: '2.3 Alegerea pneurilor & razele roților', slug: '2-3-alegerea-pneurilor-si-razele-rotile' }
        ]
      },
      {
        title: '3. Definirea condițiilor de autopropulsare',
        slug: '3-conditii-autopropulsare',
        children: [
          {
            title: '3.1 Rezistențele la înaintare',
            slug: '3-1-rezistente-la-inainatare',
            children: [
              { title: '3.1.1 Rezistența la rulare', slug: '3-1-1-rezistenta-la-rulare' },
              { title: '3.1.2 Rezistența aerului', slug: '3-1-2-rezistenta-aerului' },
              { title: '3.1.3 Rezistența la urcarea pantei', slug: '3-1-3-rezistenta-la-panta' },
              { title: '3.1.4 Rezistența la demarare', slug: '3-1-4-rezistenta-la-demaraj' }
            ]
          },
          {
            title: '3.2 Ecuația generală de mișcare',
            slug: '3-2-ecuatia-generala-miscare',
            children: [
              { title: '3.2.1 Forme particulare (viteză max., pornire/urcare)', slug: '3-2-1-forme-particulare' }
            ]
          }
        ]
      },
      {
        title: '4. Calculul de tracțiune',
        slug: '4-calculul-de-tractiune',
        children: [
          { title: '4.1 Randamentul transmisiei', slug: '4-1-randamentul-transmisiei' },
          {
            title: '4.2 Caracteristica exterioară a motorului',
            slug: '4-2-caracteristica-exterioara-motor',
            children: [
              { title: '4.2.1 Alegerea tipului motorului', slug: '4-2-1-alegerea-tipului-motorului' },
              { title: '4.2.2 Determinare analitică', slug: '4-2-2-determinare-analitica' }
            ]
          },
          {
            title: '4.3 Rapoartele de transmitere',
            slug: '4-3-rapoarte-de-transmitere',
            children: [
              { title: '4.3.1 Raport maxim (i_max)', slug: '4-3-1-raport-maxim' },
              { title: '4.3.2 Raport minim (i_min)', slug: '4-3-2-raport-minim' },
              { title: '4.3.3 Raport treapta I', slug: '4-3-3-raport-treapta-1' },
              { title: '4.3.4 Numar trepte & valori', slug: '4-3-4-numar-trepte-si-valori' }
            ]
          }
        ]
      }
    ]
  },

  // Partea B — Licență Sisteme (Automobile)
  {
    title: 'Partea B — Licență Sisteme (Automobile)',
    slug: 'licenta-sisteme',
    tag: 'B-Auto',
    children: [
      {
        title: '5. Performanțele automobilului',
        slug: '5-performantele-automobilului',
        children: [
          {
            title: '5.1 Dinamice de trecere',
            slug: '5-1-dinamice-de-trecere',
            children: [
              { title: '5.1.1 Bilanț de tracțiune & caracteristică', slug: '5-1-1-bilant-tractiune-si-caracteristica' },
              { title: '5.1.2 Bilanț de putere & caracteristica puterilor', slug: '5-1-2-bilant-putere-si-caracteristica' },
              { title: '5.1.3 Factor dinamic & caracteristică dinamică', slug: '5-1-3-factor-dinamic-si-caracteristica' }
            ]
          },
          {
            title: '5.2 Demarare',
            slug: '5-2-demarare',
            children: [
              { title: '5.2.1 Accelerație & caracteristica accelerațiilor', slug: '5-2-1-acceleratie-si-caracteristica' },
              { title: '5.2.3 Timp & spațiu de demarare', slug: '5-2-3-timp-si-spatiu-de-demarare' }
            ]
          },
          {
            title: '5.3 Frânare',
            slug: '5-3-franare',
            children: [
              { title: '5.3.1 Capacitatea de decelerare', slug: '5-3-1-capacitatea-de-decelerare' },
              { title: '5.3.2 Timp & spațiu de frânare', slug: '5-3-2-timp-si-spatiu-de-franare' }
            ]
          }
        ]
      },
      {
        title: '6. Ambreiaj — calcul & construcție',
        slug: '6-ambreiaj',
        children: [
          {
            title: '6.1 Studiu soluții similare',
            slug: '6-1-studiu-solutii',
            children: [
              { title: '6.1.1 Soluții similare', slug: '6-1-1-solutii-similare' },
              { title: '6.1.2 Soluția adoptată', slug: '6-1-2-solutia-adoptata' }
            ]
          },
          {
            title: '6.2 Elemente de calcul',
            slug: '6-2-elemente-de-calcul',
            children: [
              { title: '6.2.1 Parametri principali', slug: '6-2-1-parametri-principali' },
              { title: '6.2.2 Dimensionarea suprafețelor de frecare', slug: '6-2-2-dimensionare-suprafete-frecare' },
              { title: '6.2.3 Calculul discului de presiune', slug: '6-2-3-calcul-discului-de-presiune' },
              { title: '6.2.4 Calculul părții conduse', slug: '6-2-4-calcul-partii-conduse' }
            ]
          },
          { title: '6.3 Mecanismul de acționare', slug: '6-3-mecanism-actionare' }
        ]
      },
      {
        title: '7. Cutia de viteze — calcul & construcție',
        slug: '7-cutie-de-viteze',
        children: [
          {
            title: '7.1 Studiu soluții similare',
            slug: '7-1-studiu-solutii',
            children: [
              { title: '7.1.1 Soluții similare', slug: '7-1-1-solutii-similare' },
              { title: '7.1.2 Soluția adoptată', slug: '7-1-2-solutia-adoptata' }
            ]
          },
          {
            title: '7.2 Elemente de calcul',
            slug: '7-2-elemente-de-calcul',
            children: [
              { title: '7.2.1 Predimensionarea angrenajelor', slug: '7-2-1-predimensionare-angrenaje' },
              { title: '7.2.2 Elemente geometrice ale roților dințate', slug: '7-2-2-elemente-geometrice' },
              { title: '7.2.3 Rezistență & durabilitate angrenaje', slug: '7-2-3-rezistenta-si-durabilitate' },
              { title: '7.2.4 Arbori — calcul & verificare', slug: '7-2-4-arbori' },
              { title: '7.2.5 Alegerea lagărelor', slug: '7-2-5-lagare' }
            ]
          }
        ]
      },
      {
        title: '8. Transmisie longitudinală — calcul & construcție',
        slug: '8-transmisie-longitudinala',
        children: [
          {
            title: '8.1 Studiu soluții similare',
            slug: '8-1-studiu-solutii',
            children: [
              { title: '8.1.1 Soluții similare', slug: '8-1-1-solutii-similare' },
              { title: '8.1.2 Soluția adoptată', slug: '8-1-2-solutia-adoptata' }
            ]
          },
          {
            title: '8.2 Elemente de calcul',
            slug: '8-2-elemente-de-calcul',
            children: [
              { title: '8.2.1 Moment de calcul & arbori', slug: '8-2-1-moment-si-arbori' },
              { title: '8.2.2 Cuplaj unghiular cardanic', slug: '8-2-2-cuplaj-cardanic' },
              { title: '8.2.3 Alegerea lagărelor', slug: '8-2-3-lagare' }
            ]
          }
        ]
      },
      {
        title: '9. Punte motoare — calcul & construcție',
        slug: '9-punte-motoare',
        children: [
          {
            title: '9.1 Studiu soluții similare',
            slug: '9-1-studiu-solutii',
            children: [
              { title: '9.1.1 Soluții similare', slug: '9-1-1-solutii-similare' },
              { title: '9.1.2 Soluția adoptată', slug: '9-1-2-solutia-adoptata' }
            ]
          },
          {
            title: '9.2 Transmisia principală',
            slug: '9-2-transmisia-principala',
            children: [
              { title: '9.2.1 Schema de organizare', slug: '9-2-1-schema' },
              { title: '9.2.2 Elemente de calcul (moment, angrenaj)', slug: '9-2-2-elemente-de-calcul' }
            ]
          },
          {
            title: '9.3 Diferențialul',
            slug: '9-3-diferentialul',
            children: [
              { title: '9.3.1 Schema de organizare', slug: '9-3-1-schema' },
              { title: '9.3.2 Elemente de calcul', slug: '9-3-2-elemente-de-calcul' }
            ]
          },
          {
            title: '9.4 Transmisia la roțile motoare',
            slug: '9-4-transmisia-la-rotile-motoare',
            children: [
              { title: '9.4.1 Tip butuc & schema', slug: '9-4-1-tip-butuc-si-schema' },
              { title: '9.4.2 Elemente de calcul (mărimi, rezistență)', slug: '9-4-2-elemente-de-calcul' }
            ]
          },
          {
            title: '9.5 Mecanismul de ghidare al punții',
            slug: '9-5-mecanism-ghidare-punte',
            children: [
              { title: '9.5.1 Tip & schema', slug: '9-5-1-tip-si-schema' },
              { title: '9.5.2 Elemente de calcul (forțe, elemente)', slug: '9-5-2-elemente-de-calcul' }
            ]
          }
        ]
      },
      {
        title: '10. Sistemul de direcție',
        slug: '10-directie',
        children: [
          {
            title: '10.1 Studiu soluții similare',
            slug: '10-1-studiu-solutii',
            children: [
              { title: '10.1.1 Soluții similare', slug: '10-1-1-solutii-similare' },
              { title: '10.1.2 Soluția adoptată', slug: '10-1-2-solutia-adoptata' }
            ]
          },
          { title: '10.2 Organizare generală', slug: '10-2-organizare-generala' },
          {
            title: '10.3 Elemente de calcul',
            slug: '10-3-elemente-de-calcul',
            children: [
              { title: '10.3.1 Rapoarte de transmitere', slug: '10-3-1-rapoarte' },
              { title: '10.3.2 Randamente', slug: '10-3-2-randamente' },
              { title: '10.3.3 Mărimi de calcul', slug: '10-3-3-marimi' },
              { title: '10.3.4 Rezistență mecanism direcție', slug: '10-3-4-rezistenta' }
            ]
          }
        ]
      },
      {
        title: '11. Sistemul de frânare',
        slug: '11-franare',
        children: [
          {
            title: '11.1 Studiu soluții similare',
            slug: '11-1-studiu-solutii',
            children: [
              { title: '11.1.1 Soluții similare', slug: '11-1-1-solutii-similare' },
              { title: '11.1.2 Soluția adoptată', slug: '11-1-2-solutia-adoptata' }
            ]
          },
          { title: '11.2 Organizare generală', slug: '11-2-organizare-generala' },
          {
            title: '11.3 Elemente de calcul',
            slug: '11-3-elemente-de-calcul',
            children: [
              { title: '11.3.1 Regimuri de calcul', slug: '11-3-1-regimuri' },
              { title: '11.3.2 Repartiții momente pe punți/roți', slug: '11-3-2-repartitii-momente' },
              { title: '11.3.3 Momente capabile & predimensionare', slug: '11-3-3-momente-capabile' },
              { title: '11.3.4 Verificarea frânelor', slug: '11-3-4-verificare' }
            ]
          }
        ]
      },
      {
        title: '12. Suspensia (față/spate)',
        slug: '12-suspensie',
        children: [
          {
            title: '12.1 Studiu soluții similare',
            slug: '12-1-studiu-solutii',
            children: [
              { title: '12.1.1 Soluții similare', slug: '12-1-1-solutii-similare' },
              { title: '12.1.2 Soluția adoptată', slug: '12-1-2-solutia-adoptata' }
            ]
          },
          { title: '12.2 Caracteristica redusă la roată', slug: '12-2-caracteristica-redusa-la-roata' },
          {
            title: '12.3 Elemente de calcul',
            slug: '12-3-elemente-de-calcul',
            children: [
              { title: '12.3.1 Calculul arcurilor', slug: '12-3-1-arcuri' },
              { title: '12.3.2 Calculul amortizoarelor', slug: '12-3-2-amortizoare' }
            ]
          }
        ]
      },
      { title: '13. Concluzii finale (Automobile)', slug: '13-concluzii-finale-automobile' }
    ]
  },

  // Partea B — Licență Motoare
  {
    title: 'Partea B — Licență Motoare',
    slug: 'licenta-motoare',
    tag: 'B-Motoare',
    children: [
      {
        title: '5. Calculul motorului',
        slug: '5-calculul-motorului',
        children: [
          {
            title: '5.1 Parametri principali & soluții constructive',
            slug: '5-1-parametri-si-constructie',
            children: [
              { title: '5.1.1 Soluții similare de motoare', slug: '5-1-1-solutii-similare-motoare' },
              { title: '5.1.2 Soluția adoptată', slug: '5-1-2-solutia-adoptata' }
            ]
          },
          {
            title: '5.2 Calcul termic',
            slug: '5-2-calcul-termic',
            children: [
              { title: '5.2.1 Admisie', slug: '5-2-1-admisie' },
              { title: '5.2.2 Comprimare', slug: '5-2-2-comprimare' },
              { title: '5.2.3 Ardere', slug: '5-2-3-ardere' },
              { title: '5.2.4 Destindere', slug: '5-2-4-destindere' },
              { title: '5.2.5 Indici de perfecțiune', slug: '5-2-5-indici-de-perfectiune' },
              { title: '5.2.6 Bilanț termic', slug: '5-2-6-bilant-termic' }
            ]
          },
          {
            title: '5.3 Calcul cinematic',
            slug: '5-3-calcul-cinematic',
            children: [
              { title: '5.3.1 Cinematica pistonului', slug: '5-3-1-cinematica-pistonului' },
              { title: '5.3.2 Cinematica bielei', slug: '5-3-2-cinematica-bielei' }
            ]
          },
          {
            title: '5.4 Calcul dinamic',
            slug: '5-4-calcul-dinamic',
            children: [
              { title: '5.4.1 Forța de presiune a gazelor', slug: '5-4-1-forta-presiune-gaze' },
              { title: '5.4.2 Forțe de inerție', slug: '5-4-2-forte-de-inertie' },
              { title: '5.4.3 Forțe rezultante în mecanismul motor', slug: '5-4-3-forte-rezultante' },
              { title: '5.4.4 Moment motor sumar & putere indicată', slug: '5-4-4-moment-sumar-si-putere-indicata' },
              { title: '5.4.5 Uniformizarea mișcării & calcul volant', slug: '5-4-5-uniformizare-si-volant' }
            ]
          }
        ]
      },
      { title: '6. Mecanismul motor — calcul & construcție', slug: '6-mecanismul-motor' },
      {
        title: '7. Distribuția gazelor — calcul & construcție',
        slug: '7-distributie-gaze',
        children: [
          { title: '7.1 Înălțimea maximă de ridicare a supapelor', slug: '7-1-inaltime-maxima-supape' },
          { title: '7.2 Calculul arcului de supapă (lege impusă)', slug: '7-2-arc-supapa-lege-impusa' }
        ]
      },
      {
        title: '8. Sistem de răcire — calcul & construcție',
        slug: '8-sistem-de-racire',
        children: [
          { title: '8.1 Sistemul adoptat', slug: '8-1-sistem-adoptat' },
          { title: '8.2 Dimensionarea radiatorului sau a pompei', slug: '8-2-dimensionare-radiator-sau-pompa' }
        ]
      },
      {
        title: '9. Sistem de ungere — calcul & construcție',
        slug: '9-sistem-de-ungere',
        children: [
          { title: '9.1 Sistemul adoptat', slug: '9-1-sistem-adoptat' },
          { title: '9.2 Pompa de ulei & supapă de siguranță', slug: '9-2-pompa-si-supapa' }
        ]
      },
      {
        title: '10. Alimentare cu combustibil — calcul & construcție',
        slug: '10-alimentare',
        children: [
          { title: '10.1 Sistemul adoptat', slug: '10-1-sistem-adoptat' },
          { title: '10.2 Pompa de alimentare sau injector', slug: '10-2-pompa-sau-injector' }
        ]
      },
      {
        title: '11. Supraalimentare (dacă există)',
        slug: '11-supraalimentare',
        children: [
          { title: '11.1 Sistemul adoptat', slug: '11-1-sistem-adoptat' },
          { title: '11.2 Autoreglare (waste-gate / G.V.)', slug: '11-2-autoreglare' },
          { title: '11.3 Răcitor intermediar (RAS)', slug: '11-3-ras' }
        ]
      },
      {
        title: '12. Sistem de pornire — calcul & construcție',
        slug: '12-pornire',
        children: [
          { title: '12.1 Sistemul adoptat', slug: '12-1-sistem-adoptat' },
          { title: '12.2 Dimensionarea demarorului', slug: '12-2-dimensionare-demaror' }
        ]
      },
      { title: '13. Concluzii finale (Motoare)', slug: '13-concluzii-finale-motoare' }
    ]
  },

  // Partea C (tehnologie / diagnosticare)
  {
    title: 'Partea C — Tehnologie / Diagnosticare',
    slug: 'partea-c',
    tag: 'C',
    children: [
      {
        title: '14. Tehnologie de fabricație / reparație',
        slug: '14-tehnologie-fabricatie',
        children: [
          { title: '14.1 Descriere proces tehnologic', slug: '14-1-descriere-proces' },
          { title: '14.2 Itinerariu tehnologic', slug: '14-2-itinerariu-tehnologic' }
        ]
      },
      {
        title: '14. Tehnologie de diagnosticare (sistem tratat)',
        slug: '14-tehnologie-diagnosticare',
        children: [
          { title: '14.1 Metodologie: scheme logice', slug: '14-1-metodologie-scheme' },
          { title: '14.2 Fișa de observație', slug: '14-2-fisa-de-observatie' }
        ]
      },
      { title: 'Raport de practică (dacă este cazul)', slug: 'raport-de-practica' }
    ]
  },

  // Centralizare parte grafică (opțional)
  {
    title: 'Partea grafică — centralizare',
    slug: 'partea-grafica-centralizare',
    children: [
      { title: 'Planșă A1/A2 ansamblu vehicul', slug: 'plansha-ansamblu-vehicul' },
      { title: 'Diagrame §5.1–5.3 (performanțe)', slug: 'diagrame-performante' },
      { title: 'Desene subansamble (secțiuni principale)', slug: 'desene-subansamble' },
      { title: 'Desen ansamblu suspensie', slug: 'desen-ansamblu-suspensie' }
    ]
  }
];
