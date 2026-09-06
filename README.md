# Express Blog SQL

API Express per un blog collegata a un database MySQL: i post vengono letti/scritti via `mysql2` (con schema `blog-schema.sql` incluso), con join per i tag e middleware di errore.

## Tecnologie

- Node.js
- Express 5
- MySQL (`mysql2`)
- SQL

## Avvio

```bash
npm install
npm run dev
```

Il server usa `--env-file=.env`: serve un file `.env` con le credenziali del database (vedi `.env.example`).

Server su `http://localhost:3000`.
