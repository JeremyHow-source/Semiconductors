# 3D Microelectronic Packaging — Reading Notes

## Micro Raman Spectroscopy

- **[Ch.4]** Common use involves backscatter mode to resolve the longitudinal vibrational mode (mode 3) to determine the sum of the two in-plane principal stresses. If high NA (>0.4) is used, it is possible to resolve all three modes of vibration and hence the tensorial nature of stresses in structures. *(2026-07-23)*

- **[Ch.4]** Compressive and tensile stresses in Si lead to forward and backward shifts in the Raman signal. A shift of 1 cm⁻¹ corresponds to a stress of ~434 MPa; the shift is directly proportional to stress in Si. *(2026-07-23)*

- **[Ch.4]** Penetration depth in backscatter configuration is very small — method is used to obtain stress information from near-surface regions only. Stress state in Si wafer is generally tri-axial; measuring all stress components via Raman spectroscopy is challenging and requires combination with FEA to yield good estimates of 3D stress states in the wafer. *(2026-07-23)*

---

## Stresses in TSVs

### Origin and Effects of Stresses

- **[Ch.4]** Two sources of stress in TSVs: *(2026-07-23)*
  1. **Growth stresses** — arise as a result of via filling by electroplating.
  2. **Thermo-mechanical stresses** — arise due to thermal expansion mismatch between Cu in the via and the surrounding Si.

- **[Ch.4]** Growth stresses: electrodeposited Cu grows radially inwards on the Cu-seed layer from the via sidewalls and abuts itself, often resulting in a seam along the TSV axis — leaving a thin void line that can grow during post-deposition annealing, resulting in mechanical and electrical performance loss. Electroplated Cu undergoes significant grain growth by self-annealing at room temperature, resulting in volume shrinkage (elimination of grain boundaries), allowing existing voids to grow during self-annealing and pre-CMP annealing. During annealing, hydrostatic stress gradients around pre-existing defects may be relieved by diffusion of lattice vacancies towards existing voids, causing void growth. *(2026-07-23)*

- **[Ch.4]** Thermo-mechanical stresses: arise from differential thermal expansion/contraction of Cu and Si during heating or cooling due to their large CTE difference. Thermal cycling from fluctuating Joule heating occurs continually during device service life — 3D devices are no exception. *(2026-07-23)*

- **[Ch.4]** Electroplated Cu deposited on Si is under residual tension at ambient temperature. During heating, tension is first elastically relieved, then compressive stress builds up. As temperature increases, yield strength and creep resistance of Cu decrease, resulting in stress relief by plastic yielding and creep — at the highest temperature, little stress remains. *(2026-07-23)*

- **[Ch.4]** Thermal cycling leads to accumulation of hydrostatic stress in Cu TSV filler. TSVs with high impurity levels appear to lead to high residual stresses. Large tensile radial stresses exist at the Si-Cu interface — making these sites prone to failure. Radial stress at the Cu filler/Si interface generally increases with TSV length for a given diameter. The dependence of hydrostatic stress on TSV diameter is not monotonic. *(2026-07-23)*

- **[Ch.4]** Stresses near the surface of Si adjacent to Cu-filled TSVs adversely impact the electrical performance of nearby devices due to **induced piezoresistivity**, which degrades carrier mobility. This necessitates a **keep-out zone (KOZ)** — typically a few micrometres wide — in the immediate vicinity of each TSV where active devices cannot be placed. KOZ scales with the square of the TSV diameter; it is greater for high aspect ratio TSVs and places significant overhead on the area available for active devices, particularly as TSV density increases. *(2026-07-23)*

---

### Microstructure and Stresses

- **[Ch.4]** Direct measurement of stresses in Cu-TSVs with X-ray micro-diffraction reveals: significant hydrostatic stress (~234 MPa tensile) at room temperature → compression (−196 MPa) during annealing at 200°C → smaller tensile stress (~167 MPa) upon cooling to ambient. Larger initial tensile stress is caused by grain boundary elimination during self-annealing and device fabrication — undesirable from a reliability perspective as it causes large stresses in Si. Subsequent annealing lowers the tensile hydrostatic stress in Cu, possibly due to relaxation from plasticity and creep at high temperature. *(2026-07-23)*

- **[Ch.4]** Cu-TSV has random texture both before and after annealing. Microvoids or small cracks have been noted to form during annealing, thereby reducing stress — possibly due to vacancy diffusion to pre-existing defects under hydrostatic stress gradients within the TSV. *(2026-07-23)*

- **[Ch.4]** FEA-based modelling demonstrates a linkage between Cu grain microstructure and stress in Cu-TSV: a linear elastic mechanical model clearly shows that stress distribution is rather heterogeneous inside the TSV filler. *(2026-07-23)*

- **[Ch.4]** Fig. 4.11 — Distribution of von Mises stress in a Cu-TSV structure from a linear elastic mechanical model with Cu grain microstructure [45]: *(2026-07-23)*

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

- **[Ch.4]** During service and thermal cycling, CTE mismatch between Cu and Si results in residual stresses and significant shear stress near the extremities of the via. If induced stress is high enough, it may cause **plastic deformation** of the filler — with differential straining between Cu and Si sometimes accommodated by **interfacial sliding**, resulting in **extrusion** (and sometimes intrusion) of Cu relative to Si. Extrusion typically occurs near via-ends (towards the top or mouth of the via) and can be enhanced by creep and grain boundary sliding. *(2026-07-23)*

- **[Ch.4]** Since the CTE of Cu ($16.5 \times 10^{-6}/\text{K}$) is much larger than that of Si ($2.6 \times 10^{-6}/\text{K}$), cooling from elevated temperature causes significant relative shrinkage of Cu, which can also be accommodated at the interface by sliding. While shrinkage stems from Cu deformation, the interfacial step arises from diffusionally accommodated interfacial sliding. The rate of via-end protrusion or intrusion during thermal cycling decreases with increasing number of cycles as metal filler stress reaches saturation due to progressive strain hardening. *(2026-07-23)*

