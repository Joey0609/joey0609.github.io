<h1 align="center">Hi 👋，我是 Joey0609</h1>
<p align="center">嵌入式、AI与物联网工程师 | 软硬件全栈开发者</p>

<p align="left"> 
  <img src="https://komarev.com/ghpvc/?username=Joey0609&label=Profile%20views&color=0e75b6&style=flat" alt="Joey0609" /> 
  <img src="https://img.shields.io/github/followers/Joey0609?style=flat&color=0e75b6" alt="followers" />
</p>

简体中文 | <a href="README.md">English</a> | <a href="README_HK.md">繁體中文</a>

- 🔭 我正在做 **基于深度学习的多场景 PDR——将惯性导航与深度学习相结合，让行人在各种场景下都能获得稳健的定位**

- 🌱 我在学 **深度学习与大语言模型**

- 👯 希望合作 **嵌入式系统、传感器融合与定位方向的科研项目，也正在寻找研究生深造机会**

- 📫 联系方式 **muzz2023@mails.jlu.edu.cn**

- ⚡ **徜徉代码世界，唯有构想落地之际，方能体会极致的满足。**

- 📝 我的博客 **[https://joey0609.github.io](https://joey0609.github.io)**

---

## 🔬 科研经历

### 1. 基于 UWB 与 INS 融合的无基站协同定位系统
*2025.05 – 2026.04* | 👤 团队负责人

搭建完整的多节点协同定位平台，包含感知硬件、智能充电管理、Web/桌面可视化软件与定位算法体系，设备已通过可靠性验证并投入批量生产。

🔥 **核心技术 + 实测数据效果**
1. ⚡ 硬件性能：足绑IMU节点稳定输出**200Hz**惯性数据，峰值刷新率**300Hz**，兼顾低成本与高采样性能；配套16路智能充电站，支持多路设备同步充电、状态监测与批量调试。
2. 🛡️ 算法优化：集成 **ZUPT 零速更新** 算法，大幅削弱惯性导航累积漂移，保障长时间行走导航稳定性。
3. 📍 无锚点定位：设计 **MDS 自动对齐算法**，纯依靠节点间测距与惯性数据，在零基站、零初始坐标条件下完成空间位姿重建。
4. 🔗 融合定位：采用 **UKF 滤波** 实现UWB与INS紧耦合，整体定位精度达到**厘米级**。
5. 🧪 场景实测：
   - 室内（28m×15m篮球场）：5个节点同步运行，120秒连续运动、100帧采样下，直线、转弯、绕圈等不规则路径均可精准还原；
   - 室外（1000米长距离路线）：多组重复测试轨迹一致性强，与实景卫星图高度匹配；
   - 兼容90/100/120步/分钟多种行走步频，周期性误差得到有效抑制。

🛠️ **技术栈**：ESP32-C6, STM32, BMI088, ADXL355, FreeRTOS, UWB/IMU融合, Electron, MATLAB

📖 [查看项目详细介绍 →](https://joey0609.github.io/research/cooperative-positioning)

### 2. 基于深度学习的多场景 PDR（行人航位推算）
*2026.01 – 至今* | **角色**：项目负责人

正在研发基于深度学习增强的行人航位推算系统的整体设计与研发，涵盖硬件适配、算法研究、模型部署及多场景下的系统验证。

---

## 🚀 精选项目

### [NOTAM Website Viewer](https://github.com/Joey0609/notams)
<img src="https://img.shields.io/github/stars/Joey0609/notams?style=social" alt="GitHub stars"> <img src="https://img.shields.io/badge/dynamic/json?color=blue&amp;label=Visits&amp;query=value&amp;url=https://joey0609.github.io/notams/visits.json" alt="Website Visits">

🌐 **网站：** [https://joey0609.github.io/notams/](https://joey0609.github.io/notams/)

解析 NOTAM（航行通告）与海事安全通告，从中提取火箭发射区、碎片区和限制区信息，在交互式地图上清晰呈现。

**主要功能**：
- 多源 NOTAM 与 MSI 数据的自动实时爬取与解析
- 交互式地图可视化，支持历史归档匹配与多源比对
- 坐标查询、距离测量、图片导出
- 跨异构通告格式的时间窗口解析与智能去重

### [Rocket Launch Live Control & Visualization System](https://github.com/Joey0609/rocket-mission-control)
<img src="https://img.shields.io/github/stars/Joey0609/rocket-mission-control?style=social" alt="GitHub stars">

- 实时火箭发射监控与指挥界面，支持实时遥测可视化
- 基于 Web 的指挥控制系统，多客户端实时同步
- 集成数据记录与回放功能，便于发射后复盘分析

---

## 🛠️ 技能

- ⚙️ 嵌入式全流程开发与调试
- 🔌 硬件原理图和PCB设计
- 📍 多传感器融合 & 导航定位
- 🤖 人工智能 & 深度学习
- 🖥️ 前后端可视化系统开发

**🌐 编程语言：**

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

**🤖 AI / 机器学习与数据：**

[![ChatGPT](https://img.shields.io/badge/ChatGPT-74AA9C?style=flat&logo=openai&logoColor=white)](https://chatgpt.com/)
[![Claude](https://img.shields.io/badge/Claude-D97706?style=flat&logo=claude&logoColor=white)](https://claude.ai/)
[![DeepSeek](https://img.shields.io/badge/DeepSeek-4F6BED?style=flat&logo=deepseek&logoColor=white)](https://chat.deepseek.com/)
[![Anaconda](https://img.shields.io/badge/Anaconda-44A833?style=flat&logo=anaconda&logoColor=white)](https://www.anaconda.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=opencv&logoColor=white)](https://opencv.org/)
[![MATLAB](https://img.shields.io/badge/MATLAB-0076A8?style=flat&logo=mathworks&logoColor=white)](https://www.mathworks.com/)

**🧩 框架与前端：**

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

**⚙️ 嵌入式与硬件：**

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

**🛠 开发与构建工具：**

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

**🔌 硬件设计与其他：**

[![Altium Designer](https://img.shields.io/badge/Altium%20Designer-A5915F?style=flat&logo=altiumdesigner&logoColor=white)](https://www.altium.com/)
[![嘉立创EDA](https://img.shields.io/badge/嘉立创EDA-0078D4?style=flat)](https://www.lceda.cn/)
[![Vivado](https://img.shields.io/badge/Vivado-F01F30?style=flat&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vivado.html)
[![Vitis](https://img.shields.io/badge/Vitis-F01F30?style=flat&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vitis.html)
[![MultiSim](https://img.shields.io/badge/MultiSim-FFCD00?style=flat&logo=nationalinstruments&logoColor=black)](https://www.ni.com/en-us/shop/electronic-test-instrumentation/application-software-for-electronic-test-and-instrumentation-category/what-is-multisim.html)
[![Wireshark](https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=wireshark&logoColor=white)](https://www.wireshark.org/)
[![Bambu Studio](https://img.shields.io/badge/Bambu%20Studio-00AE42?style=flat&logo=bambulab&logoColor=white)](https://bambulab.com/en/download/studio)
[![Photoshop](https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white)](https://www.adobe.com/products/photoshop.html)

## 📊 Stats
[![GitHub Streak](https://streak-stats.demolab.com/?user=Joey0609&theme=transparent)](https://git.io/streak-stats)