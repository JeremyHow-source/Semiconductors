# Failure Analysis — Bâzu (2011) Reading Notes

## Chapter 1 — Overview of Electronic System Failures

### Table 1.1 — Distribution of Failure Causes for Electronic Systems

| Failure Cause Category | Approximate Contribution |
|------------------------|--------------------------|
| Design errors | ~40–50% |
| Manufacturing / process defects | ~20–30% |
| Component defects | ~10–20% |
| Operational / environmental stress | ~10–15% |
| Other / unknown | ~5–10% |

> ⚠️ *Placeholder values — please verify against Table 1.1 in the source document.*

---

## Chapter 2 — Understanding the Why Behind FA

- **[Ch.2]** FA is often stopped after the primary (physical) cause of failure is established, instead of being continued until the **root cause** is discovered. *(2026-06-25)*

- **[Ch.2]** All failures are eventually ascribed to human errors of three types: *(2026-06-25)*
  1. **Errors of knowledge**
  2. **Errors of performance** (e.g. negligence)
  3. **Errors of intent** (e.g. acts of sabotage)

---

### FMEA — Failure Mode and Effects Analysis

- **[Ch.2]** FMEA is employed to identify potential failure modes (FM) of components within a system and prioritise them according to severity, frequency, and detectability. *(2026-06-25)*

- **[Ch.2]** FMEA scoring parameters: *(2026-06-25)*

  | Parameter | Description | Scale |
  |-----------|-------------|-------|
  | **Severity (S)** | Seriousness of the FM consequence | 1 (no danger) → 10 (critical) |
  | **Occurrence (O)** | Frequency with which the FM occurs | 1 (low) → 10 (extremely high) |
  | **Detection (D)** | Risk that the FM escapes detection by planned tests/inspections | 1 (low risk) → 10 (extremely high risk) |

  > **RPN** (Risk Priority Number) = S × O × D

- **[Ch.2]** Drawbacks of traditional FMEA: serves only as a qualitative reliability prediction method — low accuracy, possible mistakes in identifying FMs, subjective risk ranking, and inability to distinguish between FMs with equal RPN. *(2026-06-25)*

- **[Ch.2]** Checklist of 10 FM types (to avoid omission of important FMs): *(2026-06-25)*
  1. The intended function is **not performed**.
  2. Intended function is performed, but there is a **safety or regulatory problem**.
  3. Performed at a **wrong time** (availability problem).
  4. Performed at a **wrong place**.
  5. Performed in a **wrong way** (efficiency problem).
  6. Performance level is **lower than planned**.
  7. Cost is **higher than planned** (maintenance problem).
  8. An **unintended and/or undesirable function** is performed.
  9. **Lifetime** is lower than planned (reliability problem).
  10. **Support** for the function is impossible or problematic (maintenance, repairability, serviceability).

---

### FTA and ETA

- **[Ch.2]** **FTA (Fault Tree Analysis):** graphical representation of events in a hierarchical tree structure to determine combinations of hardware, software, and human error failures that could result in a specified risk or system failure. Investigates consequences of **multiple simultaneous failures** — its main advantage over FMEA which investigates single-point failures. *(2026-06-25)*

- **[Ch.2]** **ETA (Event Tree Analysis):** a variant of FTA; an inductive approach to determine the consequences of a **single failure** for overall system risk or reliability. *(2026-06-25)*

---

### Reliability Models

- **[Ch.2]** Two main models describe the actions of failure mechanisms: *(2026-06-25)*

  | Model Type | Description | Role of FA |
  |------------|-------------|------------|
  | **Empirical** | Uses statistical distributions (exponential, lognormal, Weibull, etc.) to describe time and stress behaviour of FMs | Separates populations affected by each FM |
  | **Physical (PoF)** | Begins with accurate description of physical/chemical phenomena responsible for degradation or failure; uses microstructural information acquired by FA | Provides input data for model construction |

- **[Ch.2]** Physical models for electronic components are virtually unusable by system manufacturers as they require input data not accessible to component users. *(2026-06-25)*

---

### Figure 2.1 — Possible Approaches to Modelling Reliability

> *Possible approaches to modelling the reliability of electronic components and systems. The role of FA is emphasised.*

```
┌─────────────────────┐              ┌─────────────────────┐
│  Electronic         │              │  Electronic         │
│  Components         │              │  Systems            │
└────────┬────────────┘              └──────┬──────┬───────┘
         │                                  │      │
         ▼                                  ▼      ▼
┌────────────────────────────────┐  ┌──────────┐  ┌──────────────────┐
│  PoF approach to component     │  │  FIDES   │  │  Statistical     │
│  reliability                   │  │  models  │  │  approach to     │
└──────────────┬─────────────────┘  └────┬─────┘  │  component       │
               │                         │        │  reliability     │
               ▼                         │        └────────┬─────────┘
┌─────────────────────────────┐          │                 │
│  Separation of the          │◄─────────┘                 │
│  population affected by     │◄──────────────┐            │
│  a failure mechanism        │               │            ▼
└──────┬──────────────────────┘    ┌──────────┴──┐  ┌────────────────────┐
       │                           │   Failure   │  │  MIL-HDBK-217      │
       ▼                           │   Analysis  │  │  models and others │
┌──────────────┐  ┌──────────────┐ └─────────────┘  └────────┬───────────┘
│  Physical    │  │  Empirical   │                            │
│  approach    │  │  approach    │                            │
└──────┬───────┘  └───────┬──────┘                           │
       │                  │                                   │
       ▼                  ▼                                   ▼
┌─────────────────────────────┐              ┌───────────────────────────┐
│  Models for component       │              │  Models for system        │
│  reliability                │              │  reliability              │
└─────────────────────────────┘              └───────────────────────────┘
```

**Key insight from Figure 2.1:** FA feeds into both the Physical and Empirical approaches under the PoF framework for component reliability, as well as into population separation for FIDES models. Statistical approaches (MIL-HDBK-217 etc.) feed into system reliability models independently.

---

### Cost of Defects — The Rule of Ten

- **[Ch.2]** It is more economical to identify and eliminate a defective component through input controls than at the equipped PCB level. *(2026-06-25)*

- **[Ch.2]** **The Rule of Ten:** Costs grow by an order of magnitude at each successive control level. *(2026-06-25)*

  | Detection Level | Relative Cost |
  |-----------------|--------------|
  | Die / chip level | **C** |
  | Board level | **10C** |
  | System level | **100C** |

---

## Chapter 3 — FA Techniques & Tools


## Chapter 4 — Failure Mechanisms


## General / Miscellaneous


---

## Chapter 3 — The When of Failure Analysis

### Table 3.1 — Possible Failures During the Life Cycle of an Electronic System

| Stage | Possible Failures | Role of Failure Analysis |
|-------|-------------------|--------------------------|
| Design | Wrong processes or wrong process parameters | Provides knowledge of possible failure risks |
| Prototype | Wiring and assembly; component failure | Provides knowledge of typical failure mechanisms |
| Fabrication | Wiring and assembly; component failure | Provides knowledge of typical failure mechanisms |
| Field operation | Component failure; operator errors; environmental factors | When performed on each failed product during field operation, can delineate the three possible failures |

*After [1].*

---

### Table 3.2 — The Role of FA in the Life Cycle of an Electronic Component

| Stage | Actions | Role of Failure Analysis |
|-------|---------|--------------------------|
| Development cycle (design, demonstrator, experimental model, prototype) | The components undergo high stresses (circuit and mounting changes, inversion of the bias, too small supply voltages) | Identifies the weak points of the components and elaborates the necessary measures for their elimination |
| Before fabrication (input control) | The quality of the materials to be used for component fabrication is analysed, by performing reliability tests | Any deviation from normal behaviour may lead to the decision to return the whole batch to the supplier |
| During fabrication | At the various stages of the manufacturing flow, reliability monitors are established, where accelerated reliability tests are performed | Any deviation from normal behaviour may lead to the decision to stop the whole batch or to change the destination of the final products of the fabrication |
| After fabrication (in testing laboratory) | The reliability tests listed in the specifications are executed. If the number of failures is higher than the specified threshold, an alarm signal is pulled | The FA laboratory must give this stage priority in analysis, because a failure can cause an interruption in manufacture. Possible failure causes must be determined quickly, in order to restart the fabrication |
| During operation or storage | Based on data furnished by the customer, the failure rate is assessed continuously by the manufacturer. In most cases, as a consequence of FA and with the aid of the manufacturer, it is possible to find a convenient solution for both sides | In the case of an obvious deviation, a careful analysis of the failures must be made. But an analysis of field failures is difficult to make because sometimes the relevant information is lost |

---

### Design Stage Failures

- **[Ch.3]** Main types of failure arising at the design stage are produced by: mask design faults, incorrect dimensions of device elements (too long, too short), incorrect assumptions about models used, and material properties not taken into account. *(2026-06-25)*

---

### Four Conceptual Models for Failures

- **[Ch.3]** Four simple conceptual models for failures, analogous to real-life situations: *(2026-06-25)*

  | Model | Description | Example |
  |-------|-------------|---------|
  | **Stress–Strength** | Item fails if and only if stress exceeds strength; no damage to non-failed items | Transistor behaviour when voltage applied between collector and emitter |
  | **Damage–Endurance** | Damage accumulates irreversibly under stress but does not degrade performance until cumulative damage exceeds endurance; damage does not disappear when stress is removed (annealing sometimes possible) | Corrosion, wear, fatigue, dielectric breakdown |
  | **Challenge–Response** | System fails because one element is bad, but only when that element is solicited | Software failures, telephone switching systems |
  | **Tolerance–Requirement** | System performance is satisfactory if and only if its tolerance remains within its requirement; failure occurs when something is nominally working but not well enough | Measuring instrument showing incorrect value |

---

### NIST Materials Reliability Capabilities

- **[Ch.3]** The NIST Materials Reliability Division has established capabilities for analysing reliability of small-scale structures, including: FESEM with automated EBSD, 200 kV TEM, Brillouin light-scattering system, tip-enhanced Raman spectroscopy, nanoindenter, and scanning thermal microscope. Custom in-house instruments include: micro tensile testing apparatus, contact-resonance force microscope, surface acoustic wave spectroscopy system, and a probe station for automated AC electrical fatigue testing. *(2026-06-25)*

---

### Table 3.6 — Knowledge Matrix for Semiconductor Failures

| Process Step | Failure Site | Failure Mechanism | Failure Mode |
|--------------|-------------|-------------------|--------------|
| Diffusion | Substrate | Crystal defect | Decreased breakdown voltage |
| Junction | Diffused junction isolation | Impurity precipitation, photoresist mask misalignment, surface contamination | Short-circuit, increased leakage current |
| Oxide film | Gate oxide film, field oxide film | Mobile ion, pinhole, interface state, TDDB, hot carrier | Decreased breakdown voltage, short-circuit, increased leakage current, drift of h_FE |
| Metallisation | Interconnection, contact hole, via hole | Scratch or void damage, mechanical damage, non-ohmic contact, step coverage, weak adhesion strength, improper thickness, corrosion, electromigration, stress migration | Open circuit, short-circuit, increased resistance |
| Passivation | Surface, protection film, interlayer dielectric film | Pinhole or crack, thickness variation, contamination, surface inversion | Decreased breakdown voltage, short-circuit, increased leakage current, h_FE and/or V_th drift, noise deterioration |
| Die bonding | Wire bonding connection, wire lead | Wire bonding deviation, damage under wire bonding contact, disconnection, loose wire, contact between wires | Open circuit, short-circuit, increased resistance |
| Sealing | Resin, sealing gas | Void, no sealing, water penetration, peeling, surface contamination, insufficient airtightness, impure sealing gas, particles | Open circuit, short-circuit, increased leakage current |
| Input/output pin | Static electricity, surge, over voltage, over current | Diffusion junction breakdown, oxide film damage, metallisation defect/destruction | Open circuit, short-circuit, increased leakage current |
| Others | Alpha particles | Electron–hole pair generation, surface inversion | Soft error, increased leakage current |

---

### HAST — Highly Accelerated Stress Test

- **[Ch.3]** HAST places plastic devices in a humid environment of 85% relative humidity, under 45 psi of pressure and at 130–140°C. 24 hours of HAST at 140°C is roughly equivalent to 1000 hours of 85°C/85% RH testing, significantly reducing qualification time. *(2026-06-25)*

---

### MEMS Packaging Reliability

- **[Ch.3]** De Wolf identified five main reliability issues linked with MEMS packaging: *(2026-06-25)*
  1. The temperature required to mount/seal the packaging can affect the components.
  2. Outgassing of materials used in the package or devices can contaminate components and affect functioning and reliability.
  3. The environment inside the package (pressure, gases, humidity, particles) and changes in this environment can alter performance and/or reliability.
  4. Acoustic coupling between the package and the component is difficult to obtain.
  5. Packaging processes can induce stress and stress variations.

---

### Burn-In and FA

- **[Ch.3]** A direct link between burn-in and FA was proposed by Cha. Two failure types are considered: *(2026-06-25)*
  - **Type 1** (minor failure) — can be removed by either a minimal or complete repair.
  - **Type 2** (catastrophic failure) — can only be removed by a complete repair.

- **[Ch.3]** Two burn-in procedures: *(2026-06-25)*
  - **Procedure I** — Failed component is repaired completely regardless of failure type.
  - **Procedure II** — Only minimal repair for Type 1 failure; complete repair for Type 2 failure.

---

### Weaknesses of Standards-Based Testing

- **[Ch.3]** Standard-based testing has several weak points: *(2026-06-25)*
  - Acceleration factors for various stresses are not measured.
  - Stress conditions used are not necessarily correct for every application.
  - Cannot be sure the important FMs have been triggered.
  - Many tests are superfluous, expensive, and give limited practical results.

---

### Table 3.8 — Procedure for Elaborating the Accelerated Reliability Stress Programme (Knowledge-Based Testing)