- **[Ch.4]** A majority of Cu-pumping is observed to be uniform/global ($\sim 10\text{--}30\text{ nm}$ protrusion), with relatively few TSVs showing extrusion of individual grains after high-temperature annealing. Via spacing has little to no effect, but pumping is larger on average for larger via diameters. However, maximum Cu pumping appears independent of TSV diameter, suggesting TSV diameter has minimal impact on BEOL reliability. *(2026-07-23)*

---

### Heating Rate Dependence of Copper Pumping

- **[Ch.4]** Influence of heating rate during *in situ* heating has been reported on dies with $200\ \mu\text{m}$ pitch TSV arrays rapidly heated at $0.1\ ^\circ\text{C/sec}$ to $300\ ^\circ\text{C}$ and further to $425\ ^\circ\text{C}$ at various heating rates. *(2026-07-23)*

- **[Ch.4]** Fig. 4.23 — Schematically shown TSV protrusion mechanisms correlated to heating rate and thermal cycling temperature range: *(2026-07-23)*

  ```
  Heating Rate vs. Thermal Cycling Temperature Range (TSV Protrusion Mechanisms)
  ─────────────────────────────────────────────────────────────────────────────
  ▲ Heating Rate
  │
  │  ┌─────────────────────────┐         ┌─────────────────────────┐
  │  │ High Heating Rate /     │ ───►    │ Rapid Heating & Mod.    │
  │  │ Small Thermal Excursion │         │ Large Temp. Excursions  │
  │  └─────────────────────────┘         └─────────────────────────┘
  │  • Rate-independent                  • Stress relief restricted
  │    plasticity dominates              • High temp allows diffusion
  │  • Smooth overall curvature          • Grain boundary sliding &
  │    at TSV top surface                  creep deformation dominate
  │                                      • Individual grain extrusion
  │
  │                                      ┌─────────────────────────┐
  │                                ───►  │ Slow Heating Rate &     │
  │                                      │ High Temperatures       │
  │                                      └─────────────────────────┘
  │                                      • Interfacial sliding only
  │                                        becomes dominant here
  │                                      • Uniform vertical step
  │                                        protrusion at interface
  │
  └─────────────────────────────────────────────────────────────────────────────►
                       Thermal Cycling Temperature Range

  Visual Diagrams & SEM Profiles (Fig. 4.23):

  [1] High Heating Rate (Small Excursion)   [2] Rapid Heating (Mod. Excursion)   [3] Slow Heating (High Temp)
      ┌───────────┐                            ┌─┬─┬───┬─┐                           ┌───────────┐
      │  ╭─────╮  │                            │ █ │ █ █ │ █ │                           │ │       │ │
   ───┴──┴─────┴──┴───                      ───┴─┴─┴───┴─┴─┴───                       ───┴─┴───────┴─┴───
       [Si] [Cu] [Si]                           [Si] [Cu] [Si]                            [Si] [Cu] [Si]
   • Overall curved dome                    • Extruded individual grains             • Uniform interfacial step
   • Plasticity-dominated                   • Grain boundary sliding                 • Interfacial sliding-dominated
  ```

---

### Electromigration-Related Effects

- **[Ch.4]** TSVs are generally less susceptible to electromigration (EM) induced failures due to their relatively large cross-sections (which reduces current density). However, the combination of electric current and complex stress states at the top and bottom junctions with BEOL or RDL structures induces substantial diffusional effects and EM-related void growth. *(2026-07-23)*

- **[Ch.4]** Finite Element Analysis (FEA) evaluating the effects of stress gradient, potential gradient, and temperature gradient on Atomic Flux Divergence (AFD) indicates that AFD peaks where top/bottom metallizations meet the TSV. A large proportion of AFD is driven by Joule-heating-induced stress gradients, with relatively little contribution from electric potential gradients. *(2026-07-23)*

- **[Ch.4]** EM experiments on devices with thin as well as thick metal layers at top and bottom of TSVs show no EM void formation inside the TSV bulk regardless of current flow direction. Voids consistently form downstream of electron flow direction at the intersection between TSV end and RDL metal layer. *(2026-07-23)*

- **[Ch.4]** **Void Nucleation Mechanism**: Hypothesised that voids nucleate because migration of Cu atoms from TSV to void is blocked by the TiN diffusion barrier layer, while migration out of the void region into RDL Cu lines continues. Thus, the TiN layer—acting as an effective diffusion barrier—paradoxically becomes the root cause of EM void nucleation. *(2026-07-23)*

- **[Ch.4]** **Line Thickness & Current Crowding**:
  - In *thin Cu lines*, voids span the entire line thickness (between TiN barrier and SiN capping layer). Current crowding at electron exit points is higher for thicker lines, meaning thicker lines do not mitigate voiding.
  - In *thick lines*, voids form at the TiN/Cu-line interface. Backside Cu line voiding below TSVs occurs downstream of electron flow at the SiN/Cu interface (rather than TiN/Cu). Pre-existing small voids inside TSVs remain unaltered during EM. BEOL and RDL structures remain severely affected despite TSV bulk immunity. *(2026-07-23)*

- **[Ch.4]** **EM-Induced Interfacial Sliding**:
  - Electric currents modify interfacial sliding kinetics via shear stress (enhancing or mitigating sliding depending on field direction). Even without interfacial shear stress, EM can drive sliding along the TSV/barrier interface.
  - Unlike symmetric thermal cycling, EM-induced sliding is non-symmetric (causing via protrusion downstream of electron flow and intrusion at the opposite end). It accrues continuously during operation, posing severe reliability risks as TSV diameters shrink and current densities rise. *(2026-07-23)*

- **[Ch.4]** **EM Damage Mechanisms under Extreme Exposure**:
  - In Si interposers with BEIS on top and RDL/bond pad/solder joint at bottom, protrusion/intrusion is suppressed by constraint structures. Under extreme conditions ($1.5 \times 10^5\text{ A/cm}^2$ at 200°C for 20 days), two dominant damage mechanisms occur:
    1. **M1 Voiding**: Voids form in Metal-1 (M1) layer where electron current crowds upon exiting the TSV before turning $90^\circ$ and fanning out.
    2. **Sn Electromigration**: Sn electromigrates from the Sn-based solder ball, through bottom metallization, along the TSV-Si interface, and into the TSV filler. *(2026-07-23)*

