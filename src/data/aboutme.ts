export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  "name": "Adán Daniel Márquez Hernández",
  "title": "Model-Based Controls Engineer",
  "institution": "Daikin",
  "description": "I am a mechatronics engineer with an M.Sc. in Engineering from Tecnológico de Monterrey. I develop and validate control systems using MATLAB and Simulink, with experience in model-based design, Model-in-the-Loop and Software-in-the-Loop testing, automatic code generation, and Azure DevOps pipelines. My research has focused on nonlinear control, state estimation, and multirotor systems. You can read my <a href='https://ieeexplore.ieee.org/document/11273015'>article on IEEE Xplore</a>.",
  "email": "adandaniel200@gmail.com",
  "githubUsername": "Danyy-MH",
  "cvUrl": "/cv.pdf"
};
