export interface Lead {
  id: number;
  name: string;
  topic: string;
  status: string;
  createdOn: string;
}

export interface Activity {
  id: string;
  title: string;
  company: string;
  amount: string;
  daysToClose: number;
}

export interface LeadCardI {
  name: string;
  role: string;
  company: string;
  description: string;
  tag1: string;
  tag2: string;
  openDetails?: () => void;
  whyPicked?: string[];
  about?: string;
  potentialValue?: string;
  intent?: string;
}