- **[Ch.4]** Fig. 4.27 — FIB cross-section and Sn Kα EDS map of TSV under extreme EM exposure ($1.5 \times 10^5\text{ A/cm}^2$, 200°C, 20 days): *(2026-07-23)*

  ```
  Fig. 4.27 — EM Damage & Sn Migration near TSV Top / BEOL Interface
  ─────────────────────────────────────────────────────────────────────────────
  (a) FIB Cross-Sectional Diagram & Voiding in M1 Layer:

        BEOL Layers  [ M3 / M2 Interconnects ]
       ═════════════════════════════════════════════
        M1 Layer     ┌─────┐   [Void ⚡] ◄── Red Arrow (M1 Voiding)
       ──────────────┴─┐   └───┬─────────
                       │   e⁻  │  ◄── 90° Electron Turn (Current Crowding)
                       │   ▲   │
                       │   │   │  ◄── Upward Electron Flow through TSV
                       │  TSV  │
                       │  Cu   │
                       │Filler │
       ────────────────┴───────┴───────────────── [Si Substrate]
                       (5 µm Scale)

  (b) Sn Kα EDS X-Ray Map (Sn Migration Path):

                       ┌───────┐
                       │  M1   │
                       └─┬───┬─┘
                         │ █ │ ◄── Sn Concentration in Dark Ion Features
                         │ █ │
                         │ █ │ ◄── Sn Electromigrated from Bottom Solder
                         │ █ │     Ball along TSV-Si Interface into Filler
                         └───┘

  Key Observations (Fig. 4.27):
  • Voids nucleate in M1 layer directly above the TSV top where upward
    electrons make a sharp 90° turn, causing severe current crowding.
  • Sn Kα X-ray map reveals Sn atoms electromigrating in electron flow
    direction from solder ball through bottom metallization along the
    TSV-Si interface into the TSV body.
  ```

---

### Effect of Temperature on TSV Protrusion

- **[Ch.6]** When TSVs are subjected to different temperatures, both protrusion behavior and the deformation mechanism change, with protrusion height increasing as temperature increases. Observed that different rates of increase exist in different temperature regimes: a lower rate of increase for $T < 260\ ^\circ\text{C}$ and a higher rate of increase for $T > 320\ ^\circ\text{C}$. *(2026-07-24)*

- **[Ch.6]** **Deformation & Creep Mechanisms**: *(2026-07-24)*
  - In the lower temperature regime ($T < 260\ ^\circ\text{C}$), dislocation motion causes grain deformation.
  - As temperature rises to $320\ ^\circ\text{C}$ and above, **diffusional creep** dominates, encompassing both grain boundary (GB) diffusion (**Coble creep**) and lattice diffusion (**Nabarro-Herring creep**).
  - Coble creep initiates at relatively lower temperatures, with a transition to Nabarro-Herring creep occurring as temperature increases [20, 21].
  - Both diffusional creep and dislocation creep contribute simultaneously to protrusion, leading to significantly larger protrusion rates at temperatures higher than $320\ ^\circ\text{C}$.

- **[Ch.6]** Fig. 6.16 — Plot of mean protrusion vs. temperature ($T$) and homologous temperature ($T/T_m$): *(2026-07-24)*

  ```mermaid
  graph TD
      subgraph LowTemp["Low Temperature Regime (T < 260 °C)"]
          A1["Dislocation Motion"] --> A2["Grain Deformation"]
          A2 --> A3["Lower Protrusion Rate"]
      end
      subgraph HighTemp["High Temperature Regime (T > 320 °C)"]
          B1["Coble Creep<br/>(Grain Boundary Diffusion)"]
          B2["Nabarro-Herring Creep<br/>(Lattice Diffusion)"]
          B3["Dislocation Creep"]
          B1 & B2 & B3 --> B4["Accelerated Protrusion Rate"]
      end
      LowTemp -->|"Temperature Increase (>320 °C)"| HighTemp
  ```

  ```
  Fig. 6.16 — Mean Protrusion vs. Temperature (Regime Transition)
  ─────────────────────────────────────────────────────────────────────────────
  Homologous Temp (T/Tm) ──►  0.28    0.35    0.42    0.50    0.57    0.64
                             ┌───────────────────────────────────────────┐
                         8 ┤ │                                        ■  │
                           │ │                                      /    │
                         7 ┤ │                                    ■      │
  Mean Protrusion (a)      │ │                                  /        │
                         6 ┤ │                                ■          │
                           │ │                              /            │
                         5 ┤ │                          ■                │
                           │ │                        /                  │
                         4 ┤ │                    ■ ----- (Diffusional   │
                           │ │                  ■ - - - -  Creep Regime) │
                         3 ┤ │              ■ - -                        │
                           │ │          ■   / (Dislocation Motion)       │
                         2 ┤ │      ■   ■                                │
                           │ │    ■                                      │
                         1 ┤ │  ■                                        │
                             └─┴──────┴──────┴──────┴──────┴──────┴──────┘
                               0     100    200    300    400    500    600
                                             Temperature (°C)

  Key observations:
  • Two distinct slope regimes:
    - Low-temp slope (T < 260 °C): Dislocation motion governs deformation; lower protrusion growth rate.
    - High-temp slope (T > 320 °C): Coble & Nabarro-Herring diffusional creep combined with dislocation creep; steeper protrusion growth rate.
  ```

---

### Effect of Geometry on TSV Protrusion

- **[Ch.6]** **TSV Cross-Sectional Geometry & Defect Diffusion**: *(2026-07-24)*
  - TSV shapes considered include **rectangle**, **trapezoid**, and **hourglass** (fabrication reasons detailed in [22]).
  - To evaluate geometry's effect on defect motion, the number of mobile defect atoms (**DAs**) was tracked. A larger count of DAs indicates faster defect diffusion.
  - The rectangle TSV exhibits the largest number of DAs among the three geometries, indicating defects diffuse at the fastest rate in rectangular TSVs.
  - **Perimeter-to-Area Ratio ($P/A$) Mechanism**:
    - The ratio of perimeter to cross-sectional area is calculated as **0.008** (rectangle), **0.011** (trapezoid), and **0.014** (hourglass).
    - A larger $P/A$ ratio provides a higher density of boundary sites where mobile defects cluster and become immobile.
    - Consequently, fewer defects remain mobile in geometries with higher $P/A$ ratios (hourglass/trapezoid), resulting in lower overall protrusion height.

