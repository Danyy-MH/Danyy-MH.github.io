export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    "year": "2025",
    "conference": "Latin American Robotics Symposium (LARS)",
    "title": "Experimental Evaluation of a Fixed-Time Convergent Differentiator for a Fully Actuated Hexacopter Feedback Control",
    "authors": "Adán Márquez and Herman Castañeda",
    "paperUrl": "https://ieeexplore.ieee.org/document/11273015"
  }
];