| Step | Details |
|------|---------|
| **Define the technology envelope** | Requirements about business and marketing, technology and materials, quality and reliability are gathered. Preferably, the final product will be sold into more than one market, necessitating a testing envelope that encompasses all relevant markets |
| **Identify the areas of impact of product reliability** | These are usually areas of storage, shipping and handling impact, system assembly or other further processes downstream, and the final end user. For each area of impact, relevant environmental boundary conditions are defined |
| **Identify the potential product FMs and modes** | Knowledge from previous FA activities is used, such as risk-assessment process (identifying FMs of highest concern in the particular application) or FMEA. Literature searches for technologies not previously evaluated are also helpful, starting with similar existing technologies |
| **Understand the appropriate stress tests (STs)** | The most appropriate test for activating or accelerating the specific FM is identified. An understanding of ST material limitations and selection of the right stress and acceleration models for the test duration is needed. Purpose is to not activate FMs or FMos that have no linkage to the use conditions |
| **Elaborate acceleration models** | These models link use conditions and STs. Standard reliability models with acceleration factors, environmental conditions, material property data, and lifetime requirements are used as a starting point. Speculative models may help define initial reliability stress conditions until adequate data is available to validate them |
| **Elaborate stress models** | Allows preliminary indication, based on material properties, of the reliability and performance of the product in the end application. Usually used to narrow down the permutations needed to validate a product |
| **Elaborate validation guidelines** | Main purposes: (i) to avoid misunderstanding of FMs of new technologies using unrealistic stress conditions not experienced in the field; (ii) to update FMEA and test plans to reflect the correct priority of FMs |
| **Run STs to failure** | If possible and where time permits, STs are run to failure. Results allow analysis of discrepancies between models and data; acceleration factors for various stress conditions recalculated and reliability plan revised |
| **Document the test plan requirements for execution or implementation** | A company-standardised format is recommended. Data summary is presented to the project team and management; based on goals established in the use-condition criteria, it will be obvious whether the product passed requirements. Information is fully archived for future reference |

---

### Extrinsic vs Intrinsic Failures

- **[Ch.3]** **Extrinsic failures:** related to static or dynamic overload events (electrical, thermal, mechanical, and radiative) during the component life cycle, or due to misapplication (wrong component for the job). *(2026-06-25)*

- **[Ch.3]** **Intrinsic failures:** occurring mainly (but not exclusively) during the wear-out period, related to component design, materials, processing, assembly, packaging, and manufacturing. *(2026-06-25)*


- **[Ch.3]** Intrinsic reliability classification: *(2026-06-25)*
  - **Intrinsically reliable components** have high margins between their strength and the stresses that can cause failure, and do not wear out within their practicable lifetimes. Includes nearly all electronic components (if properly applied), nearly all mechanical non-moving components, and all correct software.
  - **Intrinsically unreliable components** have low design margins or wear out. Includes badly applied components, light bulbs, turbine blades, and parts that move in contact with others (gears, bearings, power drive belts, etc.).

- **[Ch.3]** During component operation, two possible influences act on lifetime: *(2026-06-25)*
  - **External influences** operate through direct inductive, capacitive or chemical effects, or occur on very sensitive structures through component operation (commutation, current flow, connection to electrical mass). Other effects include UV and X-ray irradiation (e.g. EPROM), radio-wave irradiation, and under special conditions, electromagnetic pulse (EMP). The EMP effect is complex and multiple in its action modes; protection measures are non-trivial and share some similarity with lightning protection, but with greater requirements due to differences in rise times, frequencies, field intensities, energies, and the domain involved potentially covering millions of square kilometres.
  - **Internal influences** act inside an electronic constructive element or semiconductor structure through the introduction of inductive currents, short-circuit, and inductive and particularly capacitive influences.

---

## Chapter 4 — The How of FA

### Table 4.1 — FA Techniques Used Before Unsealing

| Technique | Character | Details |
|-----------|-----------|---------|
| External inspection | Nondestructive | Visual check (package deformation or discolouration, attachment of foreign substances, large cracks, etc.) and check with optical microscopy (scratches, colour spots, cracks, etc.) |
| Electrical measurement | Nondestructive | First, the FMo is confirmed; then, if possible, electrical tests significant for item reliability are performed using curve tracer, oscilloscope, CV meter, LCR meter, noise meter, etc. |
| Verification of package cleanliness | Nondestructive | External cleaning of the package, then remeasurement. Leakage due to impurities on the package surface is identified |
| Identification of die inversion layer | Nondestructive | Storage at 200°C, then remeasurement. Repeated if the leakage has diminished. Leakage caused by an inversion layer at the die surface (Na⁺ ions into the oxide) is identified |
| Hermeticity testing | Nondestructive | Check for hermetic sealing of the package |
| X-ray radiography | Nondestructive | Internal X-ray imaging of the package to identify foreign particles or broken wires |
| Scanning acoustic microscopy (SAM) | Nondestructive | Detection of possible delaminations of the internal layers |

*After [3].*

---

### Table 4.2 — FA Techniques Used After Unsealing

| Technique | Character | Details |
|-----------|-----------|---------|
| Optical microscopy | Nondestructive | Visual inspection of the die to identify defects of metallisation, soldering, wire, mask or oxide |
| Microprobing | Nondestructive | Direct electrical analysis of the die circuit |
| Liquid crystal techniques | Nondestructive | Hot-spot detection (heat-generating defects) |
| Light (photo) emission microscopy (LEM/PEM) | Nondestructive | Detection of light-emitting defects |
| Optical beam-induced current (OBIC) | Nondestructive | Induced current imaging of defects |
| Scanning electron microscopy (SEM) | Nondestructive | High magnification imaging to identify defects |
| Electron beam-induced current (EBIC) | Nondestructive | Induced current imaging of defects (working mode of SEM) |
| Energy (wavelength)-dispersive X-ray (EDX/WDX) | Nondestructive | Elemental analysis (coupled with SEM instrument) |
| Atomic-force microscopy (AFM) | Nondestructive | High-resolution probe imaging |
| X-ray photoelectron spectroscopy (XPS) / ESCA | Nondestructive | Surface analysis |
| Verification of cleanliness of die surface | Nondestructive | Cleaning of the die surface, then remeasurement to identify possible leakage due to surface contamination |
| Identification of oxide contamination | Nondestructive | Cleaning of the oxide, then remeasurement to identify possible oxide contamination |
| Holographic interferometry | Nondestructive | Measurement of strain and vibration analysis |
| X-ray fluorescence | Nondestructive | Identification of the quality of various materials and the state of bonding wires, die bond, voids in the encapsulation resin |
| Fourier transform infrared (FTIR) spectroscopy | Nondestructive | Chemical analysis |
| Transverse sectioning | Destructive | Identification of bad solders of the connection wires (or of the die) |
| Junction revelation | Destructive | Structure sectioning and junction revelation to identify deep-diffusion problems and traces of breakdown of the junction, in depth |
| Focused ion beam (FIB) | Destructive | High-resolution die sectioning/imaging |
| Transmission electron microscopy (TEM) | Destructive | High-precision analysis based on the electrons transmitted through the (very thin, specially prepared) specimen |
| Auger electron spectroscopy | Destructive | Surface/depth analysis |
| Secondary-ion mass spectroscopy (SIMS) | Destructive | Compositional analysis in depth |

---

### Figure 4.1 — Typical FA Procedure for Electronic Components

```
─────────────────────────── INPUT DATA ────────────────────────────

  ┌──────────────┐       ┌─────────────────┐       ┌──────────────┐
  │ Failure mode │       │   Field data    │       │ Lot history  │
  └──────┬───────┘       └────────┬────────┘       └──────┬───────┘
         │                        │                        │
         ▼                        ▼                        ▼
  ┌──────────────────┐   ┌─────────────────┐   ┌────────────────────┐
  │ Parallel analysis│◄──│Failure validation│──►│ FA strategy        │
  │   preparation    │   └─────────────────┘   │   elaboration      │
  └──────────────────┘                         └────────────────────┘
         │
         ▼
  ┌───────────────────────────────────────────────────────────────┐
  │         FA nondestructive techniques used before unsealing:   │
  │   - External inspection (visual, optical microscope)          │
  │   - Electrical measurement                                    │
  │   - Others (hermeticity, X-ray radiography, SAM, etc.)        │
  └──────────────────────────────┬────────────────────────────────┘
                                 │
─────────────────────────── WORKING PROCEDURE ──────────────────────
                                 │
                                 ▼
                        ◇ Is the FM identified? ◇
                       /                         \
                     NO                          YES
                     │                            │
                     ▼                            ▼
          ┌────────────────────┐         ┌─────────────────────┐
          │     Unsealing      │         │  Hypothesis         │
          │ (Decapping,        │         │  verification       │
          │  Decapsulation)    │         └──────────┬──────────┘
          └────────┬───────────┘                    │
                   │                                │
                   ▼                                │
          ┌────────────────────┐                    │
          │ First-level FA     │                    │
          │ techniques:        │                    │
          │ Optical microscopy,│                    │
          │ SEM, Liquid        │                    │
          │ crystals, etc.     │                    │
          └────────┬───────────┘                    │
                   │                                │
                   ▼                                │
          ◇ Is the FM identified? ◇                 │
         /                         \               │
       NO                          YES             │
       │                            └──────────────┘
       ▼                                           │
  ┌────────────────────────────────────┐           │
  │ Advanced FA techniques:            │           │
  │ Surface analysis, Elemental and    │           │
  │ chemical analyses, Induced current │           │
  │ imaging of defects, etc.           │           │
  └─────────────────────┬──────────────┘           │
                        │                          │
                        ▼                          ▼
                 ┌──────────────────────────────────────┐
                 │         FA report elaboration         │
                 └──────────────┬───────────────────────┘
                                │
─────────────────────────── OUTPUT DATA ────────────────────────────
                                │
                ┌───────────────┴───────────────┐
                ▼                               ▼
       ┌─────────────────┐            ┌───────────────────┐
       │Failure mechanisms│            │ Corrective actions │
       └─────────────────┘            └───────────────────┘
```

---

### Die Delayering

- **[Ch.4]** A die delayering sequence typically starts with plasma etching or RIE to remove the nitride passivation on the die surface, followed by a series of wet chemical etching steps to remove the remaining die layers. The glassivation layer must often be removed by RIE before microprobing as it is too hard to penetrate with the probe needle. Silicon-related defects may subsequently be highlighted with either a Wright etch or a Sirtl etch. *(2026-06-25)*

---

### IDDQ Testing

- **[Ch.4]** IDDQ (Idd = supply current, Q = quiescent) is a widely used electrical technique for production quality, reliability improvement, design validation, and FA. The resistance between Vdd and GND pins is measured; power supply is connected and current measured. Supply current >a few mA indicates a bad chip. The quiescent logic condition (stable state between logic state transitions) is measured. *(2026-06-25)*
- **[Ch.4]** IDDQ advantages: only ~100 test vectors needed; detects faults invisible to other methods; can be used as a burn-in procedure. Drawbacks: requires special test instruments and extra preparation time since very low currents (nA range) must be measured. *(2026-06-25)*

---

### Deep Level Transient Spectroscopy (DLTS)

- **[Ch.4]** DLTS is a combination of electrical and thermal techniques used to characterise deep levels from the forbidden band. Spectral data provides information about traps, enabling the trapping mechanism in semiconductors (a possible FM) to be understood. *(2026-06-25)*
- **[Ch.4]** DLTS is a high-sensitivity technique reaching concentrations of 1 part in 10¹² of host material atoms. Main disadvantage: cannot be used for insulating materials, as it is difficult or impossible to produce a space region whose width can be changed by external voltage bias — capacitance-based DLTS methods therefore cannot be applied. *(2026-06-25)*

---

### Microthermographic Techniques

- **[Ch.4]** Microthermographic FA aims to locate areas of excessive heating ('hot spots') on the die surface, indicative of high current flow from metallisation shorts, leaky junctions, or other die defects. *(2026-06-25)*

#### Liquid Crystal Microthermography
- **[Ch.4]** The cheapest microthermographic option. Exploits thermochromism — LCs undergo several thermotropic phase changes with temperature: crystalline (very low temp) → smectic/cholesteric/nematic (LC phase, molecules align parallel) → isotropic (high temp, molecules randomly oriented). Only nematic, cholesteric, and isotropic phases are exploited for hot-spot detection. *(2026-06-25)*
- **[Ch.4]** When viewed with an optical microscope with a polarising filter and cross-polarised analyser: nematic LC films appear rainbow-coloured; isotropic films appear black (cross-polarised light blocked). A nematic LC film on a biased die surface appears rainbow-coloured except at hot spots, where raised temperature converts LCs to isotropic phase — appearing black. Example: heat generated by polysilicon–polysilicon shorts. *(2026-06-25)*

---

### Electron Microscopy

- **[Ch.4]** Optical microscopes are resolution-limited to ~200 nm (linked to the wavelength of light). Using electron beams allows smaller wavelengths and much higher magnification. *(2026-06-25)*

#### Voltage Contrast (SEM)
- **[Ch.4]** Based on the principle that local electrical fields can restrict or enhance secondary electron emission from a sample bombarded by the SEM beam. Contrast differences localise electrical fields, detecting: open junctions, open conductor lines, and reverse-biased junctions. *(2026-06-25)*
- **[Ch.4]** Common SEM problem: charge accumulation on non-metallic sample surfaces worsens image resolution. Mitigated by coating non-metallic/biological materials with carbon or gold. *(2026-06-25)*
- **[Ch.4]** If SEM beam energy >3 keV, electrons penetrate the sample surface and electrically charge it (difference between electrons entering and those exiting as ground current or emitted electrons). This can be used to locate opens in metal lines or via chains without external power supplies. Rule of thumb: primary SEM beam penetrates ~1000 Å per 1000 eV of beam energy (10 keV beam ≈ 1 µm penetration). An isolated conductor covered by 1 µm of passivation will become negatively charged due to trapped electrons. *(2026-06-25)*

#### TEM
- **[Ch.4]** Key distinction from SEM: TEM image is magnified by magnetic lenses and recorded on a fluorescent screen, photographic plate, or CCD camera. Sample must be thin enough for the electron beam to pass through. Resolution sufficient to image silicon atoms at 0.078 nm at magnifications of 50,000,000×. *(2026-06-25)*

#### Auger Electron Spectroscopy (AES)
- **[Ch.4]** AES requires generation of at least 3 electrons (e.g. KLL Auger electron from K, L1, L2 shells). Elements with fewer than 3 electrons are undetectable. Auger electron energy (20–2000 eV) is element-specific. Electrons originate from the surface or just beneath (<50 Å), enabling detection of elements at <1% atomic composition. Applications: surface contaminants, corrosion failures, elemental concentrations in dielectric layers. Limitation: electron beam can charge insulator surfaces or damage certain materials. *(2026-06-25)*