- **[Ch.6]** Fig. 6.17 — Plots of the number of mobile defect atoms (DAs) vs. time step for rectangle, trapezoid, and hourglass TSVs: *(2026-07-24)*

  ```mermaid
  graph LR
      subgraph Rect["Rectangle TSV (P/A = 0.008)"]
          R1["Lowest Perimeter/Area Ratio"] --> R2["Fewer Immobile Boundary Sites"]
          R2 --> R3["Highest Mobile Defect Atoms (DAs ~60-90)"]
          R3 --> R4["Fastest Defect Diffusion Rate"]
      end
      subgraph Trap["Trapezoid TSV (P/A = 0.011)"]
          T1["Intermediate P/A Ratio"] --> T2["Moderate Boundary Clustering"]
          T2 --> T3["Medium Mobile Defect Atoms (DAs ~30-50)"]
      end
      subgraph Hour["Hourglass TSV (P/A = 0.014)"]
          H1["Highest Perimeter/Area Ratio"] --> H2["Dense Boundary Defect Clustering"]
          H2 --> H3["Defects Become Immobile"]
          H3 --> H4["Lowest Mobile Defect Atoms (DAs ~10-30)"]
          H4 --> H5["Lowest Protrusion Height"]
      end
  ```

  ```
  Fig. 6.17 — Mobile Defect Atoms (DAs) Decay vs. Time Step by TSV Geometry
  ─────────────────────────────────────────────────────────────────────────────
  The Number of DAs
    400 ┤ ■ [Rectangle] (P/A = 0.008)
        │ ● [Trapezoid] (P/A = 0.011)
    300 ┤ ▲ [Hourglass] (P/A = 0.014)
        │  \   \   \
    200 ┤   \   \   \
        │    ■   \   \
    100 ┤    ●─■──■───────■───■─────■───■──── [Rectangle: Highest DAs ~60-90]
        │    ▲─●──●───────●───●─────●───●──── [Trapezoid: Medium DAs ~30-50]
      0 └────▲─▲──▲───────▲───▲─────▲───▲──── [Hourglass: Lowest DAs ~10-30]
          500  3000   6000   9000  12000  15000
                        Time step

  TSV Geometries (Cross-sections):
    ┌────────┐          ┌──────┐          ┌────────┐
    │        │          │  \/  │          │ \    / │
    │        │          │  /\  │          │  \  /  │
    └────────┘          └──────┘          └────────┘
    Rectangle          Hourglass          Trapezoid
   (P/A = 0.008)      (P/A = 0.014)      (P/A = 0.011)
  [Fastest Diffusion] [Immobile Clustering] [Intermediate]

  Key observations:
  • Defect atom (DA) count decays rapidly initially (500–3000 steps) then plateaus.
  • Rectangle TSV retains the highest mobile DA count, causing fastest defect diffusion.
  • Hourglass TSV has the highest P/A ratio, causing defects to cluster at boundaries and become immobile, leading to lowest protrusion.
  ```

- **[Ch.6]** **Sidewall Scalloping Roughness**: *(2026-07-24)*
  - During TSV fabrication, drilled via sidewalls cannot be made perfectly smooth, giving rise to **sidewall scalloping roughness**.
  - Sidewall roughness is a paramount factor governing electrical performance — causing significant leakage current and altering TSV capacitance ($C$), resistance ($R$), and inductance ($L$).
  - High localized tensile stresses reaching up to **340 MPa** are generated at the groove points along a rough sidewall.
  - **Impact on Protrusion Height**: A higher roughness amplitude $R_a$ (as seen in models MSR1–MSR4) leads to a *lower* mean protrusion height. The larger sidewall grooves physically impede the upward motion of Cu atoms and defects.

- **[Ch.6]** Table 6.2 — Roughness parameters ($R_a$, $\lambda_a$) for models MSR1–MSR7 and corresponding protrusion data: *(2026-07-24)*

  | Model No. | $R_a$ | $\lambda_a$ | Mean Protrusion ($a$) | Maximum Protrusion ($a$) |
  | :--- | :--- | :--- | :--- | :--- |
  | **MSR1** | 10 | $40\pi$ | 4.7 | 7.6 |
  | **MSR2** | 20 | $40\pi$ | 4.5 | 7.6 |
  | **MSR3** | 30 | $40\pi$ | 4.3 | 8.2 |
  | **MSR4** | 40 | $40\pi$ | 3.8 | 7.4 |
  | **MSR5** | 20 | $30\pi$ | 3.0 | 4.6 |
  | **MSR6** | 20 | $20\pi$ | 4.2 | 7.3 |
  | **MSR7** | 20 | $10\pi$ | 5.0 | 9.3 |

  *Summary of Table 6.2 Trends*:
  1. **Effect of $R_a$ (MSR1–MSR4, constant $\lambda_a = 40\pi$)**: Increasing $R_a$ from 10 to 40 decreases mean protrusion height from 4.7 to 3.8 due to groove-induced barrier to atom motion.
  2. **Effect of Wavelength $\lambda_a$ (MSR2, MSR5–MSR7, constant $R_a = 20$)**: Decreasing wavelength $\lambda_a$ from $40\pi$ down to $10\pi$ generally increases both mean protrusion (3.0 $\to$ 5.0) and maximum protrusion (4.6 $\to$ 9.3).

---

### Protrusion Profile Prediction Criteria

- **[Ch.6]** Predicting TSV protrusion profiles requires evaluating the coupled effects of mechanical loading, grain microstructure, temperature, and via geometry. *(2026-07-24)*

- **[Ch.6]** **1. Effect of Loading Condition on Protrusion Profile**: *(2026-07-24)*
  - Protrusion occurs when TSVs are subjected to compressive normal strains ($\varepsilon_x$, $\varepsilon_y$) or shear strain ($\gamma_{xy}$). TSVs subjected to pure shear strain $\gamma_{yx}$ exhibit **no protrusion**.
  - Under compressive strain $\varepsilon_x$: Protrusion profile generally bumps up near both outer edges while remaining relatively flat in the middle of the top surface.
  - Under tensile strain $\varepsilon_y$: Protrusion profile bumps up in the middle of the top surface.
  - Applied strain magnitude: Larger strain near the top end of the TSV yields larger protrusion.
  - Loading symmetry: Symmetric mechanical loading results in a larger overall protrusion height.

