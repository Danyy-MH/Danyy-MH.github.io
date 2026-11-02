export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    "year": "2023–2025",
    "institution": "Tecnológico de Monterrey, Monterrey Campus",
    "degree": "M.Sc. in Engineering · GPA: 96/100",
    "thesisUrl": "https://repositorio.tec.mx/items/161f1758-25c1-4285-87b0-02b166ef6862",
    "thesis": "Robust Observer-based Controllers for a Tilted-Motors Hexacopter under External Perturbations"
  },
  {
    "year": "2019–2023",
    "institution": "Tecnológico de Monterrey, Monterrey Campus",
    "degree": "B.S. in Mechatronics Engineering · GPA: 96/100"
  }
];