#### Secondary Ion Mass Spectroscopy (SIMS)
- **[Ch.4]** Material bombarded by high-energy ions (1–30 keV), ejecting/sputtering atoms; a small percentage become positively or negatively charged secondary ions. Primary ion beam choice influences detection limits: oxygen for electropositive elements (low ionisation potential: Na, B, Al); caesium for electronegative elements (C, O, As). *(2026-06-25)*
- **[Ch.4]** Cluster SIMS: compositional depth profiling in organic/polymeric systems without rapid signal decay seen under atomic bombardment. Advantage over AES: detects all elements including H and He. *(2026-06-25)*
- **[Ch.4]** TOF-SIMS (Time of Flight SIMS): analyser collects secondary ions; concentration and ionisation efficiency obtained from peak intensity. Complements XPS in surface analysis. Provides elemental and chemical (molecular fragment) information from ~1 nm depth with ppb detection limits. XPS provides elemental and chemical (oxidation state) information from ~10 nm depth. *(2026-06-25)*

#### FTIR
- **[Ch.4]** FTIR provides information about chemical bonding and molecular structure of organic and inorganic materials. Complementary to EDX for identifying unknown materials. Based on the ability of bonds to vibrate at characteristic frequencies; molecule absorbs IR energy at frequencies characteristic to that molecule. Transmittance/reflectance at different frequencies is translated into an IR absorption plot of reverse peaks, matched against known spectra. *(2026-06-25)*
- **[Ch.4]** Key FTIR advantage: oxygen and nitrogen do not absorb infrared rays, so no vacuum is needed — air is perfectly transparent to IR. *(2026-06-25)*

---

### Acoustic Techniques

#### Scanning Acoustic Microscopy (SAM)
- **[Ch.4]** SAM operating modes: *(2026-06-25)*

  | Mode | Description |
  |------|-------------|
  | **A-scan** | Real-time oscilloscope waveform of acoustic signals based on reflected echoes at a single x-y point |
  | **B-scan** | 2D description along a test line (Y); cross-sectional display of ultrasonic reflections at various interfaces along the package depth (X-Z plane at depth A) |
  | **C-scan** | 2D description at a particular depth (Z); image of reflected echoes at the focused plane of interest (X-Y plane at depth Z) |

---

### Laser Techniques

- **[Ch.4]** **Laser Beam Induced Current (LBIC):** used for locating weak points of MOS transistors, detecting inter-level shorts and recombination–generation centres, and detection of latch-up (a common FM of MOS transistors). *(2026-06-25)*
- **[Ch.4]** **Confocal Laser Scanning Microscopy (CLSM):** acquires in-focus images from selected depths ('optical sectioning'). Coherent laser light passes through a pinhole aperture conjugate with a scanning point on the specimen and a second pinhole in front of the detector. For opaque specimens: surface profiling. For non-opaque specimens: high-quality interior images without superimposition of information from multiple depths. *(2026-06-25)*
- **[Ch.4]** **Laser Terahertz Emission Microscopy (LTEM):** non-contact inspection of defective interconnections in LSI chips. Femtosecond laser pulses produce transient photocurrents in interconnections, emitting THz pulses into free space. Metallic lines connected to photo-excited pn junctions act as THz emission antennae, enhancing emission efficiency near resonant frequencies corresponding to line lengths. *(2026-06-25)*

---

### Emission Microscopy

#### Photoemission Microscopy (PEM / LEM)
- **[Ch.4]** PEM/LEM identifies defect sites by detecting emitted photonic radiation, primarily through carrier recombination mechanisms. Photoemissions are low-level and not visible to the naked eye — a CCD camera and computer amplify and overlay the radiation image onto the die surface image, pinpointing the defect location. PEM merely identifies the position; other FA techniques investigate the physical anomaly. *(2026-06-25)*
- **[Ch.4]** Main PEM applications: detecting avalanche luminescence from junction breakdowns, junction defects, currents from saturated MOS transistors, and transistor hot-electron effects. Preferred at die level; more complicated at wafer level due to multiple dice and reticle fields. *(2026-06-25)*

#### Infrared Emission Microscopy (IREM)
- **[Ch.4]** Used to locate hot carrier and thermal emission sites in CMOS ICs. Combined with HgCdTe 256×256 NICMOS3 focal plane array (spectral response 0.8–2.5 µm), replacing conventional CCD-based systems (limited to 0.1–1.1 µm). Detection efficiency improved by substrate thinning and wavelength-optimised anti-reflection coatings. Can localise both statically excitable and functional defects. Also used to locate anomalies in solder bumps of flip-chip packages as a cheaper alternative to real-time X-ray systems. *(2026-06-25)*

#### Optical Beam Induced Resistance Change (OBIRCH)
- **[Ch.4]** An IR laser scanned on the IC backside generates localised thermal gradients in metallic elements. Thermal gradients change metal resistivity (positive thermal coefficient), modifying IC power consumption. Current/voltage variations at IC pins are detected and imaged to localise current-related defects. Thin metallic strip lines are more affected than larger ones — appropriate for localising microbridges between conductors. *(2026-06-25)*

---

### Atom Probe

- **[Ch.4]** Combination of TOF-SIMS and Field Ion Microscopy (FIM) providing 1D compositional maps and 3D maps of metal samples with near-atomic resolution. A sharp silicon tip (prepared by FIB milling) is placed on the specimen; atoms at the apex are ionised by pulsed voltage (2–20 kV) and escape electrostatically to the detector. Mass-to-charge ratio is calculated from the time between pulse and detector impact, identifying the element. *(2026-06-25)*
- **[Ch.4]** Typical weakness: very strong electric fields at the tip apex induce mechanical forces leading to tip failure. Typical failure modes of silicon tips: (i) deformation due to interaction between oxidised amorphous layer and mechanical vibrations; (ii) rip-off of an isolating oxide layer; (iii) rip-off of a cap layer due to insufficient adhesion; (iv) tip failure during analysis due to rising voltage. *(2026-06-25)*

---

### Neutron Radiography

- **[Ch.4]** X-ray attenuation is directly dependent on atomic number; neutron attenuation is selective — organic materials and water (high H content) are clearly visible, while many structural materials (Al, steel) are nearly transparent. *(2026-06-25)*
- **[Ch.4]** Used extensively for space programme devices. Can detect cracks of 0.1 mm thickness. Useful for inspecting: oil levels, insulating organic materials, adhesive layers in composite materials, and surface layers. All O-rings and joints containing hydrogen can be observed even through several centimetres of steel. *(2026-06-25)*

---

## Chapter 5 — FA — What?

### FMo vs FM Distinction

- **[Ch.5]** **FMo (Failure Mode):** the external symptom of the failed product. Example: bipolar transistor has a short circuit between emitter and collector. *(2026-06-25)*
- **[Ch.5]** **FM (Failure Mechanism):** the physical process that led to the failure. FA starts from an FMo and leads to identification of the FM. *(2026-06-25)*
- **[Ch.5]** Corrective actions for improving reliability can only be elaborated if the FM is well understood. A reliability growth programme is needed, coupled with a management strategy change so that more FMos identified during testing receive a corrective action instead of a repair. *(2026-06-25)*
- **[Ch.5]** FM identification is essential for accelerated testing reliability because: (1) FMs produced by high-level stress cannot be different from those observed during actual service conditions; (2) obtained degradation laws must be extrapolated beyond the test period, and extrapolation must be made separately for each population affected by an FM. *(2026-06-25)*
- **[Ch.5]** Only 'real' FMs found at the component level provide detailed explanations of both structural degradation processes of the device and degradation of the materials used to build it. *(2026-06-25)*

### FM Groupings

- **[Ch.5]** FMs grouped as: **Bulk, Interface, Oxide, Metallisation, and Packaging.** Bulk material and interface properties define intrinsic reliability; defects establish extrinsic reliability. The only way to produce a component with high intrinsic reliability is to avoid FMs initiated during the manufacturing process. *(2026-06-25)*

---

### Failure Risk — Wafer Level

- **[Ch.5]** Two key observations at wafer level: (i) many interesting physical and chemical phenomena are involved in component degradation and failure; (ii) the wafer is a collection of reliability risks — almost any process step may induce a new FM or increase the actions of FMs induced by a previous step. *(2026-06-25)*
- **[Ch.5]** Four most important subjects from the standpoint of reliability: Semiconductor-related FMs, Metal-related FMs, Oxide-related FMs, and FMs related to other wafer-level processes. *(2026-06-25)*

---

### Semiconductor

- **[Ch.5]** Wafer flatness directly impacts device line width capability, process latitude, and yield. Polishing of Si wafers plays a key role as a globally planar, mirror-like surface is required. Surface roughness depends on carrier head unit properties and machining conditions (working speed, polishing pad type, temperature, down force). *(2026-06-25)*
- **[Ch.5]** Cracks or scratches on the wafer surface (usually from improper handling) may generate open or short circuits. Careful visual inspection is required to monitor surface quality during processing and before sealing. *(2026-06-25)*
- **[Ch.5]** The most important characteristic of any semiconductor starting material is the number of **crystallographic defects** — interruptions in the regular atomic arrangement pattern. *(2026-06-25)*

---

### Table 5.1 — Main WLR Tests for General Applications

| Test | Possible FM | Test Description |
|------|-------------|-----------------|
| **Contact-integrity test** | Aluminium spiking: silicon dissolution into an overlying Al film, followed by Al penetration at contact windows during contact annealing. Dissolved Si precipitates as Si islands on oxide strips or as epitaxial Si at contact windows — may result in total contact occlusion | Test structures stressed at high temperature; contact degradation evaluated electrically at room temperature and in the dark. Contact spiking revealed by severe increase in leakage current; contact occlusion revealed by increase in current resistance |
| **Hot-carrier-injection test** | For MOS devices, if large electric fields are applied, carriers can gain sufficient energy (hot carriers) to create electron–hole pairs by impact ionisation on Si atoms. Some carriers are injected into the gate oxide and may induce interfacial and/or bulk oxide charges, causing degradation of electrical parameters (mobility, threshold voltage, drain current) | MOSFET parameters are measured, directly related to the capability of the process to generate and trap hot carriers. Accelerated stress test can be performed under the most severe conditions and results compared with characterisation work performed during qualification |
| **Metal-integrity test** | Electromigration (EM) in thin-film interconnection lines: electron/ion flux induced in metal tracks by high current densities. Degradation of the conductor is due to agglomeration of vacancies, which can result in a void through the metal track or local accumulation of metal atoms, which can cause a short circuit between adjacent conductor layers | Wafer-level test SWEAT (standard wafer-level EM accelerated test), based on acceleration of EM in the metal line by means of high current density: the metal line is subjected to constant current stress defined by a chosen acceleration factor and the maximum temperature the metal line can reach without activating other diffusion mechanisms |
| **Oxide integrity test** | Oxide dielectric breakdown occurs when sufficient charge is injected into the oxide by forcing a current through the dielectric or by applying a high electrical field. Damage produces structural changes (traps or interface states), leading to a low-resistance path through the oxide layer and permanent leakage of the dielectric | For gate-oxide applications: constant voltage stress (CVS) or linear voltage ramp stress (LVRS). For tunnel-oxide applications: constant current stress (CCS) or exponential ramped current stress (ERCS) |

---

### Table 5.2 — FMs Induced by Crystallographic Defects

| Class of Defect | Defect Type | Detection Methods | Effects (Possible FMs) |
|-----------------|-------------|-------------------|------------------------|
| **Point defects** | **Vacancies** — sites usually occupied by an atom but unoccupied; neighbouring atom moves to occupy the vacant site causing the vacancy to move in the opposite direction. **Interstitials** — atoms which occupy a site in the crystal structure at which there is usually not an atom. **Frenkel defect** — formed between a vacancy and an interstitial. **Clusters (swirls)** — formed when different kinds of point defect come together; if a vacancy encounters an impurity, the two may bind together. **Extrinsic point defects** — more critical than intrinsic point defects; involve foreign atoms (usually from dopants, oxygen, carbon or as dislocations — linear defects around which some of the atoms of the crystal lattice are misaligned): (i) edge dislocations and (ii) screw dislocations. **Dislocation loops** — occur if a dislocation consists of an extra plane of atoms (or missing plane of atoms) lying entirely within the crystal; usually circular in shape | Photoluminescence, optical microscopy, preferential chemical etching and X-ray topography | The presence of point defects is important in the kinetics of diffusion and oxidation. The rate at which diffusion of dopants occurs is dependent on the concentration of vacancies. This is also true for oxidation of silicon |
| **Line defects** | **Dislocations** — play a major role in fatigue crack initiation phase. May also serve as sinks for metallic impurities and disrupt diffusion profiles (may play a beneficial role in removal of impurities from the wafer during gettering) | TEM, field ion microscopy, atom-probe techniques, DLTS | Play a major role in fatigue crack initiation phase. May serve as sinks for metallic impurities and disrupt diffusion profiles |
| **Area defects** | **Grain boundaries** — regions where the crystallographic direction of the lattice abruptly changes; usually occurs when two crystals begin growing separately and then meet. **Twins** — electrically quiescent defects that do not introduce large stresses and do not accumulate impurities. **Stacking faults** — typical defects induced by process phases (e.g. oxidation); kinetics of growth is related to local concentration of point defects; these defects are sinks for impurities | High-resolution X-ray diffraction, Nomarski microscopy, AFM, TEM, SEM, HREM, Raman and photoluminescence spectroscopy | Grain boundaries most common in EFG Si ribbons used for manufacturing solar cells. (i) Reduce short-circuit current density as a result of reduction in minority carrier lifetime; (ii) reduce voltage and fill factor as a result of introduction of a high density of space-charge recombination centres. Oxidation-induced stacking faults (OSFs) may increase reverse current in pn junctions, degrade breakdown voltage, and reduce gain of bipolar devices |
| **Bulk (volume) defects** | **Voids** — regions where there are no atoms; can be thought of as clusters of vacancies. **Precipitates** — where impurities cluster together to form small regions of a different phase | TEM, SEM, HREM, Raman and photoluminescence spectroscopy | Typical defects induced by various process steps; voids by metallisation, precipitates by diffusion |

---

### Passivation

- **[Ch.5]** SiO₂ (relative dielectric constant k = 3.9) is the material of choice for inter-layer dielectric (ILD) applications due to exceptional thermal, electrical, and mechanical properties. In almost every important field (thermal stability, breakdown voltage, leakage current, mechanical properties) — except dielectric constant — properties of any low-k material (k < 3.9) are expected to be inferior to SiO₂. *(2026-06-25)*
- **[Ch.5]** Possible failure risks at passivation: formation of cracks or pinholes (electrical breakdown and short circuit), non-uniformity of film thickness (lowering of breakdown voltage and increasing of leakage current). Crystallographic defects induced during oxidation include dislocations and stacking faults. *(2026-06-25)*