- **[Ch.6]** **2. Effect of Cu Grain Microstructure** (under protrusion-producing loading, e.g. $\theta = 150^\circ$): *(2026-07-24)*
  - Top-end grain contribution: Copper grains located near the top end of the TSV contribute significantly more to top surface protrusion than grains deeper below.
  - Vertical grain size ($y$-direction): A smaller grain size along the $y$-direction leads to a higher level of protrusion.
  - Horizontal grain size ($x$-direction) under compressive/shear loading ($\varepsilon_x, \gamma_{xy}$): A larger grain size along the $x$-direction yields a higher protrusion.
  - Horizontal grain size ($x$-direction) under tensile loading ($\varepsilon_y$): A larger grain size along the $x$-direction yields a lower level of protrusion.

- **[Ch.6]** **3. Effect of Temperature**: *(2026-07-24)*
  - Higher thermal exposure / ambient temperature leads directly to larger TSV protrusion height due to enhanced plasticity and diffusional creep.

- **[Ch.6]** **4. Effect of Geometry & Sidewall Roughness**: *(2026-07-24)*
  - TSVs with smaller sidewall roughness amplitude $R_a$ and smaller scalloping wavelength $\lambda_a$ exhibit larger protrusion profiles (as atoms encounter less mechanical obstruction during upward thermal expansion and creep).

---

## TSV Design & Fabrication


## Bonding & Interconnect Technologies

### Solder-Based vs. Solder-Less Bonding: Pros and Cons

- **[Ch.8]** **Solder-Based Bonding Architecture**: Prevalent in 3D interconnects, typically employing a one-sided solder microbump structure (e.g., Cu / $x$ / solder, where $x$ is a diffusion barrier layer like Ni or omitted entirely, and the solder is electroplated SnAg, SnCu, or binary solder) bonded onto a metal pad (e.g., Cu capped with a passivation layer or pre-cleaned/treated to remove surface oxides). *(2026-07-24)*

- **[Ch.8]** Fig. 8.1 — Schematic diagram of bonded interconnect structures using (a) conventional soldering, (b) SLID/SSID bonding, and (c) direct Cu–Cu bonding: *(2026-07-24)*

  ```mermaid
  graph TD
      subgraph Fig81A["(a) Conventional Soldering"]
          direction TB
          A1["Upper Substrate / Cu Pad"] --- A2["Intermetallic Compound (IMC) Layer"]
          A2 --- A3["Bulk Solder Microbump (SnAg / SnCu)"]
          A3 --- A4["Intermetallic Compound (IMC) Layer"]
          A4 --- A5["Lower Substrate / Cu Pad"]
      end
      subgraph Fig81B["(b) SLID / SSID Bonding"]
          direction TB
          B1["Upper Substrate / Cu Pad"] --- B2["Continuous Intermetallic (IMC) Joint<br/>(Solder Fully Consumed)"]
          B2 --- B3["Lower Substrate / Cu Pad"]
      end
      subgraph Fig81C["(c) Direct Cu–Cu Bonding"]
          direction TB
          C1["Upper Substrate / Cu Pad"] --- C2["Pristine Direct Cu–Cu Bond Interface<br/>(No Solder / No IMCs)"]
          C2 --- C3["Lower Substrate / Cu Pad"]
      end
  ```

  ```
  Fig. 8.1 — Interconnect Bonding Structures Comparison
  ─────────────────────────────────────────────────────────────────────────────
  (a) Conventional Soldering      (b) SLID / SSID Bonding       (c) Direct Cu–Cu Bonding
  ┌───────────────────────┐       ┌───────────────────────┐       ┌───────────────────────┐
  │    Upper Substrate    │       │    Upper Substrate    │       │    Upper Substrate    │
  ├───────────────────────┤       ├───────────────────────┤       ├───────────────────────┤
  │   Cu Metallization    │       │   Cu Metallization    │       │   Cu Metallization    │
  ├───────────────────────┤       ├───────────────────────┤       ├───────────────────────┤
  │     IMCs Layer        │       │   Intermetallic (IMC) │       │                       │
  ├───────────────────────┤       │      Full Layer       │       │    Direct Cu–Cu       │
  │     Solder Bulk       │       │  (Solder Consumed)    │       │      Interface        │
  ├───────────────────────┤       ├───────────────────────┤       │ (No Solder / No IMCs) │
  │     IMCs Layer        │       │   Cu Metallization    │       ├───────────────────────┤
  ├───────────────────────┤       ├───────────────────────┤       │   Cu Metallization    │
  │   Cu Metallization    │       │    Lower Substrate    │       ├───────────────────────┤
  ├───────────────────────┤       └───────────────────────┘       │    Lower Substrate    │
  │    Lower Substrate    │                                       └───────────────────────┘
  └───────────────────────┘

  Key Interconnect Differences:
  • (a) Soldering: Retains unreacted solder bulk sandwiched between two IMC layers and Cu pads.
  • (b) SLID/SSID: Solder completely consumed by interdiffusion, forming a continuous IMC joint between Cu pads.
  • (c) Direct Cu–Cu: Clean, direct metal-to-metal bond without solder or IMC formation.
  ```

- **[Ch.8]** **Pros & Cons of Solder-Based Bonding**: *(2026-07-24)*
  - **Pros**: Process robustness — solder is malleable and forgiving regarding bump height non-uniformity and co-planarity variations.
  - **Cons**:
    - Time-consuming and costly due to complex multi-layer material stack-up.
    - Solder microbumps are vulnerable to mechanical damage during handling, friction, or transport.
    - Process temperatures are dictated by solder melting points ($232\ ^\circ\text{C}$ for pure Sn, $\sim 221\ ^\circ\text{C}$ for eutectic SnAg).
    - Forms brittle Intermetallic Compounds (IMCs), yielding an IMC/solder/IMC sandwich structure.
    - Limits electrical conductivity, long-term reliability (crack initiation at solder–IMC interfaces or within IMCs), and interconnect pitch scaling.

