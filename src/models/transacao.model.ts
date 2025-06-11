export interface TransactionInput {
  value: number;
  dateTime: string;
}

export interface Transaction {
  id: string;
  value: number;
  dateTime: string;
  createdAt: string;
}

export interface Statistics {
  sum: number;
  avg: number;
  min: number;
  max: number;
  count: number;
}
