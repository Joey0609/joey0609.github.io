# About Me

Hi 👋, I'm **Joey0609**, an **Embedded, AI and IoT Engineer** and **Full-Stack Hardware & Software Developer**.

> *"Coding is my favorite pastime. Nothing beats the sense of accomplishment when my ideas finally work."*

I'm currently working on **Deep Learning Based Multi-scenario PDR** — combining inertial navigation with deep learning for robust pedestrian positioning across diverse scenarios. I'm also actively learning **Deep Learning & Large Language Models**.

I'm looking to collaborate on **research-oriented projects in embedded systems, sensor fusion, and localization**, while seeking graduate study opportunities.

- 📫 Email: **muzz2023@mails.jlu.edu.cn**
- 📝 Blog: **[https://joey0609.github.io](https://joey0609.github.io)**
- 🐙 GitHub: **[https://github.com/joey0609](https://github.com/joey0609)**

---

## 🔬 Research Experience

### 1. Anchor Free Cooperative Positioning System Fusing UWB & INS
*May 2025 – Apr 2026* | 👤 **Team Leader**

Built a complete multi-node cooperative positioning platform, including sensing hardware, intelligent charging management, Web/desktop visualization software, and localization algorithms. The equipment has passed reliability verification and entered mass production.

**Core Tech & Real-World Performance**

- ⚡ **Hardware Performance**: Foot-mounted IMU nodes deliver stable **200Hz** inertial data output, with peak refresh rate of **300Hz**, balancing low cost with high sampling performance. A 16-channel intelligent charging station supports simultaneous charging, status monitoring, and batch debugging.
- 🛡️ **Algorithm Optimization**: Integrated **ZUPT** (Zero Velocity Update) algorithm significantly suppresses INS cumulative drift, ensuring stable long-duration walking navigation.
- 📍 **Anchor-Free Localization**: Designed an **MDS auto-alignment algorithm** that relies solely on inter-node ranging and inertial data to reconstruct spatial poses under zero-beacon, zero-initial-coordinate conditions.
- 🔗 **Fusion Positioning**: **UKF filtering** is used for tightly-coupled UWB/INS fusion, achieving **centimeter-level** positioning accuracy.
- 🧪 **Field Tests**:
  - **Indoor** (28m × 15m basketball court): 5 nodes running synchronously, 120s continuous motion, 100-frame sampling — straight lines, turns, loops, and other irregular trajectories are accurately reconstructed.
  - **Outdoor** (1000m long-distance route): Multiple repeated test trajectories show strong consistency, closely matching satellite imagery.
  - Compatible with walking cadences of 90/100/120 steps/min; periodic errors are effectively suppressed.

**Tech Stack**: ESP32-C6, STM32, BMI088, ADXL355, FreeRTOS, UWB/IMU Fusion, Electron, MATLAB

### 2. Deep Learning Based Multi-scenario PDR
*Jan 2026 – Present* | 👤 **Project Leader**

Leading the overall design and development of a deep learning enhanced Pedestrian Dead Reckoning system. Covering hardware adaptation, algorithm research, model deployment and system verification across diverse walking scenarios.

---

## 🚀 Featured Projects

### NOTAM Website Viewer
::github{repo="joey0609/notams"}
🌐 **Website**: [https://joey0609.github.io/notams/](https://joey0609.github.io/notams/)

Parses NOTAMs (Notice to Airmen) and maritime safety notices to extract rocket launch areas, debris zones, and restricted zones, then visualizes them on an interactive map.

**Key Features**:
- Automated real-time crawling and parsing of multi-source NOTAM & MSI data
- Interactive map visualization with historical archive matching and source reconciliation
- Coordinate lookup, distance measurement, and image export
- Time window parsing and deduplication across heterogeneous notice formats

### Rocket Launch Live Control & Visualization System
::github{repo="joey0609/rocket-mission-control"}
- Real-time rocket launch monitoring and control interface with live telemetry visualization
- Web-based command & control system with multi-client synchronization
- Integrated data logging and playback for post-launch analysis

---

## 🛠️ Skills

- ⚙️ Full-Cycle Embedded Development & Debugging
- 🔌 Hardware Schematic & PCB Design
- 📍 Multi-Sensor Fusion & Navigation Positioning
- 🤖 AI & Deep Learning
- 🖥️ Full-Stack Visualization System Development


**🌐 Languages:**

[![C](https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white)](https://en.cppreference.com/w/c)
[![C++](https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white)](https://isocpp.org/) [![C#](https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://dart.dev/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)](https://www.java.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/javascript)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)](https://www.php.net/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/css)
[![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown&logoColor=white)](https://www.markdownguide.org/)
[![LaTeX](https://img.shields.io/badge/LaTeX-008080?style=flat&logo=latex&logoColor=white)](https://www.latex-project.org/)
[![Lua](https://img.shields.io/badge/Lua-2C2D72?style=flat&logo=lua&logoColor=white)](https://www.lua.org/)

**🤖 AI / ML & Data:**

[![ChatGPT](https://img.shields.io/badge/ChatGPT-74AA9C?style=flat&logo=openai&logoColor=white)](https://chatgpt.com/)
[![Claude](https://img.shields.io/badge/Claude-D97706?style=flat&logo=claude&logoColor=white)](https://claude.ai/)
[![DeepSeek](https://img.shields.io/badge/DeepSeek-4F6BED?style=flat&logo=deepseek&logoColor=white)](https://chat.deepseek.com/)
[![Anaconda](https://img.shields.io/badge/Anaconda-44A833?style=flat&logo=anaconda&logoColor=white)](https://www.anaconda.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=opencv&logoColor=white)](https://opencv.org/)
[![MATLAB](https://img.shields.io/badge/MATLAB-0076A8?style=flat&logo=mathworks&logoColor=white)](https://www.mathworks.com/)

**🧩 Frameworks & Frontend:**

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat&logo=vue.js&logoColor=4FC08D)](https://vuejs.org/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white)](https://flutter.dev/)
[![WPF](https://img.shields.io/badge/WPF-512BD4?style=flat&logo=dotnet&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/)
[![ROS2](https://img.shields.io/badge/ROS2-22314E?style=flat&logo=ros&logoColor=white)](https://docs.ros.org/en/humble/)
[![LVGL](https://img.shields.io/badge/LVGL-20B2AA?style=flat&logo=lvgl&logoColor=white)](https://lvgl.io/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![ECharts](https://img.shields.io/badge/ECharts-AA344D?style=flat&logo=echarts&logoColor=white)](https://echarts.apache.org/)
[![CanvasJS](https://img.shields.io/badge/CanvasJS-00ACC1?style=flat&logo=javascript&logoColor=white)](https://canvasjs.com/)

**⚙️ Embedded & Hardware:**

[![STM32](https://img.shields.io/badge/STM32-03234B?style=flat&logo=stmicroelectronics&logoColor=white)](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html)
[![STM32CubeMX](https://img.shields.io/badge/STM32CubeMX-03234B?style=flat&logo=stmicroelectronics&logoColor=white)](https://www.st.com/en/development-tools/stm32cubemx.html)
[![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=flat&logo=espressif&logoColor=white)](https://www.espressif.com/en/products/socs/esp32)
[![Arduino](https://img.shields.io/badge/Arduino-00979D?style=flat&logo=arduino&logoColor=white)](https://www.arduino.cc/)
[![Raspberry Pi](https://img.shields.io/badge/Raspberry%20Pi-A22846?style=flat&logo=raspberrypi&logoColor=white)](https://www.raspberrypi.com/)
[![Vivado](https://img.shields.io/badge/Vivado-F01F30?style=flat&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vivado.html)
[![Vitis](https://img.shields.io/badge/Vitis-F01F30?style=flat&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vitis.html)
[![Keil μVision](https://img.shields.io/badge/Keil%20μVision-394049?style=flat&logo=armkeil&logoColor=white)](https://www2.keil.com/mdk5/uvision/)
[![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)](https://www.linux.org/)
[![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84?style=flat&logo=androidstudio&logoColor=white)](https://developer.android.com/studio)

**🛠 Dev & Build Tools:**

[![Git](https://img.shields.io/badge/Git-E34F26?style=flat&logo=git&logoColor=white)](https://git-scm.com/)
[![CMake](https://img.shields.io/badge/CMake-064F8C?style=flat&logo=cmake&logoColor=white)](https://cmake.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)
[![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat&logo=visualstudio&logoColor=white)](https://visualstudio.microsoft.com/)
[![CLion](https://img.shields.io/badge/CLion-000000?style=flat&logo=clion&logoColor=white)](https://www.jetbrains.com/clion/)
[![PyCharm](https://img.shields.io/badge/PyCharm-000000?style=flat&logo=pycharm&logoColor=white)](https://www.jetbrains.com/pycharm/)
[![WebStorm](https://img.shields.io/badge/WebStorm-000000?style=flat&logo=webstorm&logoColor=white)](https://www.jetbrains.com/webstorm/)
[![SOLIDWORKS](https://img.shields.io/badge/SOLIDWORKS-FF0000?style=flat&logo=dassaultsystemes&logoColor=white)](https://www.solidworks.com/)
[![Cursor](https://img.shields.io/badge/Cursor-000000?style=flat&logo=cursor&logoColor=white)](https://cursor.sh/)
[![PowerShell](https://img.shields.io/badge/PowerShell-5391FE?style=flat&logo=powershell&logoColor=white)](https://learn.microsoft.com/en-us/powershell/)
[![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnubash&logoColor=white)](https://www.gnu.org/software/bash/)
[![Terminal](https://img.shields.io/badge/Terminal-4D4D4D?style=flat&logo=terminal&logoColor=white)](https://learn.microsoft.com/en-us/windows/terminal/)

**🔌 Hardware Design & Other:**

[![Altium Designer](https://img.shields.io/badge/Altium%20Designer-A5915F?style=flat&logo=altiumdesigner&logoColor=white)](https://www.altium.com/)
[![嘉立创EDA](https://img.shields.io/badge/嘉立创EDA-0078D4?style=flat)](https://www.lceda.cn/)
[![MultiSim](https://img.shields.io/badge/MultiSim-FFCD00?style=flat&logo=nationalinstruments&logoColor=black)](https://www.ni.com/en-us/shop/electronic-test-instrumentation/application-software-for-electronic-test-and-instrumentation-category/what-is-multisim.html)
[![Wireshark](https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=wireshark&logoColor=white)](https://www.wireshark.org/)
[![Bambu Studio](https://img.shields.io/badge/Bambu%20Studio-00AE42?style=flat&logo=bambulab&logoColor=white)](https://bambulab.com/en/download/studio)
[![Photoshop](https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white)](https://www.adobe.com/products/photoshop.html)


---

## 📊 GitHub Stats

[![GitHub Streak](https://streak-stats.demolab.com/?user=Joey0609&theme=transparent)](https://git.io/streak-stats)