- **[Ch.8]** **SLID vs. SSID Bonding**: *(2026-07-24)*
  - Controlling solder thickness allows bonding via Solid-Liquid Interdiffusion (**SLID**) or Solid-State Interdiffusion (**SSID**) reactions between Cu and solder, completely consuming the solder to form full-IMC joints.
  - **Comparison**: Solid-State Interdiffusion (SSID) bonding is performed at lower temperatures (below solder melting point) but requires significantly higher bonding pressures ($\sim 50\text{--}150\text{ MPa}$) compared to conventional solder reflow and SLID.

- **[Ch.8]** **Direct Cu–Cu Bonding (Solder-less Interconnects)**: *(2026-07-24)*
  - Direct Cu–Cu bonding eliminates solder and IMC formation at the bonding interface.
  - **Performance Advantages**: Compared to Al–Al or solder-based bonding, Cu–Cu interconnects offer higher electrical conductivity, lower power consumption, reduced RC delay, superior electromigration (EM) resistance, excellent heat dissipation, and high thermomechanical reliability (enabling high-temperature power electronics up to $250\ ^\circ\text{C}$).
  - **Process Prospects**: Simplifies processing, reduces material costs, and enables finer pitch scaling and higher reliability.
  - **Primary Challenge & Oxidation**: Cu surfaces oxidize readily upon exposure to air ($O_2, H_2O$), forming thick ($> 10\text{ nm}$) oxides ($\text{CuO}, \text{Cu}_2\text{O}$) that inhibit bond formation below $300\ ^\circ\text{C}$.
  - Unlike self-limiting $\text{Al}_2\text{O}_3$, Cu oxide growth is continuous and non-self-limiting, requiring explicit surface cleaning or passivation treatments.
  - With proper atmosphere control (vacuum, inert, reducing), surface preparation/passivation, and warpage control, Cu–Cu bonding temperatures can be lowered below lead-free solder reflow temperatures, down to the $100\text{--}150\ ^\circ\text{C}$ range.

---

### Thermo-Compression Bonding (TCB) — Fundamentals & Microstructure Effects

- **[Ch.8]** **Mechanism & Parameters**: *(2026-07-24)*
  - Cu–Cu Thermo-Compression Bonding (TCB) relies on inter-diffusion and self-diffusion across mating Cu surfaces at elevated temperatures under compressive pressure.
  - **Compressive Pressure Requirements**: Highly dependent on surface topography and roughness — high for as-plated Cu films/pillars ($\sim 100\text{--}150\text{ MPa}$), but low ($< 2.5\text{ MPa}$) for thin smooth or CMP-polished Cu films.
  - **Standard Process Cycle**: Performed at $300\text{--}400\ ^\circ\text{C}$ in vacuum or a protective/reducing gas environment (often preceded by plasma cleaning), followed by post-bonding annealing at $300\text{--}400\ ^\circ\text{C}$ to enhance bond strength.
  - **High-Temperature Limitations**: High process temperatures and rapid thermal ramp rates induce large thermal expansion mismatches and high stresses, damaging stress-sensitive materials. Interfacial voids form when bonding temperatures exceed $300\ ^\circ\text{C}$.

- **[Ch.8]** Table 8.2 — Cu surface diffusion coefficients ($D_{\text{surface}}$) across three crystal planes as a function of temperature: *(2026-07-24)*

  | Temperature ($^\circ\text{C}$) | (111) Plane [$D_{\text{surface}}\ (\text{m}^2/\text{s})$] | (100) Plane [$D_{\text{surface}}\ (\text{m}^2/\text{s})$] | (110) Plane [$D_{\text{surface}}\ (\text{m}^2/\text{s})$] |
  | :--- | :--- | :--- | :--- |
  | **150** | $6.85 \times 10^{-10}$ | $2.15 \times 10^{-14}$ | $6.61 \times 10^{-16}$ |
  | **200** | $9.42 \times 10^{-10}$ | $1.19 \times 10^{-13}$ | $5.98 \times 10^{-15}$ |
  | **250** | $1.22 \times 10^{-9}$ | $4.74 \times 10^{-13}$ | $3.56 \times 10^{-14}$ |
  | **300** | $1.51 \times 10^{-9}$ | $1.48 \times 10^{-12}$ | $1.55 \times 10^{-13}$ |

  *Key Insights from Table 8.2*:
  - **Extreme Surface Diffusivity Anisotropy**: The **(111)** crystal plane exhibits surface diffusivity rates $4\text{--}6$ orders of magnitude higher than the (100) and (110) planes across all temperatures.
  - **Low-Temperature Bonding Implications**: At $150\ ^\circ\text{C}$, $D_{\text{surface}}(111)$ is $6.85 \times 10^{-10}\ \text{m}^2/\text{s}$, compared to $2.15 \times 10^{-14}\ \text{m}^2/\text{s}$ for (100) and $6.61 \times 10^{-16}\ \text{m}^2/\text{s}$ for (110). Preferential (111) surface orientation (e.g., highly (111)-oriented nanotwinned Cu) is essential for enabling low-temperature Cu–Cu diffusion bonding.

---

### Surface Activated Bonding (SAB) Processes

- **[Ch.8]** **Room-Temperature Surface Activation**: *(2026-07-24)*
  - Surface Activated Bonding (SAB) is a room-temperature bonding method utilizing pre-bonding surface activation performed in Ultra-High Vacuum (UHV).
  - **Activation Mechanism**: Uses Ar atom beam bombardment in UHV to sputter off surface oxides and organic contaminants, exposing pristine metal surfaces while preventing rapid re-oxidation/re-contamination prior to contact.
  - **Material Versatility**: Enables room-temperature direct bonding across diverse material combinations — including metal-to-metal, metal-to-ceramic, metal-to-semiconductor, and semiconductor-to-semiconductor — without requiring elevated heating or post-bonding annealing.

