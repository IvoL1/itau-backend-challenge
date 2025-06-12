import { randomUUID } from "crypto";
import { Transaction, TransactionInput } from "../models/transacao.model";

const transactionsDB: Transaction[] = [];

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
