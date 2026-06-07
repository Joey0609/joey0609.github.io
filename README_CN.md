<h1 align="center">Hi 👋，我是 Joey0609</h1>
<p align="center">嵌入式系统与多传感器融合开发者 | 软硬件全栈工程师</p>

<p align="left"> 
  <img src="https://komarev.com/ghpvc/?username=Joey0609&label=Profile%20views&color=0e75b6&style=flat" alt="Joey0609" /> 
  <img src="https://img.shields.io/github/followers/Joey0609?style=flat&color=0e75b6" alt="followers" />
</p>

<a href="README.md">English</a> | 中文

- 🔭 我正在做 **基于深度学习的多场景 PDR——将惯性导航与深度学习相结合，让行人在各种场景下都能获得稳健的定位**

- 🌱 我在学 **深度学习与大语言模型**

- 👯 希望合作 **嵌入式系统、传感器融合与定位方向的科研项目，也正在寻找研究生深造机会**

- 📫 联系方式 **muzz2023@mails.jlu.edu.cn**

- ⚡ **写代码是我最自在的状态——当脑海里的想法终于跑通的那一刻，没有什么比这更让人心满意足了**

- 📝 我的博客 **[https://joey0609.github.io](https://joey0609.github.io)**

<h3 align="left">联系我：</h3>
<p align="left">
<a href="https://github.com/Joey0609" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="Joey0609" height="30" width="40" /></a>
</p>

---

## 🔬 科研经历

### 1. 基于 UWB 与 INS 融合的无基站协同定位系统
*2025.05 – 2026.04* | **角色**：团队负责人

主导多节点协同定位系统的全栈研发，涵盖硬件原理图与 PCB 设计、嵌入式固件开发、上位机与 Web 界面实现、算法设计及系统联调。

**技术亮点**：
- 开发实时 **ZUPT（零速更新）** 算法抑制 INS 漂移，提升长期稳定性
- 提出基于 **MDS** 的无锚点自动对齐算法，消除模糊性
- 实现基于 **UKF** 的 UWB/INS 紧耦合融合，大幅降低定位误差
- 搭建完整原型，实现 **厘米级多节点连续定位**

**技术栈**：ESP32-C6, STM32, BMI088, ADXL355, FreeRTOS, UWB/IMU 融合, Electron, MATLAB

### 2. 轨迹驱动的动态自主可穿戴定位系统
*2025.06 – 2025.11* | **项目**：吉林大学创新创业实践项目 | **角色**：联合负责人

研究可穿戴定位技术，聚焦轨迹驱动的动态自主定位，参与系统架构设计与算法研发。

### 3. 基于深度学习的多场景 PDR（行人航位推算）
*2026.01 – 至今* | **角色**：项目负责人

主导基于深度学习增强的行人航位推算系统的整体设计与研发，涵盖硬件适配、算法研究、模型部署及多场景下的系统验证。

---

## 🚀 精选项目

### [NOTAM 网页查看器](https://github.com/Joey0609/notams)
*2025.08 – 2026.04* | <img src="https://img.shields.io/github/stars/Joey0609/notams?style=social" alt="GitHub stars"> | <img src="https://img.shields.io/badge/dynamic/json?color=blue&amp;label=Visits&amp;query=value&amp;url=https://joey0609.github.io/notams/visits.json" alt="Website Visits"> | [![Website](https://img.shields.io/badge/website-online-brightgreen)](https://joey0609.github.io/notams/)

解析 NOTAM（航行通告）与海事安全通告，从中提取火箭发射区、碎片区和限制区信息，在交互式地图上清晰呈现。

**主要功能**：
- 多源 NOTAM 与 MSI 数据的自动实时爬取与解析
- 交互式地图可视化，支持历史归档匹配与多源比对
- 坐标查询、距离测量、图片导出
- 跨异构通告格式的时间窗口解析与智能去重
- 基于 Leaflet 构建，以静态 Web 应用部署

### [火箭发射实时控制与可视化系统](https://github.com/Joey0609/rocket-mission-control)
*2026.04* | <img src="https://img.shields.io/github/stars/Joey0609/rocket-mission-control?style=social" alt="GitHub stars"> | [![Website](https://img.shields.io/badge/website-online-brightgreen)](https://joey0609.github.io/rocket-mission-control/)

- 实时火箭发射监控与指挥界面，支持实时遥测可视化
- 基于 Web 的指挥控制系统，多客户端实时同步
- 集成数据记录与回放功能，便于发射后复盘分析

---

## 🛠️ 技能
### 软件与工具

| 类别 | 工具 |
|----------|-------|
| **嵌入式开发** | Keil μVision5, STM32CubeMX, Vitis, Vivado, CCS, Arduino |
| **硬件设计** | JLC-EDA, Altium Designer, MultiSim |
| **编程 IDE** | Visual Studio, VS Code, CLion, PyCharm, WebStorm |
| **开发与构建工具** | Node.js, CMake, Git, Docker |
| **其他工具** | MATLAB, SOLIDWORKS, Wireshark, Photoshop, Android Studio |

### 核心技术能力

1. **嵌入式系统**：STM32 / ESP32 全周期开发与调试，RTOS（FreeRTOS），外设驱动开发（I2C/SPI/UART）
2. **硬件设计**：原理图绘制，多层 PCB 布局，电源系统设计，信号完整性分析
3. **多传感器融合**：惯性导航，UWB/INS 紧耦合融合，UKF，ZUPT，MDS 位姿重建
4. **框架**：OpenCV, ESP-IDF, WPF, ROS2, LVGL, FreeRTOS, Electron, Flutter
5. **编程语言**：精通 **C/C++** / **Python** / **MATLAB**；熟悉 **TypeScript**、**C#**、**Java**；具备独立全栈开发能力

**🌐 编程语言：**
[![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)](https://en.cppreference.com/w/c) 
[![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white)](https://isocpp.org/) [![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/) 
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white)](https://dart.dev/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.java.com/) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/javascript) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/) [![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)](https://www.php.net/) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/html) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/css)

**🤖 AI / 机器学习与数据：**
[![ChatGPT](https://img.shields.io/badge/ChatGPT-74AA9C?style=flat-square&logo=openai&logoColor=white)](https://chatgpt.com/)
[![Claude](https://img.shields.io/badge/Claude-D97706?style=flat-square&logo=claude&logoColor=white)](https://claude.ai/)
[![DeepSeek](https://img.shields.io/badge/DeepSeek-4F6BED?style=flat-square&logo=deepseek&logoColor=white)](https://chat.deepseek.com/)
[![Anaconda](https://img.shields.io/badge/Anaconda-44A833?style=flat-square&logo=anaconda&logoColor=white)](https://www.anaconda.com/) [![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/) [![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)](https://opencv.org/) [![MATLAB](https://img.shields.io/badge/MATLAB-0076A8?style=flat-square&logo=mathworks&logoColor=white)](https://www.mathworks.com/)

**🧩 框架与前端：**
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D)](https://vuejs.org/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)](https://flutter.dev/)
[![WPF](https://img.shields.io/badge/WPF-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/)
[![ROS2](https://img.shields.io/badge/ROS2-22314E?style=flat-square&logo=ros&logoColor=white)](https://docs.ros.org/en/humble/)
[![LVGL](https://img.shields.io/badge/LVGL-20B2AA?style=flat-square&logo=lvgl&logoColor=white)](https://lvgl.io/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![CanvasJS](https://img.shields.io/badge/CanvasJS-00ACC1?style=flat-square&logo=javascript&logoColor=white)](https://canvasjs.com/)

**⚙️ 嵌入式与硬件：**
[![STM32](https://img.shields.io/badge/STM32-03234B?style=flat-square&logo=stmicroelectronics&logoColor=white)](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html)
[![STM32CubeMX](https://img.shields.io/badge/STM32CubeMX-03234B?style=flat-square&logo=stmicroelectronics&logoColor=white)](https://www.st.com/en/development-tools/stm32cubemx.html)
[![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white)](https://www.espressif.com/en/products/socs/esp32)
[![Arduino](https://img.shields.io/badge/Arduino-00979D?style=flat-square&logo=arduino&logoColor=white)](https://www.arduino.cc/)

[![Raspberry Pi](https://img.shields.io/badge/Raspberry%20Pi-A22846?style=flat-square&logo=raspberrypi&logoColor=white)](https://www.raspberrypi.com/)
[![Vivado](https://img.shields.io/badge/Vivado-F01F30?style=flat-square&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vivado.html)
[![Vitis](https://img.shields.io/badge/Vitis-F01F30?style=flat-square&logo=amd&logoColor=white)](https://www.xilinx.com/products/design-tools/vitis.html)
[![Keil μVision](https://img.shields.io/badge/Keil%20μVision-394049?style=flat-square&logo=arm&logoColor=white)](https://www2.keil.com/mdk5/uvision/)
[![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)](https://www.linux.org/)
[![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84?style=flat-square&logo=androidstudio&logoColor=white)](https://developer.android.com/studio)

**🛠 开发与构建工具：**
[![Git](https://img.shields.io/badge/Git-E34F26?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)
[![CMake](https://img.shields.io/badge/CMake-064F8C?style=flat-square&logo=cmake&logoColor=white)](https://cmake.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)
[![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat-square&logo=visualstudio&logoColor=white)](https://visualstudio.microsoft.com/)
[![CLion](https://img.shields.io/badge/CLion-000000?style=flat-square&logo=clion&logoColor=white)](https://www.jetbrains.com/clion/)
[![PyCharm](https://img.shields.io/badge/PyCharm-000000?style=flat-square&logo=pycharm&logoColor=white)](https://www.jetbrains.com/pycharm/)
[![WebStorm](https://img.shields.io/badge/WebStorm-000000?style=flat-square&logo=webstorm&logoColor=white)](https://www.jetbrains.com/webstorm/)
[![SOLIDWORKS](https://img.shields.io/badge/SOLIDWORKS-FF0000?style=flat-square&logo=dassaultsystemes&logoColor=white)](https://www.solidworks.com/)

**🔌 硬件设计与其他：**
[![Altium Designer](https://img.shields.io/badge/Altium%20Designer-A5915F?style=flat-square&logo=altiumdesigner&logoColor=white)](https://www.altium.com/)
[![嘉立创EDA](https://img.shields.io/badge/嘉立创EDA-0078D4?style=flat-square)](https://www.lceda.cn/)
[![KiCad](https://img.shields.io/badge/KiCad-314CB0?style=flat-square&logo=kicad&logoColor=white)](https://www.kicad.org/)
[![MultiSim](https://img.shields.io/badge/MultiSim-FFCD00?style=flat-square&logo=nationalinstruments&logoColor=black)](https://www.ni.com/en-us/shop/electronic-test-instrumentation/application-software-for-electronic-test-and-instrumentation-category/what-is-multisim.html)
[![Wireshark](https://img.shields.io/badge/Wireshark-1679A7?style=flat-square&logo=wireshark&logoColor=white)](https://www.wireshark.org/)
[![Bambu Studio](https://img.shields.io/badge/Bambu%20Studio-00AE42?style=flat-square&logo=bambulab&logoColor=white)](https://bambulab.com/en/download/studio)
[![Photoshop](https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white)](https://www.adobe.com/products/photoshop.html)