- **[Ch.8]** Fig. 8.9 — TEM images of CMP-Cu film interface bonded at room temperature via SAB: *(2026-07-28)*

  ```mermaid
  graph TD
      subgraph SAB_Tech["Surface Activated Bonding (SAB) in UHV"]
          P1["Ar Atom Beam Bombardment in UHV"] --> P2["Sputter-Clean Native Oxides & Organics"]
          P2 --> P3["Room-Temperature Contact"]
      end
      subgraph SAB_TEM["TEM Microstructure Characteristics (Fig. 8.9)"]
          T1["Direct Planar Metal-to-Metal Interface"]
          T2["Zero Interfacial Oxide / Amorphous Layer"]
          T3["No Significant Grain Growth / Interdiffusion"]
          T4["Eliminates CTE Mismatch & Thermal Stress"]
      end
      P3 --> SAB_TEM
  ```

  ```
  Fig. 8.9 — TEM Microstructure of Room-Temperature SAB Cu–Cu Interface
  ─────────────────────────────────────────────────────────────────────────────
  (a) Cross-Section of CMP-Cu Film           (b) High-Resolution Grain Boundary
      on SiO2 / Si Substrate                     across Bonded Interface

      ┌─────────────────────────┐                ┌─────────────────────────┐
      │      Si Substrate       │                │      CMP-Cu Film        │
      ├─────────────────────────┤                │    (Upper Substrate)    │
      │  SiO2 Barrier (500 nm)  │                │    /               \    │
      ├─────────────────────────┤                │   /  Grain Boundary \   │
      │   CMP-Cu Film (Bulk)    │                ├────═════════════════────┤ ◄── Bond Interface
      │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                │   \  (Pristine, no  /   │     (No Oxides /
      ├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤ ◄─ Interface   │    \   diff. voids) /   │      No Interlayers)
      │   CMP-Cu Film (Bulk)    │                │      CMP-Cu Film        │
      │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                │    (Lower Substrate)    │
      ├─────────────────────────┤                └─────────────────────────┘
      │  SiO2 Barrier (500 nm)  │                       (100 nm Scale)
      ├─────────────────────────┤
      │      Si Substrate       │
      └─────────────────────────┘
            (500 nm Scale)

  Key TEM Observations:
  • Planar bonding interface showing direct metal-to-metal contact with no interfacial oxides or amorphous interlayers.
  • No significant interdiffusion or Cu grain growth across the bonding interface.
  • SAB process is largely independent of Cu bulk self-diffusion and grain microstructure, bypassing thermal issues such as thermal stress, CTE expansion mismatch, and expansion-induced misalignment.
  ```

- **[Ch.8]** **Limitations & Modified SAB Method**: *(2026-07-28)*
  - **Ionic Material Limitation**: Standard SAB struggles to bond ionic/insulating materials directly to each other (e.g., glass to glass, $\text{SiO}_2$ to $\text{SiO}_2$). Assumed cause: Ar ion beam bombardment spontaneously polarizes the surface of ionic materials at different levels.
  - **Modified SAB Process**: Surfaces are sputter-cleaned by an Ar beam while **simultaneously co-depositing a thin Fe layer followed by a Si layer**.
  - **Polarity Shielding**: The ultra-thin metallic nanolayers shield the surface polarity of ionic materials, enabling room-temperature bonding of $\text{SiO}_2$, glass, single-crystalline wafers, and polymer films with high bond strength.
  - **Industrial Application**: Enables hermetic sealing of glass and polymer devices (e.g., organic electro-luminescent displays [OELD] or lighting devices), acting as a barrier against atmospheric $\text{H}_2\text{O}$ and $\text{O}_2$ permeation.

---

### Cu/SiO2 Hybrid Bonding

- **[Ch.8]** **Process Overview & 2-Step Contact Mechanism**: *(2026-07-28)*
  - Performed via hydrophilic surface modification of chips/wafers $\to$ room-temperature initial bonding $\to$ post-bonding thermal annealing.
  - **CMP Dishing Effect**: Chemical-Mechanical Polishing (CMP) causes Cu surface dishing (Cu sits slightly lower than surrounding $\text{SiO}_2$). Initial room-temperature contact occurs **exclusively via $\text{SiO}_2\text{--}\text{SiO}_2$ bonding**.
  - **Post-Bonding Annealing ($200\text{--}400\ ^\circ\text{C}$)**: Strengthens the $\text{SiO}_2\text{--}\text{SiO}_2$ bond network and induces differential thermal expansion in Cu, closing the dishing gap to establish direct $\text{Cu}\text{--}\text{Cu}$ metallic bonds.
  - **Plasma Chamber Oxidation Risk**: Residual $\text{H}_2\text{O}$ and $\text{O}_2$ in plasma chambers ($0.1\text{--}100\text{ Pa}$) can oxidize Cu surfaces even when using Ar or $\text{N}_2$ plasma.

- **[Ch.8]** **Direct Bonding Interconnect (DBI)**: *(2026-07-28)*
  - Industry-reputable hybrid bonding process utilizing $\text{Cu}/\text{SiO}_2$ (or $\text{SiN}_x$) developed by Ziptronix.
  - Surface plasma activation + chemical treatment terminates surfaces with reactive bonding species (e.g., $\text{Si-OH}$ and $\text{Si-NH}_2$ groups).
  - Wafers bond in ambient at room temperature **without external compression**, producing high $\text{SiO}_2\text{--}\text{SiO}_2$ bond strength via interfacial $\text{Si-O-Si}$ and $\text{Si-N-N-Si}$ bonds.
  - Subsequent annealing ($125\text{--}400\ ^\circ\text{C}$) drives $\text{Cu}\text{--}\text{Cu}$ bonding facilitated by internal compression from Cu thermal expansion.
  - **Fluorinated Oxide**: Using fluorinated oxide further enhances oxide-oxide bond strength by improving absorption of interfacial $\text{H}_2\text{O}$.

  ```mermaid
  graph TD
      H_Step1["1. Surface Prep & CMP Polishing"] -->|"CMP Dishing leaves recessed Cu surface"| H_Step2["2. Hydrophilic Plasma Activation & Chemical Termination<br/>(Si-OH & Si-NH2 surface groups)"]
      H_Step2 -->|"Ambient Room-Temp Contact (No External Force)"| H_Step3["3. Direct Room-Temp SiO2–SiO2 Bonding<br/>(Interfacial Si-O-Si & Si-N-N-Si bonds)"]
      H_Step3 -->|"Post-Bonding Anneal (125–400 °C)"| H_Step4["4. Differential Thermal Expansion of Cu"]
      H_Step4 --> H_Step5["5. Internal Expansion Pressure Closes Dishing Gap & Drives Direct Cu–Cu Bonding"]
  ```

