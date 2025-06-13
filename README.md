# 🏦 Itaú Unibanco - Desafio de Programação

> **Desafio Backend:** Desenvolva uma API REST para processar transações financeiras e calcular estatísticas em tempo real

## 📋 Índice

- [Sobre o Desafio](#-sobre-o-desafio)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Restrições Técnicas](#-restrições-técnicas)
- [Endpoints da API](#-endpoints-da-api)
- [Desafios Extras](#-desafios-extras)
- [Como Executar](#-como-executar)
- [Critérios de Avaliação](#-critérios-de-avaliação)

## 🎯 Sobre o Desafio

Construa uma **API REST** que:

- ✅ Recebe transações financeiras
- 📊 Calcula estatísticas dos últimos 60 segundos
- 🗑️ Permite limpar todas as transações

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express.js** (framework web)
- **JSON** para entrada e saída de dados
- **Armazenamento em memória** (sem banco de dados)

### 📦 Dependências Sugeridas

```json
{
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.0",
    "@types/cors": "^2.8.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "ts-node-dev": "^2.0.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "supertest": "^6.3.0",
    "@types/supertest": "^2.0.0"
  }
}
```

## ⚠️ Restrições Técnicas

### 📂 Repositório

- ✅ **DEVE** estar no GitHub ou GitLab
- ❌ **NÃO DEVE** fazer fork de outros projetos
- 📝 **Mínimo:** 3 commits (1 por endpoint)
- 👤 Todos os commits pelo mesmo usuário

### 🗄️ Armazenamento

- ❌ **SEM** bancos de dados (MongoDB, PostgreSQL, etc.)
- ❌ **SEM** cache (Redis, Memcached, etc.)
- 💾 **APENAS** armazenamento em memória (arrays/objetos)

## 🔗 Endpoints da API

### 1. 📥 Receber Transação

```http
POST /transacao
```

**Entrada:**

```json
{
  "valor": 123.45,
  "dataHora": "2020-08-07T12:34:56.789-03:00"
}
```

**Interface TypeScript:**

```typescript
interface Transacao {
  valor: number;
  dataHora: string; // ISO 8601 format
}
```

**Validações:**

- ✅ Campos obrigatórios: `valor` e `dataHora`
- ✅ Valor ≥ 0 (não pode ser negativo)
- ✅ Data/hora não pode ser no futuro
- ✅ Formato ISO 8601 para data

**Respostas:**

- `201 Created` - Transação aceita
- `422 Unprocessable Entity` - Validação falhou
- `400 Bad Request` - JSON inválido

💡 **Dica:** Use `new Date()` para validar datas ISO 8601

### 2. 🗑️ Limpar Transações

```http
DELETE /transacao
```

**Resposta:**

- `200 OK` - Todas as transações foram apagadas

### 3. 📊 Calcular Estatísticas

```http
GET /estatistica
```

**Saída:**

```json
{
  "count": 10,
  "sum": 1234.56,
  "avg": 123.456,
  "min": 12.34,
  "max": 123.56
}
```

**Interface TypeScript:**

```typescript
interface Estatistica {
  count: number;
  sum: number;
  avg: number;
  min: number;
  max: number;
}
```

**Regras:**

- 📅 Considera apenas transações dos **últimos 60 segundos**
- 🔢 Se não houver transações, todos os valores são **0**

**Campos:**
| Campo | Descrição |
|-------|-----------|
| `count` | Quantidade de transações |
| `sum` | Soma total dos valores |
| `avg` | Média dos valores |
| `min` | Menor valor |
| `max` | Maior valor |

## 🌟 Desafios Extras (Opcionais)

### 🧪 Qualidade de Código

- **Testes Automatizados** (Jest + Supertest)
- **Logs** informativos (Winston)
- **Validação de Schema** (Joi ou Zod)
- **ESLint + Prettier** para formatação

### 🚀 DevOps & Infraestrutura

- **Containerização** (Docker + Dockerfile)
- **Health Check** endpoint (`GET /health`)
- **Análise de Performance** (console.time)
- **Rate Limiting** (express-rate-limit)

### 📚 Documentação

- **Documentação da API** (Swagger com swagger-ui-express)
- **README** completo com instruções
- **Configurações** via variáveis de ambiente

## 🚀 Como Executar

### 📋 Pré-requisitos

- Node.js 18+
- NPM ou Yarn

### 🔧 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Execute em produção
npm run build
npm start

# Execute os testes
npm test
```

### 📁 Estrutura Sugerida

```
src/
├── controllers/
│   ├── transacao.controller.ts
│   └── estatistica.controller.ts
├── models/
│   └── transacao.model.ts
├── services/
│   └── transacao.service.ts
├── middlewares/
│   └── validation.middleware.ts
├── routes/
│   └── index.ts
├── utils/
│   └── date.utils.ts
└── app.ts
```

### ⚙️ Scripts Sugeridos (package.json)

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/app.ts",
    "build": "tsc",
    "start": "node dist/app.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts"
  }
}
```

## 🎯 Critérios de Avaliação

- 🎨 **Qualidade do código TypeScript**
- 📖 **Legibilidade e organização**
- 🧪 **Cobertura de testes**
- 🔐 **Preocupação com segurança**
- 📋 **Seguimento das especificações**
- 🚀 **Uso de boas práticas Node.js**

---

## ⚡ Pontos Importantes

- 🎯 Endpoints devem seguir **exatamente** as especificações
- 📝 JSON deve ter **exatamente** os campos descritos
- ⏰ Use `Date` object para manipular datas ISO 8601
- 🔄 Estatísticas em **tempo real** (últimos 60s)
- 🛡️ Use middleware para validação e tratamento de erros

### 💡 Dicas Node.js/TypeScript

```typescript
// Validar data ISO 8601
const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

// Filtrar transações dos últimos 60 segundos
const getRecentTransactions = (transacoes: Transacao[]): Transacao[] => {
  const now = new Date();
  const sixtySecondsAgo = new Date(now.getTime() - 60 * 1000);

  return transacoes.filter((t) => new Date(t.dataHora) >= sixtySecondsAgo);
};
```

---