### Interface State Generation

- **[Ch.5]** Imperfections in the oxide (mobile ions Na⁺, K⁺; fixed oxide charge; oxide traps) resulting from poor fabrication processes can initiate interface states that induce charge at the oxide-silicon interface and in the oxide, altering the flat-band voltage. *(2026-06-25)*
- **[Ch.5]** Four distinct types of charge in the oxide-silicon system: *(2026-06-25)*
  1. Fixed interface charge
  2. Oxide-trapped charge
  3. Interface-trapped charge
  4. Mobile charge from alkali-metal ions (particularly sodium)
- **[Ch.5]** Interface states at the Si-SiO₂ interface can be generated by necessary electrical stress tests. Dangling silicon bonds are usually passivated by hydrogen atoms (electrically inactive); density of unpassivated dangling bonds is negligibly low (<10¹⁰ cm⁻²). Under electrical stress, weak Si-H bonds may break, creating interface states. *(2026-06-25)*

---

### Hot Carrier Effects

- **[Ch.5]** 'Hot carrier injection' (HCI): carriers (electrons or holes) under intense electric fields gain sufficient kinetic energy to overcome a potential barrier and are injected into the gate oxide. Occurs near the drain end of a MOSFET. Results in interface state generation and charge trapping, causing transistor parameter degradation (switching frequency degradation or breakdown). Excess electron-hole pairs from impact ionisation can increase substrate current and in gross cases facilitate latch-up. *(2026-06-25)*

### Table 5.3 — Main Characteristics of Oxide-Related Failure Mechanisms

| Failure Mechanism (FM) | Short Description | Possible Failure Modes (FMos) |
|------------------------|-------------------|-------------------------------|
| **Interface state generation** | Charges induced at Si-SiO₂ interface and in the oxide may modify the flat-band voltage of MOS devices and increase leakage in reverse-biased bipolar junctions | In MOS devices: drift of threshold voltage due to modifications of the flat-band voltage. In bipolar devices: reverse current increases and becomes unstable |
| **Hot-carrier effects** | High-energy electrons and holes injected into the gate oxide near the drain, as localised oxide-charge-trapping and interface-trap generation. Hot-carrier-related degradation can occur in deep submicron devices at drain voltages as low as 1.8 V | Significant reduction in drain voltage and transconductance, shifts in threshold voltage and decrease in drain-current capability |
| **Dielectric breakdown** | Destruction of a dielectric layer, usually as a result of excessive potential difference or voltage across it, when electric field strength surpasses the dielectric strength of an insulator. Two phenomena: (i) breakdown of gate oxide and (ii) time-dependent dielectric breakdown (TDDB) | Conductive or short-circuit paths through the dielectric or leakage at the point of breakdown |

---

### HCI — Four Known Mechanisms

- **[Ch.5]** Four known HCI mechanisms: *(2026-06-25)*

  | Mechanism | Description |
  |-----------|-------------|
  | **SHEs** (Substrate Hot Electrons) | Electrons thermally generated in the substrate and drifted by electric field towards the interface. Substrate current from impact ionisation can induce bi-latch-up in CMOS; hot carriers injected into gate oxide form interface states and create trapped oxide charge, causing instabilities and parameter drift. More severe as device geometries shrink. Correction: limit source-drain voltage below threshold for hot carrier generation |
  | **CHEs** (Channel Hot Electrons) | Carriers traverse the channel and undergo a low number of lattice collisions under the influence of a strong lateral electric field |
  | **DAHCs** (Drain Avalanche Hot Carriers) | Carriers created in avalanche plasma undergo high numbers of impact ionisations due to strong lateral electric field. Most physically destructive HCI FM |
  | **SSHEs** (Source Side Hot Electrons) | Gives rise to a larger shift in threshold voltage and a larger drift in saturated drain current |

- **[Ch.5]** HCI produces non-catastrophic failures that develop gradually and change device performance. Effects more pronounced in nMOS than pMOS: HCI requires 3.3 eV for electrons to overcome the Si-SiO₂ surface energy barrier (vs 4.6 eV for holes). *(2026-06-25)*
- **[Ch.5]** For p-channel devices: degradation caused by hot carriers injected into the drain side of the gate oxide (type of trapped carrier depends on bias conditions). For n-channel: degradation caused by hot holes. *(2026-06-25)*
- **[Ch.5]** HCI generally occurs in logic circuits during switching transitions only — not during logic steady states. During steady states, either there is a high field near the drain with a low gate (channel off), or the electric field near the drain is low; in both cases no hot carriers are generated. Effects can be determined by measuring currents, voltages, and capacitances. *(2026-06-25)*
- **[Ch.5]** HCI degradation also occurs in bipolar transistors — well-known hFE degradation when reverse bias is applied across emitter and base. Significant increase in minimum noise figure (NFmin) and noise resistance (Rn) observed after hot carrier stress. Interface states at the source side have a much greater impact on NFmin and Rn degradation, indicating that local noise at the source side plays a more important role in determining channel noise. *(2026-06-25)*
- **[Ch.5]** Two degradation mechanisms for HCI behaviour of lateral integrated DMOS transistors: (1) Mobility degradation... *(2026-06-25)*

### HCI — DMOS Degradation & Substrate Bias

- **[Ch.5]** Two degradation mechanisms for HCI behaviour of lateral integrated DMOS transistors: *(2026-06-25)*
  - **Mobility degradation:** drift of linear drain current Id,lin increases with increasing drain voltage, tending to saturate for longer times.
  - **Source Side Injection (SSI):** gives rise to larger Vt shifts and larger Id,sat drift, with a large statistical spread among different devices.

- **[Ch.5]** HCI degradation in the presence of substrate bias has faster degradation and is distributed towards the channel compared to the channel hot-carrier regime. *(2026-06-25)*

---

### Table 5.4 — Methods for Avoiding or Eliminating Failures Produced by HCI

| Proposed Method | Demonstrated Result | Reference |
|-----------------|--------------------:|-----------|
| Using drain engineering to diminish the peak of the lateral electric field close to the drain edge, by modifying the doping profile through introduction of source/drain extension implants using a lower dose | Reduces high electric fields generated by constant-voltage scaling | Wittmann [30] |
| Design modifications: larger channel length, double diffusion of source and drain, or graded drain junctions | Minimises HCI | Wittmann [30] |
| Optimising the concentration of nitrate of the interface layer (reduces trap density) and nitrogen (above acceptable range leads to gate-oxide breakdown) | Combats gate-oxide degradation | Wittmann [30] |
| Reducing the high drain field and separating the main current path away from maximum field | Reduces hot-carrier generation | Rubaldo [31] |
| Pushing impact ionisation region deep into silicon by positioning the injection inside the gate edge | Reduces hot-carrier injection | Rubaldo [31] |
| Reducing hot-carrier trapping by various techniques: gate-oxide thickness reduction, lightly doped MOSFET structure, deuterium post-metal annealing, double-diffused MOSFET structure, incorporating Si₃N₄ as gate oxide | Suppresses hot-carrier effect | Rubaldo [31] |
| Lowering channel implant dose (arsenic) and obtaining a smoother junction doping profile and wider/lower electrical field distribution | By decreasing arsenic dose by a factor 1.5, HCI reliability improved by a factor 3 | Rubaldo [31] |
| Deep submicron CMOS process using phosphorus transient enhanced diffusion; As/P LDD nMOSFETs with and without transient enhanced diffusion fabricated | Improves HCI reliability of 3.3 V I/O transistors | Wang [32] |
| Using deuterium instead of hydrogen for optimised post-metal anneal process; benefits still observed even if post-metal anneal is followed by final SiN cap wafer passivation process | 50–100 times improvement in transistor-channel HCI lifetime | Kizilyalli [33] |
| SiO₂ passivation of AlGaN/GaN HEMT, decreasing surface trapping and 2DEG depletion during hot-carrier stress | Diminishes degradation of the electric characteristics (forward drain current); a passivated device exhibits less degradation than an unpassivated one | Ha [34] |
| TCAD-driven hot-carrier reduction methodology of 3.3 V I/O pMOSFETs design; drain structures optimised considering tradeoffs between HCI and I_ON, HALO/SDE of both core and I/O transistors optimised for photo-mask reduction | Improves HCI reliability | Miura [35] |

---

### Dielectric Breakdown (DB)

- **[Ch.5]** DB can be intrinsic or extrinsic. **Intrinsic DB** occurs when the electric field reaches the max field strength that molecular bonding can withstand — always occurs at lower fields (6–12 MV/cm) in good quality thermal oxide due to non-ideal SiO₂ structure (thinner oxides yield higher breakdown fields). Intrinsic: 8–12 MV/cm. **Extrinsic DB** occurs at 5–6 MV/cm due to pinholes and weak spots. *(2026-06-25)*

### Table 5.5 — Methods for Studying DB

| Subject of Measurement/Analysis | Methods and Results | Reference |
|----------------------------------|---------------------|-----------|
| Structural and electrical evolution process of gate DB | Conductive AFM (CAFM) with ultrathin SiO₂ films. Degradation mode is quite different from thick films. A DB transient observed at higher electric field and current density than in 5 nm SiO₂ films | Zhang [36] |
| Two stressing methods: (i) time-zero dielectric breakdown (TZDB) — stress increased in steps; (ii) TDDB — constant stress | (i) Voltage tests: voltage applied to gate contact, current monitored by dielectric layer; (ii) Current tests: current injected, gate voltage needed to sustain it is measured | Sirad [37] |
| Chemical nature of the percolation path formed in ultrathin SiON layers | STEM with high-resolution electron energy loss spectroscopy | Li [38] |
| Microstructural defects responsible for breakdown in ultrathin SiOₓNᵧ, Si₃N₄ and HfO₂ gate dielectrics | TEM reveals physical defects associated with gate dielectric breakdown involve both gate electrodes (poly-Si gate) and Si substrate. High-resolution TEM and chemical/elemental analysis in TEM show sources of gate dielectric breakdown failure defects | Pey [39] |
| Post-breakdown degradation of ultrathin gate oxide Si MOSFET devices | Electrical characterisation, cross-sectional TEM analysis and theoretical simulation. Physical location of DB point is shown to be of critical importance in determining the type of DB and the post-DB electrical characteristics | Tung [40] |

---

### Table 5.6 — Methods for Avoiding or Eliminating Failures Produced by DB

| Proposed Method | Demonstrated Result | Reference |
|-----------------|---------------------|-----------|
| Studying the impact of gate-DB-induced microstructural defects in poly-Si/SiON gate stacks | DB-induced epitaxy (DBIE) dilation on the post-breakdown path control the post-breakdown in the breakdown path evolution; formation of metal filament (if compliance current level exceeds a certain limit) observed; gate leakage current can recover from the post-breakdown under reverse electrical biasing | Li [46] |
| Choosing best high-permittivity insulator for possible gate dielectric applications | Thin stacks comprising alternating layers of Ta₂O₅/ZrO₂, La₂O₅/HfO₂ and ZrO₂/HfO₂ are deposited on silicon substrates; Ta₂O₅/ZrO₂ and ZrO₂/HfO₂ show the highest breakdown field and the lowest leakage current | Zhang [47] |
| Choosing the best silicide material as gate dielectric about the behaviour at breakdown transient | Contact and gate silicide migration induced by gate dielectric breakdown transient has been observed in various silicide materials (Ni, Co and Ti silicides). Ti silicide is the best choice | Tung [48] |
| Using an array-based test circuit to efficiently characterise gate dielectric performance | Proposed circuit facilitates study of the statistical process and investigations of any spatial correlation of dielectric failures, and can monitor a progressive decrease in gate resistance. Experimental evidence shows more severe breakdown and device degradation in threshold voltage, drain current and transconductance for shorter-channel pMOSFETs with O/N dielectrics | Keane [49] |
| Studying failure of dielectrics by simulating Cu ion concentration and internal electric-field profiles in a dielectric material and solving the transient continuity/Poisson equations | Failure in Cu/SiO₂/Si devices occurs due to a pile-up of Cu ions at the cathode and a subsequent increase in electric field. Comparison with experimental data shows that polarisation of the dielectric due to field concentration around the pores of dielectrics contributes to acceleration of breakdown; breakdown in porous dielectrics is faster than in solid dielectrics due to field concentration around the pores | Lee [50] |
| Replacing SiO₂ as gate dielectric material with high-k dielectric: Al-CVD zirconium oxide | Wet etching of heat-treated atomic-layer chemical-vapour-deposited (Al-CVD) zirconium oxide (high-k dielectric) in HF-based solutions. It is found that heat-treated material, while refractory to wet etching at room temperature, is more amenable to etching at higher temperatures when methane sulfonic acid is added to dilute HF solutions | Achanta [51] |
| Degradation of MOS transistors under RF stress by hot-carrier generation, negative-bias temperature instability and gate dielectric breakdown | Experimental results indicate that existing models are strongly applicable into the gigahertz range for describing MOS transistor degradation in an RF circuit. The probability of gate dielectric breakdown appears to increase rapidly at such high stress frequencies, increasing the design margin for RF power circuits | Balasubramanian [52], Sasse [53] |

---

### Metallisation

- **[Ch.5]** Basic requirements for interconnect materials: low/medium resistivity, good adhesion to adjacent layers, stability of mechanical and electrical properties, resistance to corrosion and EM, low film stress, controllable deposition and patterning. Possible materials: metals (low resistivity), polycrystalline Si (medium resistivity), highly doped diffused regions in Si (medium resistivity). Two approaches to lower contact resistance: use highly doped Si as the contact semiconductor, or choose a metal with a lower Schottky barrier height. *(2026-06-25)*

### Electromigration (EM)

- **[Ch.5]** JEDEC standard SWEAT (Standard Wafer-level EM Accelerated Test) produces larger sigmas, sometimes traceable to bimodal failure-time distributions attributed to the algorithm in the JEDEC method's control loop that adjusts stress current to maintain a constant target failure time. *(2026-06-25)*

### Table 5.7 — Main Characteristics of Metal-Related Failure Mechanisms