- **[Ch.8]** **Bonding Energy Metrics & Degradation Mechanisms**: *(2026-07-28)*
  - **Electrodeposited Cu on Si**: As-bonded $\text{Cu}\text{--}\text{Cu}$ bonding energy is $\sim 0.8\text{ J/m}^2$, increasing to $\sim 2.8\text{ J/m}^2$ after 60 days of room-temperature storage.
  - **PVD (Sputtered) Cu Films**: As-bonded $\text{Cu}\text{--}\text{Cu}$ bonding energy is $\sim 0.5\text{ J/m}^2$, slightly increasing to $0.7\text{ J/m}^2$ after 120 days of storage.
  - **$\text{SiO}_2\text{--}\text{SiO}_2$ Bonding Energy**: $\sim 0.2\text{ J/m}^2$ at room temperature. Post-annealing at $200\text{--}400\ ^\circ\text{C}$ closes CMP dishing gaps and raises $\text{SiO}_2\text{--}\text{SiO}_2$ bonding energy to levels comparable with plasma activation bonding (though below bulk Si fracture energy).
  - **Water Stress Corrosion**: Interfacial $\text{H}_2\text{O}$ molecules induce water stress corrosion, degrading $\text{SiO}_2\text{--}\text{SiO}_2$ bond strength. Interfacial water is difficult to remove below $400\ ^\circ\text{C}$.

- **[Ch.8]** **Combined SAB / Modified Vacuum Process**: *(2026-07-28)*
  - Combines Si-containing Ar beam surface irradiation with a pre-bonding attach-detach sequence in vacuum.
  - Si atoms in Ar beam increase reactive Si sites on $\text{SiO}_2$; the attach-detach process enhances OH adsorption and strips excess $\text{H}_2\text{O}$.
  - Achieves high $\text{Cu}\text{--}\text{Cu}$, $\text{SiO}_2\text{--}\text{SiO}_2$, and $\text{SiO}_2\text{--}\text{SiN}_x$ bond strength in vacuum ($10^{-2}\text{ Pa}$) under low external compression ($2.5\text{ MPa}$) at $200\ ^\circ\text{C}$ for 30 min, followed by $200\ ^\circ\text{C}$ ambient annealing for 2 h (overcoming CMP dishing, surface roughness, and wafer bow/warpage).

---

### Cu/Adhesive Hybrid Bonding

- **[Ch.8]** **Polymer Adhesive Integration**: Replaces $\text{SiO}_2$ dielectric with a polymer adhesive layer. *(2026-07-28)*

- **[Ch.8]** **'Adhesive-First' vs. 'Cu-First' Hybrid Bonding**: *(2026-07-28)*
  - **Adhesive-First Approach**: Polymer adhesive is thermo-compression bonded (TCB) and cured at lower temperature (e.g., $\sim 250\ ^\circ\text{C}$ for 1 h for BCB) *before* high-temperature $\text{Cu}\text{--}\text{Cu}$ TCB ($350\text{--}400\ ^\circ\text{C}$).
    - *Rationale*: High $\text{Cu}\text{--}\text{Cu}$ bonding temperatures would damage uncured adhesive.
    - *Drawbacks*: Choice of adhesives is limited to materials with high thermal stability; low process throughput and high thermal stress.
  - **Cu-First Approach**: Solves substrate relative slip and final alignment offset during adhesive curing by performing low-temperature $\text{Cu}\text{--}\text{Cu}$ bonding ($200\ ^\circ\text{C} < T < 250\ ^\circ\text{C}$, $< 10\text{ min}$) *prior* to long-duration adhesive curing.

- **[Ch.8]** **Surface Activation Compatibility & Formic Acid Treatment**: *(2026-07-28)*
  - **Sputtering Contamination Issue**: Ar atom beam or Ar plasma surface activation physically sputters Cu atoms onto the adhesive surface, depositing Cu impurities that degrade adhesive performance.
  - **Formic Acid ($\text{HCOOH}$) Vapor Treatment**: H-containing $\text{HCOOH}$ vapor treatment cleans Cu oxides without sputtering Cu contaminants onto the adhesive.
  - Enables strong $\text{Cu}\text{--}\text{Cu}$ bonding (shear strength $> 10\text{ MPa}$) at $200\ ^\circ\text{C}$ with short pre-treatment time ($\le 10\text{ min}$) and TCB duration of $\sim 5\text{ min}$.

  ```mermaid
  graph TD
      subgraph AdhFirst["'Adhesive-First' Approach"]
          AF1["TCB & Cure Polymer Adhesive (~250 °C, 1h)"] --> AF2["High-Temp Cu-Cu TCB (350–400 °C)"]
          AF2 --> AF_Issue["Risk of Thermal Damage to Adhesive,<br/>High Thermal Stress & Low Throughput"]
      end
      subgraph CuFirst["'Cu-First' Approach (Preferred)"]
          CF1["Low-Temp Cu-Cu TCB (200–250 °C, <10 min)"] --> CF2["Long-Duration Polymer Adhesive Curing"]
          CF2 --> CF_Adv["Prevents Substrate Relative Slip & Alignment Misalignment"]
      end
      subgraph HCOOH_Fix["HCOOH (Formic Acid) Vapor Alternative"]
          HF1["Formic Acid Vapor Cleans Cu Oxides without Sputtering"] --> HF2["Eliminates Cu Impurity Redeposition on Adhesive"]
          HF2 --> HF3["Enables Shear Strength >10 MPa at 200 °C in ~5 min"]
      end
  ```

---

### Alternative Cu–Cu Bonding Techniques: Insertion Bonding

- **[Ch.8]** **Concept & Mechanism**: *(2026-07-28)*
  - Low-temperature bonding approach applied to Cu-TSV interconnect schemes.
  - Imposes high shear stress to induce large local plastic deformation on mating Cu bonding surfaces.
  - High shear stress is achieved by designing a **sloped sidewall landing pad** (instead of a conventional flat pad) and applying vertical force to drive TSV nails into the sloped pads.

---


## Thermal Management in 3D Packages


## Reliability & Failure Mechanisms


## General / Miscellaneous


