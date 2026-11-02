export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    "title": "Robotic Welding Cell",
    "description": "Designed a hydraulic clamp system for a robotic welding cell and validated an autonomous welding trajectory. Academic project for ABB, February–March 2022.",
    "technologies": [
      "SolidWorks",
      "ABB RobotStudio"
    ]
  },
  {
    "title": "Linear Actuator",
    "description": "Designed and built a low-cost linear actuator with closed-loop PID and on/off position control. Academic project for John Deere, October–December 2021.",
    "technologies": [
      "SolidWorks",
      "Arduino",
      "STM32"
    ]
  },
  {
    "title": "Rocket Apogee Detection",
    "description": "Proposed an extended Kalman filter to fuse multiple sensors for model-rocket apogee detection as Programming Lead at Monterrey Rocket Lab, August 2022–April 2024.",
    "technologies": [
      "MATLAB",
      "Sensor Fusion"
    ]
  }
];
