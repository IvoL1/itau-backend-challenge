import { Statistics, Transaction } from "../models/transacao.model";

export function calculateStats(transactions: Transaction[]): Statistics {
  const since = new Date(Date.now() - 60000);
  const filtered = transactions.filter((t) => new Date(t.dateTime) >= since);

  const count = filtered.length;
  const sum = filtered.reduce((acc, t) => acc + t.value, 0);
  const avg = count ? sum / count : 0;
  const max = count ? Math.max(...filtered.map((t) => t.value)) : 0;
  const min = count ? Math.min(...filtered.map((t) => t.value)) : 0;

  return { count, sum, avg, max, min };
}

// export function calculateStats(transactions: Transaction[]): Statistics {
//   const now = Date.now();
//   const since = now - 60000; // 60 segundos atrás em milissegundos
//   const filtered = transactions.filter((t) => new Date(t.dateTime).getTime() >= since);

//   console.log("Filtered transactions:", filtered);

//   const count = filtered.length;
//   const sum = filtered.reduce((acc, t) => acc + t.value, 0);
//   const avg = count ? sum / count : 0;
//   const max = count ? Math.max(...filtered.map((t) => t.value)) : 0;
//   const min = count ? Math.min(...filtered.map((t) => t.value)) : 0;

//   return { count, sum, avg, max, min };
// }
