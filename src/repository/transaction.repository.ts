import { randomUUID } from "crypto";
import { Transaction, TransactionInput } from "../models/transacao.model";

import { calculateStats } from "../service/transaction.service";

export const transactionsDB: Transaction[] = [];

export function addTransaction({ value, dateTime }: TransactionInput) {
  transactionsDB.push({
    id: randomUUID(),
    value,
    dateTime,
    createdAt: new Date().toISOString(),
  });
}

export function listTransaction() {
  return transactionsDB;
}

export function removeTransaction() {
  transactionsDB.length = 0;
}

export function statistics() {
  return calculateStats(transactionsDB);
}