| Failure Mechanism (FM) | Short Description | Possible Failure Modes |
|------------------------|-------------------|------------------------|
| **Electromigration** | Momentum transfer from current-conducting electrons to metal atoms produces a flux of metal atoms in the opposite direction to the conventional current flow ('electron wind'), producing voids at the negative electrode and whiskers/hillocks (if no passivation layer is present) or hillocks at high current densities (>2×10⁹ A/cm² in Al). The effect is important when the total surface area is small | Open circuit (voids produce interruption of metal lines), leading to interconnect open or high resistance, resulting in malfunction or speed degradation. Short circuit (hillocks and whiskers bridge between conductors) |
| **Hillocks** | Protrusions on surface of metal films formed during deposition or post-deposition heat treatments. Main possible causes: incorrect metallisation process, electromigration, and thermal cycling | Interlevel shorts (faults at wafer testing). Short circuit during usage (failures) |
| **Voids** | Over-alloying of Al/Si systems, coupled with improper cooling rates in interconnects, produces tensile stresses in subsequent processes. These can create voids sufficient to lead to failure. Defects initiating this FM are difficult to detect during manufacturing; only known method involves destructive physical analysis following ageing of test structures | Interruption of interconnections (open circuit) |
| **Delamination** | Separation of thin metal films from intended bonding surfaces if substrate was contaminated prior to film deposition or if film materials were mismatched to the substrate. Thinner metal layer over a step than in a flat area | Open circuit, high resistance, intermittent contact |
| **Corrosion** | Wearing away due to chemical reactions, mainly oxidation when a gas or liquid chemically attacks an exposed surface, often a metal. Accelerated by high temperature or by acids and salts. | Increased electrical resistance of the interconnections. The copper contacts may corrode together, causing shorts |
| **Other FMs** | Various FMs gathered under this heading: improper thickness, non-ohmic contact, scratches on the metallisation layer produced by manipulation faults, etc. | Open circuit (increased resistance as incipient form) or short circuit |

### Table 5.8 — Methods for Studying EM

| Subject of Measurement/Analysis | Methods and Results | Reference |
|----------------------------------|---------------------|-----------|
| Progress of EM damage in fully-embedded Cu interconnect structures | In situ analysis with SEM equipped with a heating stage and electrical connections. FIB used to prepare cross-sections maintaining electrical functionality | Meyer [54] |
| Degradation studies to understand EM-induced transport processes in on-chip Cu interconnects | Correlation of real-time X-ray images with post-mortem SEM micrographs to discuss degradation mechanisms | Schneider [55] |
| Cause of early EM failure in Cu vias | An IR microscope technique has been developed to detect weak via before catastrophic failure. Pre-existing defects are essential to formation of EM-induced void | Kim [56] |
| EM FMs for SnAg Pb-free solder bumps with two types of under-bump metallurgy (UBM) | SEM and EDX analysis reveal a failure mechanism for solder bumps with Ni UBM caused by dissolution of UBM as a result of Ni migration and subsequent solder-cracking or de-wetting | Ding [57] |
| First direct measurement of EM-induced stress in Al interconnects using micro-rotating stress sensors | Experimental verification using optical or X-ray techniques has proven difficult; limited resolution restricts ability to obtain detailed characterisation | Wilson [58] |
| Role of sidewall barrier in nucleation/growth of EM-induced voids in Cu interconnects | SEM shows steps of void growth in 120 nm line width; EBSD shows voids are nucleated at the grain boundary | Arnaud [59] |
| EM-induced degradation processes and failure in on-chip interconnects in microprocessors | In situ microscopy (side-view) studies at embedded via/line dual inlaid Cu interconnect test structures show that void formation and evolution depend on both interface bonding and microstructure | Zschech [60] |
| EM testing of passivated Cu damascene interconnects for void formation | In situ microscopy (top-down-view) studies | Thompson [61] |
| EM-induced stress evolution in dual-inlaid Cu interconnects | EBSD used to study stress evolution | Sukharev [62] |
| Statistical analysis of EM lifetimes of inlaid copper interconnects | In situ SEM and transmission X-ray microscopy studies of EM degradation processes | Zschech [63] |
| Fabrication of reliable diffusion barriers from films of refractory metals: Ta or TaOx as diffusion barriers in Si/Ta/Cu, Si/TaOx/Cu and Si/Ta-TaOx/Cu systems | TEM, X-ray diffraction, X-ray photoelectron spectroscopy and secondary neutral mass spectrometry | Lakatos [64] |
| Fabricating nano-bridges of gold using E-beam lithography and shadow evaporation through a stencil mask, thinned by cyclic EM process in ultrahigh vacuum (UHV) | STM and SEM have discovered the phenomenon of tunnelling voltage-dependent deposition of additional material (possibly carbon) of up to 10 nm thickness | Stoffler [65] |

### Cu vs Al — EM Improvement

- **[Ch.5]** Cu resistivity is nearly 50% less than Al. Additional benefit: higher melting point (1085°C vs 660°C for Al) gives improved EM resistance. Integration challenge: corrosion. *(2026-06-25)*
- **[Ch.5]** Introduction of low-k dielectrics reduces parasitic capacitance. Dielectric constant reduction achieved by: (i) reducing polarisability; (ii) reducing density; (iii) introducing porosity — porous low-k materials available with constants ~50% lower than SiO₂. Candidates categorised by type: silicates, fluorosilicates, organo-silicates, organic polymeric, etc. *(2026-06-25)*
- **[Ch.5]** Various EM damage formation pathways: (i) interface mechanism; (ii) Blech effect; (iii) low integration; (iv) Joule heating. *(2026-06-25)*
- **[Ch.5]** The **Blech effect** (stress-induced backflow): first reported for Al lines. As metal ions move towards the anode end of the line, stress builds up opposing the electron wind, constraining void growth. *(2026-06-25)*
- **[Ch.5]** EM studies in single-level damascene Cu interconnects: (i) Early EM fails are by voiding into the via (via depletion) or voiding underneath the via (line depletion); (ii) Apparent negative activation energy behaviour explained by thermo-mechanical damage at low temperatures (~250°C) — mechanical strengthening of the via by thickening the sidewall barrier and surrounding it with strong ILD successfully suppresses thermo-mechanical failures; (iii) In submicron Cu damascene, EM is mainly due to diffusion at the interfaces of Cu with liner or dielectric capping layer — enlarging the via size and enhancing Cu/capping process improve EM distribution. *(2026-06-25)*
- **[Ch.5]** Practical methods to diminish EM in Al interconnections: add Cu or Ti (higher current densities before EM arises); encapsulate conductors with dielectrics; cover Al conductor with CVD SiO₂ or grow an anodic layer; use surface treatments (e.g. oxygen plasma in barrel reactor, annealing at 450°C for 30 min in forming gas — significant MTTF improvement); restrict Al particle diameters; use barrier metal under Al layer; reduce passivation film stress. *(2026-06-25)*
- **[Ch.5]** Complex Ti/TiN/Al(Si-Cu)/TiN global interconnect structure: Cu suppresses EM and hillock formation; Ti improves Al grain texture for EM protection and adhesion; TiN acts as barrier between Al and Ti to limit TiAl₃ formation; Ti/TiN and TiN layers provide electrical shunt in case of void formation; TiN on top also acts as anti-reflective layer for lithography. *(2026-06-25)*

### Table 5.9 — Methods for Avoiding or Eliminating Failures Produced by EM in Al and Cu Lines

| Proposed Method | Demonstrated Result | Reference |
|-----------------|---------------------|-----------|
| Doping with Al impurity to diminish EM effect on damascene Cu interconnects | EM lifetime improved by suppression of Cu diffusion due to piled-up Al at top surface of the Cu interconnects | Yokogawa [90] |
| Electrolessly deposited cobalt tungsten phosphide (CoWP) film as self-aligned barrier (SAB) to prevent EM along the top surface of the Cu line | Although SAB effective at preventing EM, exposure of both Cu and CoWP to dilute HF permits a galvanic corrosion mechanism that ultimately consumes the CoWP layer | Lauerhaas [91] |
| Diffusion-barrier metal deposited after conventional argon bombardment to determine effects of surface-clean process on stress voiding and EM of Cu metallisation | Higher pre-clean bias power and shorter pre-clean time demonstrate remarkable low via resistance and excellent Cu-reliability performance. Pre-clean bias power of argon plasma should be kept high (but not too high to avoid damaging underlying metal), while re-sputtering clean time should be kept short but still long enough to clean via bottoms | Wang [92] |
| Modification of pre-clean before cap-layer deposition and Cu cap/dielectric materials to improve EM lifetime | EM lifetime enhanced. Cu-silicide formation before cap-layer deposition and adhesion of the Cu/cap interface have been found to be critical factors in controlling Cu EM reliability | Lin [93] |
| Failed via can be healed and provides an electrical path even after EM failure ('recovery') classified into two groups: short-term recovery and long-term recovery | FA strongly implies that short-term recovery occurs due to an accidental local melting and the long-term recovery obtains its driving force from compressive stress at the anode side. However, this is simply an electrical recovery, not a complete structural healing | Kim [56] |
| Preventing Al-Si interdiffusion and resultant junction spiking in Al lines | Introduction of 1–2 atomic-percent silicon into Al. Copper is introduced in similar quantities to improve electromigration resistance of Al wiring. BPSG used as pre-metal dielectric and CVD SiO₂ as the inter-metal dielectric (IMD) | Kim [56] |
| New via technology for improving EM reliability of Cu dual-damascene (DD) interconnection: direct-contact via (DCV) | Early FMo of a conventional Cu DD structure found as void formation at the via-bottom interface, where flux divergence of Cu ions is large due to diffusion barrier layer. The early failure mode is eliminated by DCV technology and lower via resistance is obtained | Kazuyoski [94] |

---

### Hillocks and Voids

- **[Ch.5]** Metal layers in electronic components are analogous to a highway for electron transport — the surface must be smooth. Protuberances (hillocks) and holes (voids) are detrimental. Hillocks arise when a soft metal (e.g. Al, high CTE) is sputtered onto a low-CTE substrate (Si or SiO₂); voids form in the same soft metals when stressed in tension beyond the yield point. *(2026-06-25)*
- **[Ch.5]** Second source: post-deposition heating treatments producing 'annealing hillocks/voids' from (i) high-temperature exposure during manufacturing, or (ii) extended temperature cycling during operation. *(2026-06-25)*
- **[Ch.5]** Hillocks and voids can cause shorts between conductive layers, especially in elements with two layers of conductors such as integrated capacitors. If an insulating layer is formed on an Al layer thinner than 1 µm, metal hillocks greater than 1 µm will protrude through the insulating layer and contact subsequent deposited metal layers causing a short circuit. *(2026-06-25)*
- **[Ch.5]** Hillocks often occur in the electron flow upstream from voiding areas but grow faster at the downstream edge closest to the migrating metallisation source. Voiding and hillock formation can occur simultaneously at 140–200°C. Hillock growth is more extensive in films deposited on room-temperature substrates than heated substrates — varies with grain size. Hillocks form at random in Al films heated to ~400°C and can cause shorts between adjacent lines and fracture overlying metal layers. *(2026-06-25)*
- **[Ch.5]** One mechanism for hillock formation is stress relief: highly compressive stress is induced during thermal cycling due to CTE mismatch between Al and substrates. Low yield strength of Al causes the film to yield. Study of Al films (0.25–2.2 µm, deposited by e-beam evaporation) provides strong support for the idea that hillocks are formed by migration of material along grain boundaries to the surface — initially separated from the original film by a grain-boundary-like interface, but prolonged annealing causes underlying grains to grow into the hillocks. *(2026-06-25)*
- **[Ch.5]** Voids have been observed to form within several microns of growing hillocks by a river-like mechanism emptying Al into the hillock structure, not constrained by grain boundaries. Changes in growth patterns were noticed when circuits were exposed to ambient air for short periods — surface oxide on void walls greatly retarded void growth, indicating that primary Al transport occurs along oxide-free wall structures. *(2026-06-25)*
- **[Ch.5]** **Stress migration (SIV — Stress Induced Voiding):** vacancy migration driven by hydrostatic stress gradient. Large voids may lead to open circuit or unacceptable resistance increase. Example: high-temperature processing of Cu dual-damascene structures leaves Cu with large tensile stress due to CTE mismatch; stress relaxes over time through vacancy diffusion, leading to voids and ultimately open circuit failures. *(2026-06-25)*
- **[Ch.5]** AlCuSi metallisation: inter-level metal short circuiting caused by theta-phase (Al₂Cu) hillocks nucleating and growing during high-temperature vacuum heat treatment. Growth occurs at high-energy sites (Si precipitates, grain boundary nodal points) — dominant mass transport mechanism is grain boundary diffusion. A layer of pure Al beneath the Al-Cu layer acts as a sink for Cu and delays hillock formation. Increasing film Cu content reduces hillock formation (theta-phase hillocks up to 1.3 µm at 1 wt% Cu; negligible <0.2 µm at 11 wt% Cu). *(2026-06-25)*
- **[Ch.5]** **Creep:** tendency of a solid material to slowly deform permanently under stress below the yield strength; increases with temperature. Rule of thumb: noticeable at ~30% of melting point for metals, 40–50% for ceramics. Hillock growth occurs when stress relaxes by transporting film material along grain boundaries to the surface. During creep, internal voids appear at grain boundaries normal to tensile stress; atoms diffuse from void surface into grain boundaries causing voids to grow until they link (creep fracture). *(2026-06-25)*
- **[Ch.5]** Note: hillocks and voids can also arise in non-metal layers. Example: a GaN film (250 µm) grown on GaN/sapphire template in vertical HVPE reactor showed nearly circular-shaped hillocks (~100 µm) on the film surface — origin related to screw dislocations and micro-pipes. Large hexagonal pits with 6 triangular facets also appeared, with strong emission dominated by impurity-related emission at 377 nm (possibly high concentration oxygen impurity). *(2026-06-25)*
- **[Ch.5]** Methods for avoiding hillock/void failures: use alloyed metal (Al-Cu); improve passivation and packaging technologies; increase dielectric overcoat thickness. Hillock formation during deposition depends on deposition rate and substrate temperature: as temperature increases (constant deposition rate), hillock density decreases but average size increases; as deposition rate increases, hillock density and average size both decrease. Hillocks form when films are deposited at low temperatures and low rates. *(2026-06-25)*

### Table 5.10 — Methods for Avoiding or Eliminating Failures Produced by Hillocks and Voids

