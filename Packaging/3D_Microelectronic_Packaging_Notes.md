# 3D Microelectronic Packaging — Reading Notes

## Micro Raman Spectroscopy

- **[Ch.4]** Common use involves backscatter mode to resolve the longitudinal vibrational mode (mode 3) to determine the sum of the two in-plane principal stresses. If high NA (>0.4) is used, it is possible to resolve all three modes of vibration and hence the tensorial nature of stresses in structures. *(2026-06-25)*

- **[Ch.4]** Compressive and tensile stresses in Si lead to forward and backward shifts in the Raman signal. A shift of 1 cm⁻¹ corresponds to a stress of ~434 MPa; the shift is directly proportional to stress in Si. *(2026-06-25)*

- **[Ch.4]** Penetration depth in backscatter configuration is very small — method is used to obtain stress information from near-surface regions only. Stress state in Si wafer is generally tri-axial; measuring all stress components via Raman spectroscopy is challenging and requires combination with FEA to yield good estimates of 3D stress states in the wafer. *(2026-06-25)*

---

## Stresses in TSVs

### Origin and Effects of Stresses

- **[Ch.4]** Two sources of stress in TSVs: *(2026-06-25)*
  1. **Growth stresses** — arise as a result of via filling by electroplating.
  2. **Thermo-mechanical stresses** — arise due to thermal expansion mismatch between Cu in the via and the surrounding Si.

- **[Ch.4]** Growth stresses: electrodeposited Cu grows radially inwards on the Cu-seed layer from the via sidewalls and abuts itself, often resulting in a seam along the TSV axis — leaving a thin void line that can grow during post-deposition annealing, resulting in mechanical and electrical performance loss. Electroplated Cu undergoes significant grain growth by self-annealing at room temperature, resulting in volume shrinkage (elimination of grain boundaries), allowing existing voids to grow during self-annealing and pre-CMP annealing. During annealing, hydrostatic stress gradients around pre-existing defects may be relieved by diffusion of lattice vacancies towards existing voids, causing void growth. *(2026-06-25)*

- **[Ch.4]** Thermo-mechanical stresses: arise from differential thermal expansion/contraction of Cu and Si during heating or cooling due to their large CTE difference. Thermal cycling from fluctuating Joule heating occurs continually during device service life — 3D devices are no exception. *(2026-06-25)*

- **[Ch.4]** Electroplated Cu deposited on Si is under residual tension at ambient temperature. During heating, tension is first elastically relieved, then compressive stress builds up. As temperature increases, yield strength and creep resistance of Cu decrease, resulting in stress relief by plastic yielding and creep — at the highest temperature, little stress remains. *(2026-06-25)*

- **[Ch.4]** Thermal cycling leads to accumulation of hydrostatic stress in Cu TSV filler. TSVs with high impurity levels appear to lead to high residual stresses. Large tensile radial stresses exist at the Si-Cu interface — making these sites prone to failure. Radial stress at the Cu filler/Si interface generally increases with TSV length for a given diameter. The dependence of hydrostatic stress on TSV diameter is not monotonic. *(2026-06-25)*

- **[Ch.4]** Stresses near the surface of Si adjacent to Cu-filled TSVs adversely impact the electrical performance of nearby devices due to **induced piezoresistivity**, which degrades carrier mobility. This necessitates a **keep-out zone (KOZ)** — typically a few micrometres wide — in the immediate vicinity of each TSV where active devices cannot be placed. KOZ scales with the square of the TSV diameter; it is greater for high aspect ratio TSVs and places significant overhead on the area available for active devices, particularly as TSV density increases. *(2026-06-25)*

---

### Microstructure and Stresses

- **[Ch.4]** Direct measurement of stresses in Cu-TSVs with X-ray micro-diffraction reveals: significant hydrostatic stress (~234 MPa tensile) at room temperature → compression (−196 MPa) during annealing at 200°C → smaller tensile stress (~167 MPa) upon cooling to ambient. Larger initial tensile stress is caused by grain boundary elimination during self-annealing and device fabrication — undesirable from a reliability perspective as it causes large stresses in Si. Subsequent annealing lowers the tensile hydrostatic stress in Cu, possibly due to relaxation from plasticity and creep at high temperature. *(2026-06-25)*

- **[Ch.4]** Cu-TSV has random texture both before and after annealing. Microvoids or small cracks have been noted to form during annealing, thereby reducing stress — possibly due to vacancy diffusion to pre-existing defects under hydrostatic stress gradients within the TSV. *(2026-06-25)*

- **[Ch.4]** FEA-based modelling demonstrates a linkage between Cu grain microstructure and stress in Cu-TSV: a linear elastic mechanical model clearly shows that stress distribution is rather heterogeneous inside the TSV filler. *(2026-06-25)*

- **[Ch.4]** Fig. 4.11 — Distribution of von Mises stress in a Cu-TSV structure from a linear elastic mechanical model with Cu grain microstructure [45]: *(2026-06-25)*

  ```
  Von Mises Stress Distribution (Cu-TSV Cross-Section)
  ─────────────────────────────────────────────────────
  Y (µm)
   80 ┤ ░░░░░ [Cu TSV - grain boundaries visible] ░░░░░
   70 ┤ ▓▓▓▓▓ [heterogeneous stress field across    ▓▓▓▓▓
   60 ┤ ▓▓▓▓▓  individual grains — stress peaks     ▓▓▓▓▓
   50 ┤ ▓▓▓▓▓  at grain boundaries and near         ▓▓▓▓▓
   40 ┤ ▓▓▓▓▓  TSV-Si interface]                    ▓▓▓▓▓
   30 ┤ ▓▓▓▓▓                                       ▓▓▓▓▓
   20 ┤ ▓▓▓▓▓ [High stress ~350 MPa at corners]     ▓▓▓▓▓
   10 ┤ ░░░░░ [Si regions flanking TSV]             ░░░░░
    0 └────────────────────────────────────────────────
      0       10      20      30      40      50   X (µm)

  Stress scale (MPa):
  ████ ~350   ████ ~125   ████ ~100   ████ ~75
  ████ ~50    ████ ~25    ████ ~0

  Key observations:
  • Highest von Mises stress (~350 MPa) localised at TSV corners
    and near the Cu-Si interface extremities
  • Interior Cu grains show heterogeneous stress distribution
    (50–125 MPa) due to grain microstructure
  • Si regions flanking the TSV show low stress (~0–25 MPa)
    transitioning to higher values further away
  • Stress concentration at grain boundaries within the Cu filler
    is clearly visible, consistent with the linear elastic model
  ```

---

### Metal Pumping: Extrusion or Intrusion of TSVs

- **[Ch.4]** During service and thermal cycling, CTE mismatch between Cu and Si results in residual stresses and significant shear stress near the extremities of the via. If induced stress is high enough, it may cause **plastic deformation** of the filler — with differential straining between Cu and Si sometimes accommodated by **interfacial sliding**, resulting in **extrusion** (and sometimes intrusion) of Cu relative to Si. Extrusion typically occurs near via-ends (towards the top or mouth of the via) and can be enhanced by creep and grain boundary sliding. *(2026-06-25)*

---

## TSV Design & Fabrication


## Bonding & Interconnect Technologies


## Thermal Management in 3D Packages


## Reliability & Failure Mechanisms


## General / Miscellaneous

