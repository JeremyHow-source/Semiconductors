# 🔬 Hitachi Semiconductor Analysis & Electron Microscopy Technical Knowledge Source
## 日立半导体分析与电子显微技术专业知识库

> **Source**: Hitachi High-Technologies & Oxford Instruments Semiconductor Characterization Handbook  
> **Scope**: STEM Z-Contrast Imaging, EDX Spectroscopy, Low Vacuum SEM, Cathodoluminescence (CL), EBSD Crystallography, FIB Sample Preparation  
> **Image Mapping**: 96 Tagged High-Resolution Figures & Page-by-Page References  

---

## 目录 / Table of Contents

- [Chapter 1. STEM Signal Analysis & Monte Carlo Scattering Simulation (Page 66)](#chapter-1-stem-signal-analysis--monte-carlo-scattering-simulation-page-66)
- [Chapter 2. EDX Detector Principles & Semiconductor Instrumentation (Page 76)](#chapter-2-edx-detector-principles--semiconductor-instrumentation-page-76)
- [Chapter 3. Low Vacuum EDX Analysis & Surface Charge Suppression (Page 85)](#chapter-3-low-vacuum-edx-analysis--surface-charge-suppression-page-85)
- [Chapter 4. Cathodoluminescence (CL) Spectroscopy & Defect Characterization (Pages 93–94)](#chapter-4-cathodoluminescence-cl-spectroscopy--defect-characterization-pages-9394)
- [Chapter 5. EBSD Microstructure & Phase Crystallography (Pages 95–110)](#chapter-5-ebsd-microstructure--phase-crystallography-pages-95110)
- [Chapter 6. Focused Ion Beam (FIB) Semiconductor Sample Preparation & Failure Analysis (Pages 111–145)](#chapter-6-focused-ion-beam-fib-semiconductor-sample-preparation--failure-analysis-pages-111145)

---

<a id="chapter-1-stem-signal-analysis--monte-carlo-scattering-simulation-page-66"></a>
# Chapter 1. STEM Signal Analysis & Monte Carlo Scattering Simulation
## 📍 Page 66: 扫描透射电镜 (STEM) 信号分析与蒙特卡洛散射模拟

### 1.1 散射电子计数与样品密度关系 (Section 6.6.4)
- 在高角环形暗场扫描透射电镜 (HAADF-STEM) 模式下，接收散射角 $400 	ext{ mrad}$ 至 $800 	ext{ mrad}$ 范围内的非相干高角散射电子。
- 散射电子强度 $I_{	ext{HAADF}}$ 与原子序数 $Z^2$ 成正比（原子序数衬度），允许对半导体微结构中的金属连线与介质层进行高分辨率衬度区分：
  - 重元素（Pt, W, Ta, Mo）产生极高散射强度与亮衬度。
  - 轻元素（Si, Al, Ti, C）散射强度降低，呈现暗衬度。

### 1.2 铝与半导体薄片样品的蒙特卡洛电子散射模拟 (Section 6.6.5)
- **块状样品 (Bulk Specimen)**: 在 $30 	ext{ kV}$ 加速电压下，电子束在块状样品内部的散射扩张直径可达约 $5 \ \mu	ext{m}$，严重限制了 X 射线与信号采集的空间分辨率。
- **薄膜样品 (Thin-Film TEM/STEM Specimen)**: 对于厚度仅 $100 	ext{ nm}$ 的 Al 薄片，电子散射区域局限在约 $20 	ext{ nm}$ 的狭窄横向范围内，实现了纳米级超高空间分辨率的成分与晶界分析。

![Hitachi Page 66: Monte Carlo Electron Scattering Simulation](../Hitachi_Images/hitachi_photo_29.jpg)
*Figure 6.6.4 & 6.6.5: Change in Scattered Electron Count vs. Specimen Density and Monte Carlo Simulation of Electron Beam Scattering (Page 66)*

---

<a id="chapter-2-edx-detector-principles--semiconductor-instrumentation-page-76"></a>
# Chapter 2. EDX Detector Principles & Semiconductor Instrumentation
## 📍 Page 76: 能量色散 X 射线光谱仪 (EDX) 探测器原理与半导体结构

### 2.1 SEM 中的 X 射线检测器类型 (Section 6.7.5)
- **能量色散光谱仪 (EDX/EDS)**: 利用半导体固态探测器（$	ext{Si(Li)}$ 或 SDD）与多通道脉冲高度分析器，全谱同时采集，效率高。
- **波长色散光谱仪 (WDX/WDS)**: 利用分光晶体与气体比列计数器，按布拉格反射条件单波长测量，能量分辨率极高（$<10 	ext{ eV}$）。

### 2.2 EDX 探测器工作原理与离化能 (Section 6.7.6)
- 当特征 X 射线入射到半导体探测器的本征层 ($i$ 层) 时，将产生与 X 射线能量成正比的电子-空穴对。
- 在 Silicon 探测器中，产生单个电子-空穴对所需的离化能（Ionization Energy）平均为：
  $$E_{	ext{ionize}} pprox 3.9 	ext{ eV}$$
- 反向偏压电场收集电子-空穴对，经前置放大器输出电压阶跃脉冲，输入脉冲处理器计算峰高与 X 射线能量。

![Hitachi Page 76: EDX Detector Principles & Semiconductor Configuration](../Hitachi_Images/hitachi_photo_19.jpg)
*Figure 6.7.6: Principle and Instrument Configuration of EDX & Si(Li) Semiconductor Detector Structure (Page 76)*

---

<a id="chapter-3-low-vacuum-edx-analysis--surface-charge-suppression-page-85"></a>
# Chapter 3. Low Vacuum EDX Analysis & Surface Charge Suppression
## 📍 Page 85: 低真空 SEM 条件下的高精度 EDX 分析

### 3.1 绝缘半导体样品的电荷积累与消除 (Section 6.8.7)
- 封装树脂、陶瓷基板与绝缘膜在高真空下受电子束照射会积累负电荷，导致电子束偏移与峰形失真。
- 低真空气氛（Low Vacuum Mode, $30 	ext{ Pa} \sim 80 	ext{ Pa}$）利用残余气体分子电离产生的正离子中和样品表面电荷。
- 在 $15 	ext{ kV}$ 加速电压与 $30 	ext{ Pa}$ 腔室压力下，成功对耐热散热片进行高信噪比 EDX 成分分布图分析，清晰分辨轻元素 B-K、N-K 和 Si-K。

![Hitachi Page 85: Low Vacuum EDX Heat Sink Analysis](../Hitachi_Images/hitachi_photo_10.jpg)
*Figure 6.8.7: Example of Analysis of Heat Resistant Sheet under Accelerating Voltage 15kV & Chamber Pressure 30Pa (Page 85)*

---

<a id="chapter-4-cathodoluminescence-cl-spectroscopy--defect-characterization-pages-9394"></a>
# Chapter 4. Cathodoluminescence (CL) Spectroscopy & Defect Characterization
## 📍 Pages 93–94: 阴极发光 (CL) 光谱与半导体缺陷分析

### 4.1 阴极发光 (CL) 的空间分辨率控制 (Section 6.9.9)
- 电子束激发的 CL 相比激光激发的光致发光 (PL) 具备更高的空间分辨率。
- 通过调整加速电压（如 $5 	ext{ kV}$ 与 $2 	ext{ kV}$）可控制电子在晶体内部的载流子扩散长度（Electron-Hole Pair Diffusion Length）。
- 氮化镓 (GaN) 宽禁带半导体的发光峰解析：
  - $357 	ext{ nm}$: 自由激子带隙发光 (Bandgap Emission)
  - $376 	ext{ nm}$: 位错缺陷发光 (Dislocation State)
  - $386 	ext{ nm}$: 杂质与点缺陷发光 (Defect Emission)

### 4.2 CL 光谱仪系统结构 (Section 6.9.10)
- 包含聚焦镜、分光光栅 (Diffraction Grating)、入射/出射狭缝 (Slits) 及光电倍增管 (PMT) 探测器。
- 对于长波段 CL 信号，配备液氮冷却的高灵敏度 PMT 探测器以抑制热噪声。

![Hitachi Page 93: CL Spatial Resolution & GaN Emissions](../Hitachi_Images/hitachi_photo_02.jpg)
*Figure 6.9.9: Spatial Resolution in CL Analysis & GaN Wavelength Emission Maps (Page 93)*

![Hitachi Page 94: CL Spectroscope System Diagram](../Hitachi_Images/hitachi_photo_01.jpg)
*Figure 6.9.10: How Analysis is Performed by CL Spectroscope & PMT Configuration (Page 94)*

---

<a id="chapter-5-ebsd-microstructure--phase-crystallography-pages-95110"></a>
# Chapter 5. EBSD Microstructure & Phase Crystallography
## 📍 Pages 95–110: 电子背散射衍射 (EBSD) 晶体学与取向分析

### 5.1 EBSD 菊池花样生成与菊池带分析
- 在倾斜 $70^\circ$ 的 SEM 样品台下，入射电子在晶面发生弹性和非弹性散射，形成背散射菊池带 (Kikuchi Bands)。
- CCD/CMOS 探测器捕捉菊池花样，利用霍夫变换 (Hough Transform) 自动识别晶面夹角并测定晶体取向 (Euler Angles $\phi_1, \Phi, \phi_2$)。

![Hitachi Page 95: EBSD Pattern Formation](../Hitachi_Images/hitachi_photo_03.jpg)
*EBSD Kikuchi Pattern Generation & Crystallographic Orientation Analysis (Pages 95-110)*

---

<a id="chapter-6-focused-ion-beam-fib-semiconductor-sample-preparation--failure-analysis-pages-111145"></a>
# Chapter 6. Focused Ion Beam (FIB) Semiconductor Sample Preparation & Failure Analysis
## 📍 Pages 111–145: 聚焦离子束 (FIB) 半导体样品制备与失效分析

### 6.1 FIB 离子束溅射与气体辅助沉积 (GIS)
- 利用 $	ext{Ga}^+$ 离子束在 $30 	ext{ kV}$ 下对半导体器件关键失效点进行纳米级截面切割（Cross-sectioning）。
- 气体辅助沉积 (Gas Injection System, GIS): 在保护层沉积 Pt 或 C 膜，防止离子束对半导体顶层结构的损伤。
- TEM 减薄样品制备（Omniprobe 针尖提拉法），制备厚度 $<50 	ext{ nm}$ 的超薄 TEM 薄片。

![Hitachi Page 111: FIB Sample Preparation](../Hitachi_Images/hitachi_photo_40.jpg)
*FIB Cross-Sectioning & TEM Thin-Film Lamella Lift-out Preparation (Pages 111-145)*