| Proposed Method | Demonstrated Result | Reference |
|-----------------|---------------------|-----------|
| Adding impurities (Si, Cu, Ag, Au) to Al to immobilise grain boundaries in the metal layer | Avoids hillock formation in thin Al layers | Chaudhari [106] |
| Treating the layer to form a boehmite (AlO-OH) layer on its surface | Reduces hillocks, specifically in Al layers | McMillan [107] |
| Adding an alloying element — tin (small diffusion coefficient, large binding energy with a lattice vacancy, large atomic diameter) and manganese (relatively small solid solubility) to Al. Al-0.06 wt% Sn and Al-0.1 wt% Mn alloys selected | Suppresses hillocks on the surface of deposited Al conductors after thermal cycling (200°C to room temperature) or high-temperature heat treatment (400°C) | Sato [108] |
| Al film deposited on oxidised silicon wafer and sintered, stripped off in orthophosphoric acid, wafer thoroughly cleaned in DI water with no HF. Forms an Al₂O₃ + Si dipole layer on the oxide surface and makes it aluminumphilic | Eliminates hillocks in IC metallisation | Singh [109] |
| Sandwich layer grown between Al film and underlying SiO₂ with CTE between those of SiO₂ and Al. Demonstrated with WSi₂ as the sandwich layer | Eliminates hillocks in IC metallisations | Cadien [110] |
| Pretreatment and deposition by high-power ASTeX microwave plasma CVD (MWP-CVD) apparatus — growth of homoepitaxial diamond films with high crystalline quality, yielding only band-edge emissions as main peak in CL spectra at low temperatures (80 K) | Suppresses hillock growth on homoepitaxial diamond surfaces | Wang [111] |
| Addition of Ta to create fine-grained film structure | Suppresses hillocks in Al-Ta alloy films for interconnections of thin-film transistor-LCDs | Iwamura [112] |
| Use of PECVD-PSG film on the metal line before heat treatment at 400°C or of any type of PSG film before 350°C | Suppresses hillocks in metal lines | Eungsoo [113] |
| Al wiring formed into multi-layer structure with each layer containing an element not solidly solubilised with Al (rare earth metals e.g. Nd, high-melting-point transition metals e.g. Ta, noble metals e.g. Pd). Intermetallic compounds of Al and the element are reduced at interfaces of the multi-layer wiring and grains of Al are prevented from enlarging to form hillocks | Prevents hillock formation | Ueno [114] |
| Al-Y alloys proposed as interconnection materials in ICs; in Al-Y alloy films, solid solubility of Y in Al is very small, almost all Y precipitates at grain boundaries and suppresses grain growth on the film | Hillock formation significantly suppressed in small-dimension interconnections | Lee [115] |
| Suppression of hillocks in diamond (001) substrates with misorientation angles of around 2° achieved by enhanced lateral growth on high-θ substrates | A hillock-free heavily boron-doped diamond (001) film grown with a concentration of 6×10²⁰ atoms/cm³, making an ideal bottom layer for diamond electronic devices | Tokuda [116] |

---

### Delamination

- **[Ch.5]** Reliability of metallisation is linked to the ability of thin metal films to remain adhered to substrates during the component lifetime. Mechanical integrity of these films, controlled by the adhesion energy of the interface, is influenced by strain relaxation and diffusion. Failures associated with delamination: open circuit, high resistance, and intermittent contacts. Tool used to verify delamination: optical microscopy. *(2026-06-25)*
- **[Ch.5]** Under tension, an elastic film may fracture by growing channel cracks, possibly accompanied by interfacial delamination. If the substrate is relatively compliant, a critical interface toughness is predicted separating stable and unstable delamination. If the substrate is relatively stiff, a channel crack grows with no delamination when interface toughness exceeds a critical value. *(2026-06-25)*
- **[Ch.5]** Procedure to avoid delamination in thin film transistors (TFTs) at non-adhesive interfaces between metal patterns and organic layers: make apertures in the metal pattern, through which adhesion between the organic layer and organic material at the substrate surface can be achieved. *(2026-06-25)*

---

### Other Wafer-Level Processes

#### Contamination
- **[Ch.5]** Each manufacturing step induces a failure risk, increased by synergy with subsequent steps. Depends on: quality of materials, contamination, quality of chemicals, and packaging elements. *(2026-06-25)*
- **[Ch.5]** Particle contamination — two effects: (i) **Physical effect:** particles mask areas of the chip, hindering deliberate doping or causing breakdown of the processed layer. Failure risk at photolithography (dust on mask transparent areas), etching, metallisation, and ion implantation. (ii) **Chemical effect:** particle contaminants diffuse into the crystal, degrading junction characteristics (soft I-U characteristics or premature breakdown). Risk emerges at thermal processes (oxidation, diffusion) where alkali ion contamination produces leakage current increase or threshold voltage drift in MOS devices. *(2026-06-25)*
- **[Ch.5]** Remedies: contamination prevention (identifying and avoiding sources) and wafer cleaning (sophisticated methods for particle removal). *(2026-06-25)*

#### Diffusion-Induced Defects
- **[Ch.5]** Intentional diffusion (solid-state) creates n and p areas in semiconductor but may perturb equilibrium point defect concentration and create localised stress and precipitates. Most used Si dopants: P, B, As, Sb. Dislocations may be induced by: (i) thermo-mechanical stress during diffusion; (ii) stacking faults from previous oxidation; (iii) prismatic punching of dislocations by SiO₂ precipitates. Precipitation can occur when solid solubility limit at diffusion temperature is exceeded, typically near the surface where dopant concentration is highest. *(2026-06-25)*
- **[Ch.5]** Methods for controlling diffusion-induced defects: (i) control quality of wafer surface — highly defect-free surface suppresses heterogeneous nucleation of dislocations; (ii) minimise precipitation effects — grow a thin barrier oxide layer on Si prior to diffusion; (iii) reduce diffusion-induced stress by stress compensation — sequential or simultaneous diffusion of more than one dopant (e.g. simultaneous diffusion of P and As has proven effective in reducing misfit dislocation density). *(2026-06-25)*

#### Implantation-Induced Defects
- **[Ch.5]** Ion implantation is an alternative to diffusion for doping. Ionised dopant atoms are accelerated to the desired energy and impinge upon the wafer, stopping at a certain depth. Defects are generated by primary and secondary collisions of ions with host crystal atoms; an annealing treatment follows to electrically activate dopant atoms and reduce radiation damage. *(2026-06-25)*
- **[Ch.5]** Example in MEMS: single-crystal and polycrystalline silicon wafers implanted with boron ions to improve mechanical and tribological properties. Silicon remained crystalline after bombardment up to 2×10⁷ ions/cm². Key findings: small increase in nano-hardness; low friction and wear factor in dry air/nitrogen; coefficient of friction and wear factor were lower at low humidity and dry nitrogen than at high humidity; fracture and oxidation of silicon surface during sliding plays a significant role in friction and wear. *(2026-06-25)*

---

### Packaging — Functions

- **[Ch.5]** Three main functions of packaging: *(2026-06-25)*
  1. Interface the die with the external circuit
  2. Remove the heat generated by device operation
  3. Protect the die from the external environment (mechanical integrity, protection from temperature, radiation, moisture, ions, chemical isolation from harsh environments)

- **[Ch.5]** **Chip Scale Package (CSP):** defined as a package with a perimeter no more than 1.2 times the perimeter of the die it contains. Combines the best features of bare die assembly and traditional semiconductor packaging, reducing overall system size. *(2026-06-25)*

- **[Ch.5]** Almost all packaging technologies comprise the same core processes: *(2026-06-25)*
  - **Dicing:** wafer is cut into rectangular blocks called dies, each containing one device.
  - **Die attach:** die is firmly attached to a substrate or lead frame. Critical functions: (i) creates a good thermal path between die and package base (itself usually attached to a heat sink); (ii) creates a good electrical contact between the backside of the die and the package; (iii) maintains both roles over the device lifetime and through required environmental conditions.
  - **Wire connection:** three possible variants: (i) wire bonding (metallic wires from pads around die edge to package leads); (ii) tape-automated bonding (TAB); (iii) flip chip (FC) / controlled collapse chip connection.
  - **Sealing:** the whole ensemble is sealed hermetically (metal or ceramic) or non-hermetically (plastic material).

---

#### Dicing
- **[Ch.5]** Improper dicing may produce cracked or chipped dies, leading to open circuits. Avoided by visual inspection (optical microscope) before sealing, which may be preceded by temperature cycling, vibration, mechanical shock, and thermal shock tests to eliminate weak items before assembly. *(2026-06-25)*

#### Die Attach
- **[Ch.5]** Die attach methods: (i) **Epoxy attach** — bonds chip to lead frame using epoxy; (ii) **Eutectic attach** — uses a thin gold film on the backside of the wafer alloyed with the metallised surface of the lead frame; (iii) **Glass frit attach** — uses a mixture of silver and glass in an organic medium to attach chips in ceramic packages. *(2026-06-25)*

- **[Ch.5]** Notable FM induced by die attach is **die lifting** — the lifting of the die from its pad or cavity. Two possible causes: *(2026-06-25)*

---

### Die Attach — Failure Mechanisms (continued)

- **[Ch.5]** Two possible causes for lifted die: *(2026-06-25)*
  - **Cohesion failure:** fracture within the die attach material itself. Produced by material mismatch, excessive voids, insufficient fillet formation, or inadequate bond line thickness (BLT). Fracture strength is diminished, leading to failure under thermo-mechanical stresses (temp cycling, high-temp storage, constant acceleration). Cracks or peeling appear, material fractures in the middle leaving die attach still adhered to both surfaces. Voids can lead to degradation by overheating.
  - **Adhesion failure:** delamination between die backside and die attach material, or between die attach material and die pad/cavity. Caused by contaminants on the die backside or die pad. Eutectic delaminations may also be due to inadequate scrubbing, incorrect preform size, or improper equipment settings. Identified by SHRT, temp cycling, thermal shock, and visual inspection.

- **[Ch.5]** **Die cracking:** caused by poor bonding of the die to the header. Inadequate die attach fillet formation and excessive voids act as stress concentrators, resulting in contiguous cracks at the backside of the die that can propagate until the upper and lower parts of the die separate. Identified by shock and vibration tests before sealing, followed by visual inspection. *(2026-06-25)*

- **[Ch.5]** Other die attach FMs: deficiencies in silver-filled epoxies, gold-silicon eutectics, and solder types result in FMos of short circuit, loose die, and loose conductive particles. Excess die attach material causes shorts at bond pads/wires; insufficient material weakens the die mount. For epoxies, insufficient curing leads to moisture release in sealed packages, causing corrosive byproducts affecting Al wires and thermal resistance changes. If overheated (>~150°C), epoxy decomposes producing H₂O, CO₂, and hydrocarbons (methane, methanol). *(2026-06-25)*

- **[Ch.5]** Methods for avoiding die attach FMs: *(2026-06-25)*
  1. **WBC (Wafer Backside Coating):** adhesive paste applied to back of wafer and dried. Advantages: 20–30% cheaper than film; BLT controllable to customer specs; fillet control similar to film; dispense operation eliminated (higher UPH); coated wafer can be stored until required.
  2. **Gold-based alloys (eutectics):** superior thermal performance. Die attach temperatures: ~320°C (AuSn), ~420°C (AuSi). Thermal conductivity: AuSn 70 W/m·K, AuSi >150 W/m·K. Drawback: narrow processing window, sensitive process.
  3. **Die attach films (DAFs):** for wafer thickness of 50 and 25 µm where a more robust process is needed.
  4. **DDAF (Dicing Die Attach Film):** incorporates wafer dicing tape and adhesive in one. Lower reaction rate and lower dynamic modulus; better fluidity and gap filling for better adhesion and reliability; eliminates delamination during die attach.

---

### Wire Connection

- **[Ch.5]** Three main technologies: wire bonding, TAB, and flip chip. *(2026-06-25)*

#### Wire Bonding
- **[Ch.5]** Interconnects die pads to package leads using Al, Cu, or Au wires (diameters 15 µm to hundreds of µm). Three main FMs: *(2026-06-25)*
  1. **Wrong bonding process:** excessive/poor bonding strength, improper method/control, insufficient bonding area, unremoved tail wire, cracked or nicked die, cuts/notches in lead, material mismatch, contaminated bonding pad. Results in broken/disconnected wires, open or short circuits. Identified by mechanical stresses (constant acceleration, shock, vibration) and thermal stresses (high-temp storage, temp cycling) followed by electrical tests and visual inspection or radiography.
  2. **Au-Al intermetallic growth:** two compounds — Au₅Al₂ 'white plague' (white, low conductivity, increasing resistance to total failure) and AuAl₂ 'purple plague' (brittle bright-purple compound causing voids in metal lattice).
  3. **Kirkendall voiding:** interdiffusion at 400–450°C forms compounds from Au-rich to Al-rich with different growth rates. Denser, faster-growing layers consume slower-growing ones, forming cavities — increasing resistance and mechanically weakening the wire bond.

### Table 5.11 — Comparison of Metals Used for Wire Connections: Al, Cu and Au

| Metal | Wire Characteristics | Typical Use | Reliability Issues |
|-------|---------------------|-------------|-------------------|
| **Gold (Au)** | Diameter larger than 12.5 µm | Ball-bond to the chip, then stitch-bond to the substrate; wedge bonding | Main failure risk is 'purple plague' (brittle gold-aluminium intermetallic compound). Mechanical properties and thermal stability improved by doping Au with controlled amounts of beryllium or copper |
| **Aluminium (Al)** | Diameter larger than 100 µm | Ultrasonic bonding | Al must be doped with controlled amounts of magnesium to provide greater drawing ease to fine sizes and higher pull-test strength. By using Al instead of Au, 'purple plague' is eliminated |
| **Copper (Cu)** | Large diameter (up to 250 µm) | Ball bonding; replacing Al wire with high current-carrying capacity | Cu is harder than Al and Au, so bonding parameters must be optimised carefully. Oxide formation may lead to reliability risks (special wire protection is needed) |
| **Copper (Cu)** | Small diameter (up to 75 µm) | Ball bonding; replacing Au wire, giving comparable performance and lower material cost | Same as above |

#### TAB
- **[Ch.5]** Die attached directly to PCB by polyimide tape; bonding sites connected to fine conductors on the tape containing the application circuit. Bare chip encapsulated in epoxy or plastic. Mainly used for LCD driver circuits. Tape: widths 35–70 mm, thickness 50–100 µm. Main failure risks: irregular bond height/shape, insufficient bonding pressure/energy, or tape contact contamination resulting in weak bonds. *(2026-06-25)*

#### Flip Chip (FC / C4)
- **[Ch.5]** Die is flipped so its top side faces down; solder bumps deposited on chip pad top side align with matching pads of the external circuit. Solder bumps are re-melted by ultrasonic or reflow solder process to achieve electrical connection. Advantages: much more compact, allows higher speed signals, efficient heat removal (external heat sink can be added directly above chip). *(2026-06-25)*

