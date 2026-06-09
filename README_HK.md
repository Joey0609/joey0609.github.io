<h1 align="center">Hi 👋，我是 Joey0609</h1>
<p align="center">嵌入式、AI與物聯網工程師 | 軟硬體全端開發者</p>

<p align="left"> 
  <img src="https://komarev.com/ghpvc/?username=Joey0609&label=Profile%20views&color=0e75b6&style=flat" alt="Joey0609" /> 
  <img src="https://img.shields.io/github/followers/Joey0609?style=flat&color=0e75b6" alt="followers" />
</p> <a href="README_CN.md">简体中文</a> | <a href="README.md">English</a> | 繁體中文

- 🔭 我目前正在研究 **基於深度學習的多場景 PDR——將慣性導航與深度學習結合，讓行人在各種場景下都能獲得穩健的定位**

- 🌱 我正在學習 **深度學習與大語言模型**

- 👯 希望合作 **嵌入式系統、感測器融合與定位方向的科研專案，也正在尋找研究所深造機會**

- 📫 聯絡方式 **muzz2023@mails.jlu.edu.cn**

- ⚡ **徜徉程式碼世界，唯有構想落地之際，方能體會極致的滿足。**

- 📝 我的部落格 **[https://joey0609.github.io](https://joey0609.github.io)**

<h3 align="left">聯絡我：</h3>
<p align="left">
<a href="https://github.com/Joey0609" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="Joey0609" height="30" width="40" /></a>
</p>

---

## 🔬 科研經歷

### 1. 基於 UWB 與 INS 融合的無基地臺協同定位系統
*2025.05 – 2026.04* | 👤 團隊負責人

搭建完整的多節點協同定位平台，包含感知硬體、智慧充電管理、Web/桌面視覺化軟體與定位演算法體系，設備已通過可靠性驗證並投入批量生產。

🔥 **核心技術 + 實測數據效果**
1. ⚡ 硬體性能：足綁IMU節點穩定輸出**200Hz**慣性數據，峰值刷新率**300Hz**，兼顧低成本與高採樣性能；配套16路智慧充電站，支援多路設備同步充電、狀態監測與批量除錯。
2. 🛡️ 演算法優化：整合 **ZUPT 零速更新** 演算法，大幅削弱INS累積漂移，保障長時間行走導航穩定性。
3. 📍 無錨點定位：運用 **MDS 自動對齊演算法**，純依靠節點間測距與慣性數據，在零基地臺、零初始座標條件下完成空間位姿重建。
4. 🔗 融合定位：採用 **UKF 濾波** 實現UWB與INS緊耦合，整體定位精度達到**釐米級**。
5. 🧪 場景實測：
   - 室內（28m×15m籃球場）：5個節點同步運行，120秒連續運動、100幀採樣下，直線、轉彎、繞圈等不規則路徑均可精準還原；
   - 室外（1000米長距離路線）：多組重複測試軌跡一致性强，與實景衛星圖高度匹配；
   - 相容90/100/120步/分鐘多種行走步伐，週期性誤差得到有效抑制。

🛠️ **技術棧**：ESP32-C6, STM32, BMI088, ADXL355, FreeRTOS, UWB/IMU融合, Electron, MATLAB

📖 [檢視專案詳細介紹 →](https://joey0609.github.io/research/cooperative-positioning)

### 2. 基於深度學習的多場景 PDR（行人航位推算）
*2026.01 – 至今* | **角色**：專案負責人

主導基於深度學習增強的行人航位推算系統的整體設計與研發，涵蓋硬體適配、演算法研究、模型部署及多場景下的系統驗證。

---

## 🚀 精選專案

### [NOTAM Website Viewer](https://github.com/Joey0609/notams)
<img src="https://img.shields.io/github/stars/Joey0609/notams?style=social" alt="GitHub stars"> <img src="https://img.shields.io/badge/dynamic/json?color=blue&amp;label=Visits&amp;query=value&amp;url=https://joey0609.github.io/notams/visits.json" alt="Website Visits">

🌐 **網站：** [https://joey0609.github.io/notams/](https://joey0609.github.io/notams/)

解析 NOTAM（航行通告）與海事安全通告，從中提取火箭發射區、碎片區和限制區資訊，在互動式地圖上清晰呈現。

**主要功能**：
- 多來源 NOTAM 與 MSI 資料的自動即時爬取與解析
- 互動式地圖視覺化，支援歷史歸檔比對與多來源比對
- 座標查詢、距離測量、圖片匯出
- 跨異構通告格式的時間視窗解析與智慧去重

### [Rocket Launch Live Control & Visualization System](https://github.com/Joey0609/rocket-mission-control)
<img src="https://img.shields.io/github/stars/Joey0609/rocket-mission-control?style=social" alt="GitHub stars">

- 即時火箭發射監控與指揮介面，支援即時遙測視覺化
- 基於 Web 的指揮控制系統，多用戶端即時同步
- 整合資料記錄與回放功能，便於發射後覆盤分析

---

## 🛠️ 技能

- ⚙️ 嵌入式全流程開發與除錯
- 🔌 硬體原理圖和PCB設計
- 📍 多感測器融合 & 導航定位
- 🤖 人工智慧 & 深度學習
- 🖥️ 前後端視覺化系統開發

**🌐 程式語言：**

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

**🤖 AI / 機器學習與資料：**

[![ChatGPT](https://img.shields.io/badge/ChatGPT-74AA9C?style=flat&logo=openai&logoColor=white)](https://chatgpt.com/)
[![Claude](https://img.shields.io/badge/Claude-D97706?style=flat&logo=claude&logoColor=white)](https://claude.ai/)
[![DeepSeek](https://img.shields.io/badge/DeepSeek-4F6BED?style=flat&logo=deepseek&logoColor=white)](https://chat.deepseek.com/)
[![Anaconda](https://img.shields.io/badge/Anaconda-44A833?style=flat&logo=anaconda&logoColor=white)](https://www.anaconda.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=opencv&logoColor=white)](https://opencv.org/)
[![MATLAB](https://img.shields.io/badge/MATLAB-0076A8?style=flat&logo=mathworks&logoColor=white)](https://www.mathworks.com/)

**🧩 框架與前端：**

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

**⚙️ 嵌入式與硬體：**

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

**🛠 開發與建置工具：**

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

**🔌 硬體設計與其他：**

[![Altium Designer](https://img.shields.io/badge/Altium%20Designer-A5915F?style=flat&logo=altiumdesigner&logoColor=white)](https://www.altium.com/)
[![嘉立創EDA](https://img.shields.io/badge/嘉立創EDA-0078D4?style=flat)](https://www.lceda.cn/)
[![Vivado](https://img.shields.io/badge/Vivado-F01F30?style=flat&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vivado.html)
[![Vitis](https://img.shields.io/badge/Vitis-F01F30?style=flat&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vitis.html)
[![MultiSim](https://img.shields.io/badge/MultiSim-FFCD00?style=flat&logo=nationalinstruments&logoColor=black)](https://www.ni.com/en-us/shop/electronic-test-instrumentation/application-software-for-electronic-test-and-instrumentation-category/what-is-multisim.html)
[![Wireshark](https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=wireshark&logoColor=white)](https://www.wireshark.org/)
[![Bambu Studio](https://img.shields.io/badge/Bambu%20Studio-00AE42?style=flat&logo=bambulab&logoColor=white)](https://bambulab.com/en/download/studio)
[![Photoshop](https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white)](https://www.adobe.com/products/photoshop.html)

## 📊 Stats
[![GitHub Streak](https://streak-stats.demolab.com/?user=Joey0609&theme=transparent)](https://git.io/streak-stats)