export interface Member {
  name: string;
  doc: string;
  doc_status: 'regular' | 'irregular';
  accounts: Account[];
}

interface Account {
  name: string;
  office: string;
  number: string;
}