---

### Wafer Level Packaging (WLP)

- **[Ch.5]** Two major factors limiting WLP reliability for die sizes >5×5 mm: (i) interconnect fatigue due to CTE mismatch between die and PCB; (ii) packaging cost. For WLPs requiring RDL for I/O redistribution and a compliant layer, electroplating and dielectric layer constitute a large portion of the cost. *(2026-06-25)*
- **[Ch.5]** Cost-effective WLP alternative: copper conductor is etched (cheaper than electroplating) to form traces, protected with solder mask; wirebonds connect die pads to copper traces; encapsulation and solder ball attach complete the process. *(2026-06-25)*
- **[Ch.5]** Underfilling (UF): reduces CTE mismatch between silicon chip and substrate, protects chip against impurities, and strengthens the structure by minimising stress/fatigue in solder joints. Adhesion of die-side passivation (polyimide) to UF is critical. Weak interfaces result in yield loss during thermal cycling or under HAST conditions. *(2026-06-25)*
- **[Ch.5]** UF moisture accumulation leads to: crack propagation (swelling stress), weakening mechanical support, die-level interconnect failures, and corrosion from ionic contaminants resulting in metal migration failures. *(2026-06-25)*
- **[Ch.5]** Two WLP trends: (i) **3D packages** — 2 or more chips stacked vertically; wiring along edges increases package length and width. TSVs (through-silicon vias) avoid this by providing vertical connections through the chip body (TSS — through-silicon stacking), allowing flatter, smaller packages. 3D interconnects offer 51–54% reduction in latency and energy dissipation at the 45 nm node. (ii) **Nano-WLP** — incorporates convergent technologies at IC and system level for much smaller, more affordable packaging. *(2026-06-25)*
- **[Ch.5]** CNT interconnects compare favourably with scaled Cu/low-k in latency — 42% reduction in delay. Optical interconnects offer reduced latency vs scaled Cu/low-k but no significant improvement vs WLP interconnects. *(2026-06-25)*

---

### Encapsulation

- **[Ch.5]** FMs related to encapsulation: *(2026-06-25)*
  - **Contamination:** improper atmosphere may lead to degradation of characteristics attributed to inversion layer or channelling.
  - **Faults in seal glass** (cracks, voids, migration): leakage — intermittent or open circuit. Identified by seal, electrical, high-temp storage, temp cycling, and high-voltage tests.
  - **Incomplete hermetic seal** (metal/ceramic packages): characteristics degradation or short circuit from chemical corrosion or humidity.
  - **Dielectric particles floating in package:** intermittent or short circuit. Recommended stress sequence: constant acceleration → vibration (monitored) → radiography → shock (monitored).
  - **Broken or bent external lead:** open circuit. Identified by visual inspection followed by lead-fatigue test.

---

### Tin Whiskers

- **[Ch.5]** Tin whiskers: very thin single-crystal fibres with large length-to-diameter ratios and constant cross-sectional area, growing only from the surface of pure tin. Cause system failures in earth, space, and missile systems. Main FM: short circuit. Annealing alone may not relieve internal stress. *(2026-06-25)*
- **[Ch.5]** Growth rates increase at 50°C. Whiskers are electron-transparent; found to be monocrystalline, single phase, with no extended defects. Absence of dislocations means dislocation-mediated growth models are not applicable. Intermetallic formation at the whisker base causes biaxial stress in the tin film — compressive micro stresses coupled with diffusion lead to whisker formation. *(2026-06-25)*
- **[Ch.5]** Tin whisker study is difficult due to intermittent field failures: at high enough electrical potentials, conductive particles can vaporise, removing the failure condition; disassembly may dislodge the whisker; large unpredictable variation in the incubation/dormancy period. *(2026-06-25)*
- **[Ch.5]** Factors influencing whisker growth: plating chemistry, plating process, deposit characteristics, substrate, and environmental parameters. Best method: use tin-alloying instead of pure-tin plating. Other approaches: solder-tip the plated surface; replate the whisker-prone area; apply conformal coat or foam encapsulation; evaluate application-specific risks. Contradictory observation: tin whiskers increase in the absence of lead in solder. *(2026-06-25)*

---

### Plastic Package

- **[Ch.5]** Main advantages: high resistance to mechanical stress, aggressive liquids and gases; good surface isolation of die; good dimensional precision; low cost. Materials: thermo-reactive resins (phenol/epoxy/silicone) plus moulding compound (base resin, drying agent, catalyst, inert material, firing delay agent, mould release agent). *(2026-06-25)*
- **[Ch.5]** Ideal moulding compound: low moisture permeability, high strength at elevated temperatures, high glass transition temperature (Tg), excellent adhesion. Biphenyl resins with ~90% filler content considerably reduce moisture permeability. *(2026-06-25)*
- **[Ch.5]** Spherical silica filler particle size in the package body must be optimised for thermal cycling reliability. Thermal shrinkage of the plastic package body can cause compressive stress from fillers pinned by the lead frame, damaging the active pattern. *(2026-06-25)*
- **[Ch.5]** Ionic impurities (especially Cl⁻) in the resin affect moisture resistance. Formation of parasitic MOS due to ion accumulation is a typical device degradation mechanism. Ion contamination can diminish transistor current gain, increase leakage current, and cause corrosion of Al metallisation. Two sources: (i) encapsulant (typical ionic residue <10 ppm); (ii) external sources (salt mist, industrial atmosphere, corrosive solder flux). *(2026-06-25)*
- **[Ch.5]** Methods to diminish ionic contamination effects: recovery of wires with high-purity protective resin; die passivation with silica glass (P concentration <2 wt% to avoid Al corrosion); package impregnation after moulding; replacement of Al with multilayer Ti/Pt/Au passivated with Si₃N₄; use of silicone gels as plastic encapsulants. *(2026-06-25)*
- **[Ch.5]** **Corrosion** (galvanic or electrolytic): time to short circuit depends on temperature, RH, ionic contaminants, geometry of Al interconnections, and package type, purity, and mechanical design. Galvanic corrosion requires: a bimetallic couple (often Au-Al), free ionic contamination (Cl, K, Br, Na), and moisture to form an electrolyte. *(2026-06-25)*
- **[Ch.5]** PEM experiment: Al triple-track structures exposed to mixed flowing gas — no resistance increase or corrosion products after 800 hours. Chloride gas reacts with surface moisture in voids within EMC to form chloride ions, which become strongly bound to ion-getters in the EMC, retarding diffusion and corrosion at the die surface. *(2026-06-25)*
- **[Ch.5]** Creep corrosion in plastic-encapsulated leaded SMT packages is a reliability concern only if the corrosion product is electrically conductive and bridges two electrical paths (observed as leakage FMo). Resistance to humidity characterised by: relative hermeticity, dilation coefficient, hydrolysable contaminants, and die corrosion resistance. Main accelerated test: +85°C, 85% RH with deionised water. *(2026-06-25)*
- **[Ch.5]** High leakage currents in SPP (steam pressure pot) tests attributed to ionic content and acrylic-based adhesive of polyimide tape — not the mould compound or frame. Moisture reaches chip via penetration along plastic-lead frame interface, through pores/cracks, or via vapour diffusion through EMC. Solution: polyimide tape with low ionic content and non-acrylic-based adhesive. *(2026-06-25)*
- **[Ch.5]** Thermo-mechanical stress failures: die-related (metal shift, die cracking, electrical failure, filler particle failure, passivation damage); plastic-related (delamination at plastic-silicon or plastic-die paddle interface → popcorn cracking). Delamination causes: (i) surface contamination; (ii) excessive shear stresses during post-assembly thermal processing; (iii) partial degradation of interface due to moisture absorption. *(2026-06-25)*
- **[Ch.5]** Minimising delamination: optimal coupling agent concentration (enhance adhesion of matrix to fillers); adhesion promoter (enhance adhesion to die and lead frame); release agent (facilitate removal from mould cavities). Improve resin wettability with lower viscosities; reduce moisture uptake with higher-functionality hardeners or less hygroscopic polymer chains. The interface with the largest CTE mismatch delaminates first; risk lowest when CTE of moulding compound is between those of the die and lead frame. *(2026-06-25)*
- **[Ch.5]** **Popcorning:** moisture-related FM arising during reflow; small moisture amount turns to steam causing internal cracking from CTE mismatch and vapour pressure acting on crack surfaces. Damages originate in die attach and propagate along weakest interfaces. Lower ramp rates result in less delamination — a critical ramp rate exists for reliability. Failures may occur at power-up, making them intermittent and difficult to trace; only X-ray allows non-destructive inspection (silicon is transparent to X-rays). Prevention: dry nitrogen storage, increased moulding compound popcorn resistance, modified manufacturing process, or optimal reflow temperature ramp rate. *(2026-06-25)*

---

### Operation — Component Mounting

- **[Ch.5]** Lead-free SnAgCu BGA components assembled on PCBs with SnAgCu solder paste and subjected to thermal cycling: failures not found before 5700 cycles; characteristic lives >7200 cycles. Intermetallic interfaces: Sn-Ni-Cu; solder joints consisted of 2 Ag-Sn compounds (Sn-rich and Ag-rich). Crystalline star-shaped Sn-Ni-Cu-P structure observed; intermetallic thickness <3 µm; ~10% growth after 3000 cycles did not affect reliability. *(2026-06-25)*

---

### Radiation Field

- **[Ch.5]** Bipolar devices affected by radiation: rapid neutrons produce current gain degradation and increased saturation voltage by creating crystalline defects; ionising radiation generates photocurrents in all reverse-biased pn junctions and modifies logic states. *(2026-06-25)*
- **[Ch.5]** MOS tech is more robust to radiation. 0.12 µm CMOS under 63 MeV proton irradiation (1 Mrad Si equivalent) showed only slight degradations in DC and RF parameters (DC I-V, low frequency noise, S-parameters, broadband noise). *(2026-06-25)*
- **[Ch.5]** For diodes: parameters measured include forward voltage drop (most sensitive), reverse current, and breakdown voltage. Combined effects of temperature and radiation are more significant than the sum of individual effects. Min fluence for 10× increase in reverse current: ~2×10¹⁴ n/cm². Gamma irradiation (Co-60) caused no change in reference voltage up to 8.8×10⁵ rad(C). *(2026-06-25)*

---

### Passive Components — Resistors

- **[Ch.5]** General resistor FMo: open circuit (most types); for power wirewound resistors, overheating can cause fusing across adjacent turns. Failure causes: material degradation, design errors, manufacturing errors, and inadequate utilisation (derating is the best method to enhance reliability). *(2026-06-25)*
- **[Ch.5]** Various in-use failure causes: non-homogeneities of film composition; excessive current flow (catastrophic failure by melting/fusing); parasitic inductance/capacitance at high frequencies; excess heat (accelerates drift); humidity (resistor value changes); packaging paint; noise (thermal noise and current noise). *(2026-06-25)*
- **[Ch.5]** **Carbon-composition resistors:** originally solid carbon, later replaced by composite materials. Low parasitic inductance, but high TC resistance and poor stability (resistance increases with age). FMos: open circuit or value change. *(2026-06-25)*
- **[Ch.5]** **Carbon film resistors:** improved TCR vs carbon-composition. TCR of 500 ppm or more typical; power ratings 1/8–2 W. Main failure causes: ionic impurities in the ceramic support, carbon film, or encapsulation → ion migration and electrolytic destruction; irregular feldspat concentration on porcelain surface → strong local heating and film destruction. Prevention: underheat the resistor. *(2026-06-25)*
- **[Ch.5]** **Metal film resistors:** resistive NiCr or cermet film on ceramic core; value trimmed by laser. Risk factor: oxidation (follows Arrhenius law). Other stability factors: surface roughness, chemical reactions, alkaline ion proportion. Good stability; small inductive component from spiral form; TC typically 50–200 ppm/°C. *(2026-06-25)*
- **[Ch.5]** **Wirewound resistors:** metal wire wound on ceramic/plastic/fibreglass core; higher inductance (minimised by alternately reversed winding sections). Fixed types: short circuits between neighbouring helixes and bad wire-terminal contact. Variable types: contact interruptions from corrosion between cursor and resistance wire. *(2026-06-25)*

### Table 5.12 — Possible Causes of the Main FMos of Wirewound Resistors

| Failure Mode | Possible Failure Mechanisms |
|--------------|----------------------------|
| **Open circuit** | (i) Excessive wire tension; (ii) wire-end-cap separation; (iii) break in the wire; (iv) poor end-cap–wire weld; (v) ionic contamination/corrosion between cursor and resistance wire (at high temperatures the wire can be strongly oxidised); (vi) lead–end-cap separation; (vii) excessive force in lead-forming; (viii) bubbles or voids; (ix) mechanical deformation of contact wiper |
| **Short circuit** | (i) Corrosion or (ii) contamination |
| **Parametric shifts** | (i) Mechanical deformation; (ii) intermittent contact; (iii) contamination and current leakage; (iv) partial corrosion; (v) poor end-cap crimp |

- **[Ch.5]** **Thin film resistors:** extremely thin layer (hundreds of Å) of resistive material (TaN, NiCr, lead oxide, RuO₂, etc.) sputtered on Si, GaAs, or alumina substrate. Conductor layer deposited on top. Sheet resistance: 5–250 Ω/□. Two main FMos (sub-ppb failure levels): (i) open circuit — from over-current pulses or corrosion through protective coating; (ii) resistance drift — from ageing at high current or temperature. Increase radiation tolerance by limiting parasitic irradiation currents. *(2026-06-25)*
- **[Ch.5]** Thin film Ni-Cr resistor reliability findings: corrosion resistant to salt solutions and most acids (except HF); unpassivated resistors subject to anodic dissolution >2.5 V; SiO₂ passivation (10 kÅ) protects from anodic dissolution; oxidation is non-uniform (EBIC reveals 2 phases); Al diffuses into Ni-Cr at activation energy 96 kcal/mol; no resistance discontinuities up to 24 h at 500°C; good passivating glass protects film resistors. *(2026-06-25)*
- **[Ch.5]** Al₂O₃-coated thin film resistor (Ni-Cr-Cu-Al-Ge alloy, ALD-deposited alumina): drift rate reduced from 2.45×10⁻⁶/hr (uncoated) to 3×10⁻⁸/hr (alumina coated); 15 nm coating does not significantly change thermo-electrical properties. *(2026-06-25)*
- **[Ch.5]** LTCC thin film resistors tested at 85%RH/85°C: failure at 1000 hours was an increase in resistance (not open circuit). Resistance increases and decreases can be produced depending on resistor process type; activation energies ~3 eV for resistance decrease. *(2026-06-25)*
- **[Ch.5]** **Thick film resistors:** screen-printed composite of glass and conductive ceramic, fused at ~850°C; trimmed by abrasive or laser. Main FMos: open circuit (delamination, thermal cycling, micro-cracks, CTE mismatch, silver leaching, EOS, conformal coating stress); short circuit (silver migration, ionic contamination, dendrite growth); parametric shift (ESD, external contamination, thin-generated micro-cracks). *(2026-06-25)*

