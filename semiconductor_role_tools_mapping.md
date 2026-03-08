# Semiconductor Job Roles and Associated Tools

This document maps common semiconductor manufacturing job roles to the process areas they oversee and the specific tools they utilize.

## 1. Lithography Process Engineer
*   **Process Area:** Patterning, Photolithography.
*   **Core Tools:**
    *   **ASML/Nikon/Canon Scanners & Steppers:** DUV (193nm), EUV (13.5nm) for high-resolution patterning.
    *   **Litho Track (Coater/Developer):** Tokyo Electron (TEL) Clean Track for resist application and development.
*   **Metrology & Inspection Tools:**
    *   **CD-SEM (Critical Dimension Scanning Electron Microscope):** Measuring feature widths (e.g., gate length).
    *   **Overlay Metrology Tools:** Measuring alignment accuracy between layers.
    *   **Ellipsometer:** Measuring photoresist thickness.
*   **Software/Analysis:**
    *   **OPC (Optical Proximity Correction) Software:** Compensating for diffraction effects.
    *   **Bossung Plots & FEM (Focus-Exposure Matrix):** Determining process windows.

## 2. Etch Process Engineer
*   **Process Area:** Dry Etch (Plasma Etching), Wet Etch.
*   **Core Tools:**
    *   **RIE (Reactive Ion Etch) Chambers:** For anisotropic material removal.
    *   **ICP (Inductively Coupled Plasma) Chambers:** For high-density plasma etching.
    *   **ALE (Atomic Layer Etch):** For atomic-scale precision and selectivity.
    *   **Wet Benches/Single Wafer Wet Tools:** For isotropic etching and cleaning (e.g., SC-1, SC-2, HF).
*   **Monitoring Tools:**
    *   **OES (Optical Emission Spectroscopy):** For endpoint detection by monitoring plasma chemistry.
    *   **Laser Interferometry:** For real-time etch depth monitoring.
*   **Key Parameters:** RF Power, Bias Voltage, Gas Flow Ratios (e.g., CF4/O2), Pressure.

## 3. Deposition (Thin Films) Engineer
*   **Process Area:** PVD, CVD, ALD.
*   **Core Tools:**
    *   **CVD (Chemical Vapor Deposition):** PECVD (Plasma Enhanced), LPCVD (Low Pressure) for dielectrics and silicon.
    *   **PVD (Physical Vapor Deposition):** Sputtering tools for metals and barriers (e.g., TiN, TaN).
    *   **ALD (Atomic Layer Deposition):** For highly conformal, atomic-layer controlled films (High-k dielectrics).
    *   **Epitaxy (Epi) Tools:** For growing single-crystal layers (e.g., SiGe).
*   **Monitoring Tools:**
    *   **XRR (X-ray Reflectivity):** Measuring thin film thickness and density.
    *   **Four-Point Probe:** Measuring sheet resistance (Rs) of metal films.

## 4. Metrology Engineer
*   **Process Area:** Measurement and Characterization.
*   **Core Tools:**
    *   **CD-SEM:** High-magnification top-down imaging.
    *   **OCD (Optical Critical Dimension) / Scatterometry:** Using light diffraction to model 3D structures.
    *   **AFM (Atomic Force Microscopy):** Measuring surface roughness and step heights.
    *   **TEM/SEM (Cross-sectional):** For detailed structural analysis (often destructive).
    *   **Ellipsometry:** Measuring refractive index (n, k) and film thickness.

## 5. Yield & Defect Engineer
*   **Process Area:** Yield Enhancement, Root Cause Analysis.
*   **Core Tools:**
    *   **Brightfield/Darkfield Inspection Tools (e.g., KLA):** Finding defects on patterned/unpatterned wafers.
    *   **DR-SEM (Defect Review SEM):** Automatically navigating to and imaging defects.
    *   **EDX (Energy-Dispersive X-ray Spectroscopy):** Identifying elemental composition of particles.
*   **Software/Analysis:**
    *   **YMS (Yield Management System):** Correlating defect maps with electrical test data.
    *   **SPC (Statistical Process Control):** Monitoring process drift using X-bar and R charts.

## 6. Process Integration Engineer (PIE)
*   **Process Area:** End-to-end flow, Module interactions.
*   **Focus:** Managing "split points", DTCO (Design-Technology Co-Optimization), and resolving interactions between modules (e.g., how Litho affects Etch CD).
*   **Tools:** Uses all the above metrology and inspection data, plus TCAD (Technology Computer-Aided Design) simulations.

## 7. Wet Process / Cleaning Engineer
*   **Process Area:** Surface Preparation, Contamination Control.
*   **Core Tools:**
    *   **Wet Benches:** For batch processing (e.g., Tokyo Electron Celius).
    *   **Single Wafer Cleaners:** For high-precision cleaning (e.g., Screen SU-3200).
    *   **IPA Dryers / Marangoni Dryers:** For watermark-free drying.
*   **Monitoring Tools:**
    *   **Particle Counters:** Measuring adders on the wafer surface.
    *   **Chemical Concentration Monitors:** Real-time titration or sensors for HF, SC-1, etc.
*   **Key Concepts:** Zeta Potential, Megasonic Agitation, Metallic/Organic Contamination.

## 8. Failure Analysis (FA) Engineer
*   **Process Area:** Post-Silicon Debug, Reliability Testing.
*   **Core Tools:**
    *   **FIB (Focused Ion Beam):** For circuit editing and cross-sectioning.
    *   **TEM (Transmission Electron Microscope):** For atomic-resolution imaging.
    *   **EMMI (Emission Microscopy):** Detecting photon emissions from defects.
    *   **OBIRCH (Optical Beam Induced Resistance Change):** Locating high-resistance shorts.
    *   **Prober Stations:** For direct electrical measurement on the die.
