export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    "date": "July 2025 – Present",
    "title": "Model-Based Controls Engineer",
    "company": "Daikin",
    "description": "Develop control-system validation workflows with Simulink Test and Model-in-the-Loop and Software-in-the-Loop simulations. Implemented an Azure DevOps pipeline to deliver MATLAB/Simulink generated code to software teams."
  },
  {
    "date": "March – July 2025",
    "title": "Software Intern",
    "company": "VisionariesHub",
    "description": "Integrated custom payment methods into a production Wix website using JavaScript."
  },
  {
    "date": "August 2023 – June 2025",
    "title": "Researcher",
    "company": "Tecnológico de Monterrey",
    "description": "Developed a quaternion extended state observer for attitude tracking and state estimation. Implemented nonlinear observer-based controllers in Simulink/Simscape, validated them with Model-in-the-Loop and Software-in-the-Loop simulations, and established a deployment framework for flight computers using Embedded Coder."
  },
  {
    "date": "February – June 2023",
    "title": "Research Intern",
    "company": "Tecnológico de Monterrey",
    "description": "Implemented an adaptive nonlinear control scheme for a hexacopter under external bounded perturbations using model-based design and Simulink/Simscape simulations."
  },
  {
    "date": "August – December 2022",
    "title": "Research Intern",
    "company": "Tecnológico de Monterrey",
    "description": "Designed and built an aerial gripper in SolidWorks to lift 200 g rectangular boxes. Developed a robust nonlinear PD controller for a hexacopter in Simulink and ROS/Gazebo."
  }
];