---

### Passive Components — Capacitors

- **[Ch.5]** Formed by two conducting surfaces separated by free space or dielectric. Dielectric materials: all-polypropylene film; electrodes: metallised film, metallised paper, or embossed foil. Fluids replaced by hydrocarbon or phthalate ester chemistries. Rule of thumb: life of capacitor decreases by factor of 2 per 10°C rise in temperature. *(2026-06-25)*
- **[Ch.5]** FM categories for capacitors: (i) material interaction-induced; (ii) stress-induced; (iii) mechanically induced; (iv) environmentally induced (humidity, hydrogen effects). *(2026-06-25)*
- **[Ch.5]** FA methods for capacitors: (i) non-destructive inspection (visual inspection, stereomicroscope 10–70× magnification, SAM); (ii) electrical characterisation (leakage current, dissipation, capacitance via curve tracer at <10 V DC; loop shape analysis; CV vs frequency, dielectric absorption, ageing); (iii) destructive analysis (cross-sectioning, leakage current monitoring during sectioning, SEM voltage contrast). *(2026-06-25)*

---

### Failure Modes and Mechanisms of Silicon Bipolar Technology

- **[Ch.5]** Two main groups: Bipolar (Bi) technologies and MOS technologies. FMs of Bi technology devices cover: Si diodes (power and small-signal), Si Bi transistors (small signal, medium power, power), Si power devices (thyristors, IGBT), and linear ICs. *(2026-06-25)*
- **[Ch.5]** FMs of semiconductor diodes: (i) **Fabrication-induced** — front-end (semiconductor material defects, processing defects such as flaws in thermally grown oxide or epitaxial layer) and back-end (dicing, die attach, wire bonding, encapsulation); (ii) **Operation-induced** — device dependent, related to poor design (EOS), careless handling (ESD), or misuse during operation. *(2026-06-25)*

### Table 5.19 — Main Types of Silicon Diode

| Diode Type | Technology and Characteristics |
|------------|-------------------------------|
| **pn-junction diodes** | Used as rectifiers. The vast majority of all diodes are pn diodes found in CMOS integrated circuits |
| **Varactor diodes** | Use characteristics of pn junctions to change their capacitance and series resistance as applied bias is varied. Employed as voltage-controlled capacitors (not rectifiers); commonly used in parametric amplifiers and oscillators, or in voltage-controlled oscillators |
| **Switching diodes** | Normal pn-junction diodes, but with gold or platinum introduced as dopants, which act as recombination centres providing fast recombination of minority carriers. Compared with Schottky diodes: slower but lower current leakage |
| **Z diodes** | Operate in the breakdown zone; conduct backwards at a precisely defined voltage — used as precision voltage references. Z diodes and switching diodes connected in series and in opposite directions balance TC to near zero. Two equivalent Z diodes in series and reverse order constitute a transient absorber (TransZorb or Transorb), fulfilling the task of a TVS diode |
| **Avalanche diodes** | Conduct in the reverse direction when reverse-bias voltage exceeds breakdown voltage. Electrically similar to Z diodes (only practical difference: temperature coefficients of opposite polarity); break down using the avalanche effect without being destroyed |
| **Transient voltage-suppression (TVS) diodes** | Avalanche diodes designed specifically to protect other semiconductor devices from high-voltage transients. pn junctions have much larger cross-sectional area than normal diodes, allowing them to conduct large currents to ground without sustaining damage |

---

### Strained MOSFET

- **[Ch.5]** Strained Si MOSFET improves transistor performance in smaller CMOS devices by enhancing carrier mobility using mechanical stress via tensile or compressive nitride capping layers. *(2026-06-25)*
- **[Ch.5]** For strained-Si MOSFETs, deuterium (D) annealing instead of hydrogen (H) improves hot carrier reliability. D replaces existing H at the SiO₂-Si interface (strong kinetic isotope effect); Si-D bond is more resistant to hot electron excitation than Si-H. High-pressure D annealing enables shorter annealing time. Tensile stressed NMOS: reduced charge pumping current, increased HCI lifetime, reduced 1/f noise power. Compressive PMOS: increased Vth spreading, reduced NBTI lifetime, increased normalised drain current noise power. *(2026-06-25)*

### ESD

- **[Ch.5]** ESD: 'sudden and momentary electric current that flows between two objects at different electrical potentials caused by direct or induced by an electrostatic field.' Main FA issues: static charge generation (suppressed by antistatic coatings and air ionisers); human handling damage (wrist straps, shielded bags); static control and awareness; protection circuits within IC chip; antistatic precautions during wire-bonding and assembly. *(2026-06-25)*

### Latch-Up

- **[Ch.5]** Particular type of short circuit in improperly designed MOS IC: inadvertent creation of a low-impedance path between power supply and ground, triggering a parasitic SCR structure (pnp + npn transistors stacked), leading to overcurrent and destruction. Both transistors in saturation as long as the structure is forward biased. Causes: supply voltage above absolute maximum rating (transient spike), ionising radiation, cable discharge events (CDEs), external noise. *(2026-06-25)*
- **[Ch.5]** Technological solutions: shallow trench (insulating oxide surrounds both NMOS and PMOS, breaking the parasitic SCR structure); deep trench, retrograde wells, connecting implants, subcollectors, heavily-doped buried layers, buried goals. Radical solution: silicon-on-insulator (SOI) technology — inherently latch-up resistant. *(2026-06-25)*

### Leakage Currents in MOS ICs

- **[Ch.5]** Two leakage components: (i) **subthreshold leakage** — source-drain currents when transistor should be non-conducting; (ii) **gate oxide leakage** — tunnelling through thin oxide. Both depend on device size and terminal voltages. Higher Vth enables low-leakage transistors but deteriorates speed. *(2026-06-25)*
- **[Ch.5]** GIDL (Gate Induced Drain Leakage) current: sub-breakdown leakage induced by high gate-drain electric field; caused by band-to-band tunnelling in the reverse-biased channel-to-drain pn junction. GIDL increases with higher channel doping levels (observed in 45 nm CMOS). *(2026-06-25)*

### Parametric Failures of ICs

- **[Ch.5]** Two categories: (i) defect-free material where statistical distribution of speed-related IC parameters causes failures (longer channel transistor driving higher-resistance line); (ii) subtle defects (resistive vias, metal slivers, gate oxide shorts) that damage performance only under certain conditions. Parameters affecting circuit speed: channel-length variation, random-doping variation, Vth, diffusion resistance, channel-width variation, gate oxide thickness, via/contact resistance, metal interconnection uniformity. Multiple VDD-temperature corner testing is one approach to exposing intrinsic parameter failures. *(2026-06-25)*

### Soft Errors of ICs

- **[Ch.5]** SET (Single Event Transient) pulse width characterisation technique quantifies the effect of guard rings in reducing collected charge and SER. 0.35 µm technology: reduced SET pulse width with guard rings; ~30% reduction in event cross-section and max SET pulse width from heavy ion tests; must be combined with other mitigation techniques. *(2026-06-25)*
- **[Ch.5]** Charge sharing mitigation: 90 nm dual interlocked cell latch — guard rings show noticeable effect; nodal spacing leads to order-of-magnitude decrease in upset cross-section vs conventional layout. Angle and direction of incident ion strongly influence charge collected by multiple nodes. *(2026-06-25)*

### Electromigration in ICs

- **[Ch.5]** EM of interconnects: exponentially dependent on temperature. Models accounting for temporal and spatial temperature variations allow more accurate EM lifetime prediction. Assuming uniform average temperature along interconnect overestimates expected lifetime by 30%; assuming uniform max temperature underestimates it by 80%. *(2026-06-25)*

### High-k Dielectrics

- **[Ch.5]** Oxide equivalent thickness <2 nm requires SiO₂ replacement (excessive leakage). HfO₂-based materials (HfO₂, HfSiₓOᵧ, HfOₓNᵧ, HfSiₓOᵧNᵤ) are leading candidates. High-pressure deuterium post-metal anneal improves performance and reliability (better interfacial oxide quality, reduced fast trap sites, heavy mass effect of D). *(2026-06-25)*
- **[Ch.5]** NBTI in high-k dielectrics cannot be described by H R&D model alone. RTA effective for reducing pre-existing hole traps; nitrogen incorporation effective for thermal deactivation of hole traps. For reliable high-k/metal gate-stack pMOSFET: nitrogen incorporation in high-k films and gate-first process is desirable. *(2026-06-25)*

---

### Memories

- **[Ch.5]** Based on both Bi and MOS technologies. Tunnelling through gate insulator is a potential reliability issue — practical limit around 3 nm. Max allowable field in depletion regions represents another reliability issue; subthreshold conduction limits how low Vth can be reduced. In good devices, current decreases by one order of magnitude per 80–90 mV reduction in gate voltage in the subthreshold region. *(2026-06-25)*
- **[Ch.5]** Soft errors in memories: as dimensions and supply voltages reduce, charge involved in switching/retentive operations decreases. Soft errors occur when minority carriers cross a pn junction in sufficient quantity to upset node state. DRAMs most sensitive (small stored charge). Error correction codes (ECC) used in memory; parity used in logic. *(2026-06-25)*

### Silicon-on-Insulator (SOI)

- **[Ch.5]** Layered Si-insulator substrate reduces parasitic device capacitance and improves performance. Upper Si layer (containing active devices) is fully isolated from inactive substrate by a buried oxide (Si-rich, with high electron trap density — more susceptible to degradation than gate oxide; defects may jeopardise performance via coupling effects). Theoretical advantages over bulk Si: improved speed and current drivability, higher integration density, attenuated short-channel effects, lower power consumption, elimination of substrate-related parasitic effects. *(2026-06-25)*
- **[Ch.5]** Strained technology proposed for deep submicrometre MOSFET design: high-strained contact etch stop layer (CESL) combined with FUSI gate technology generates higher strain for carrier mobility enhancement even at large vertical electric fields. Self-heating effect in sub-0.18 µm SOI CMOS reduces metallisation lifetime and gate oxide time-to-breakdown; optimised clock driver design reduces hot spot temperature by 15°C and 7°C in 0.09 µm SOI and bulk CMOS respectively. *(2026-06-25)*

---

### Failure Modes and Mechanisms of Optoelectronic and Photonic Technologies

### Table 5.23 — Main Types of Optoelectronic and Photonic Component

| Component Family | Basic Material | Technology and Characteristics |
|-----------------|----------------|-------------------------------|
| **Light-emitting diodes (LEDs)** | AlGaAs, AlGaP, AlGaInP, GaAsP, GaP, GaN, InGaN, etc. | Semiconductor diodes that emit incoherent narrow-spectrum light (electroluminescence) when electrically biased in the forward direction of the pn junction. Small-area light source; often with optics to shape radiation pattern. Used in indicator lights and increasingly in higher-power applications (flashlights, area lighting). Colour depends on composition and condition of the semiconductor material; can be infrared, visible, or ultraviolet |
| **Photodiodes** | Si, Ge, GaAs, InP, CdTe | Diodes (avalanche or PIN type) that use the optical charge-carrier-generation effect, packaged in materials that allow light to pass. Used in photometry or optical communications. Multiple photodiodes may be packaged in a single device as a linear array or a two-dimensional array |
| **Phototransistors** | Si, GaAs | Designed to take advantage of light sensitivity (e.g. NPN bipolar transistor with exposed base region). Light strikes the base (instead of voltage being applied to the base). The phototransistor amplifies variations within it and has an advantage over the photodiode in that the resulting photocurrent is amplified through the normal current-gain function of a transistor |
| **Optocouplers** | LED + photodetector | Obtained by optically coupling (in the same package, but electrically isolated) an LED with a photodetector |
| **Photonic displays** | LCD, PDP | LCD: uses light-modulating properties of LCs. Each pixel is an electrode (ITO) that can align LC molecules in a particular direction. PDP: many tiny cells between glass panels filled with noble gases (usually neon and xenon); electrically turned into a plasma emitting UV light that excites phosphorus to emit visible light |
| **Solar cells** | Si, CdTe | Convert energy of sunlight directly into electricity based on the photovoltaic effect |

- **[Ch.5]** LED failure is a gradual process from multiple degradation types: (1) crystal defects (dislocations, precipitations) affect radiative recombination; structural changes generate non-radiative centres producing heat in the active layer; (2) electrode degradation from metal diffusion or semiconductor outer diffusion; current-crowding in high-power LEDs is a reliability risk; (3) EOS/ESD — Z diode or Schottky barrier used for protection; InGaN/GaN LEDs on sapphire (no electrical conduction) are more susceptible; (4) thermal runaway from voids in solder bonding LED to heat sink; insufficient thermal path creates hot spots; voids can arise from poor processing, Kirkendall voiding, or EM; (5) CTE mismatch between bonded parts and solder introduces delamination during temperature cycling; (6) package-related failures in encapsulant (thermomechanical stress, Tg exceedance, package cracking) or wires (bond breakage, die-attach strength loss from overheated epoxy); (7) transparent epoxy/silicone gel linked to light-transmission efficiency FM; (8) neutron irradiation creates defects increasing leakage current via the Poole-Frenkel effect (EC-ET = 130 meV electron-trap energy level) with ~20% drop in optical spectrum amplitude. *(2026-06-25)*

---

### Optocouplers

- **[Ch.5]** Main ageing problem: current transfer ratio (CTR) degradation caused by reduction of total photon flux emitted from the LED. *(2026-06-25)*
- **[Ch.5]** Reliability improvement: thin ITO film deposited over passivation, electrically connected to ground, acts as a shield against inversion failures by sinking charge build-up. For FA on optocoupler detector chips, ITO layer is removed using argon gas etch, followed by buffered oxide etch (BOE) to remove passivation, leaving metallisation and oxide intact. *(2026-06-25)*
