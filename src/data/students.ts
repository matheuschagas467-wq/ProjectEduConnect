export type Student = {
  registration: string; // Número de Matrícula
  responsibleCpf: string; // Somente dígitos
  studentName: string;
  birthDate: string; // ISO date
  className: string; // Turma
  responsibleName: string;
  phone: string;
};

export const students: Student[] = [
  {
    registration: "2025A001",
    responsibleCpf: "12345678901",
    studentName: "Ana Clara Mendes",
    birthDate: "2015-04-12",
    className: "5º A",
    responsibleName: "Mariana Mendes",
    phone: "+55 (11) 91234-5678",
  },
  {
    registration: "2025A002",
    responsibleCpf: "98765432100",
    studentName: "Bruno Silva",
    birthDate: "2014-10-03",
    className: "5º A",
    responsibleName: "Carlos Silva",
    phone: "+55 (11) 98888-2222",
  },
  {
    registration: "2025B003",
    responsibleCpf: "11122233344",
    studentName: "Carolina Souza",
    birthDate: "2013-01-25",
    className: "5º B",
    responsibleName: "Fernanda Souza",
    phone: "+55 (11) 97777-1111",
  },
  {
    registration: "2025B004",
    responsibleCpf: "55566677788",
    studentName: "Diego Rocha",
    birthDate: "2012-07-18",
    className: "5º B",
    responsibleName: "Ricardo Rocha",
    phone: "+55 (11) 93456-0000",
  },
  {
    registration: "2025C005",
    responsibleCpf: "22233344455",
    studentName: "Eduarda Lima",
    birthDate: "2011-09-09",
    className: "6º A",
    responsibleName: "Paula Lima",
    phone: "+55 (11) 94567-3333",
  },
  {
    registration: "2025C006",
    responsibleCpf: "33344455566",
    studentName: "Felipe Almeida",
    birthDate: "2011-03-21",
    className: "6º A",
    responsibleName: "Rodrigo Almeida",
    phone: "+55 (11) 92345-6789",
  },
  {
    registration: "2025D007",
    responsibleCpf: "44455566677",
    studentName: "Gabriela Nunes",
    birthDate: "2010-12-11",
    className: "6º B",
    responsibleName: "Sofia Nunes",
    phone: "+55 (11) 90123-4567",
  },
  {
    registration: "2025D008",
    responsibleCpf: "66677788899",
    studentName: "Heitor Campos",
    birthDate: "2010-05-06",
    className: "6º B",
    responsibleName: "Thiago Campos",
    phone: "+55 (11) 90000-1212",
  },
];
