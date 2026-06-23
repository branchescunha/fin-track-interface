# FinTrack Interface

Interface web para gerenciamento financeiro, desenvolvida com React, TypeScript, Vite, Firebase, Tailwind CSS e Recharts.

O projeto permite autenticação com Google, visualização de dashboard financeiro, acompanhamento de receitas e despesas, listagem de transações e cadastro de novas movimentações financeiras.

## Demonstração

A aplicação conta com as seguintes telas principais:

* Página inicial
* Login com Google
* Dashboard financeiro
* Listagem de transações
* Cadastro de nova transação

## Funcionalidades

* Autenticação com Google utilizando Firebase Authentication
* Proteção de rotas privadas
* Integração com API autenticada por token
* Dashboard com saldo, receitas e despesas
* Gráfico de despesas por categoria
* Gráfico de histórico mensal
* Listagem de transações
* Busca de transações
* Cadastro de receitas e despesas
* Seleção dinâmica de categorias por tipo de transação
* Exclusão de transações
* Notificações com React Toastify
* Componentização de interface
* Formatação de moeda e data
* Estilização com Tailwind CSS
* Padronização de código com Biome

## Tecnologias utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* Firebase
* Axios
* Recharts
* React Router
* React Toastify
* Lucide React
* Biome

## Estrutura do projeto

```txt
fin-track-interface/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── GoogleLoginButton.tsx
│   │   ├── Header.tsx
│   │   ├── Input.tsx
│   │   ├── MonthYearSelect.tsx
│   │   ├── Select.tsx
│   │   └── TransactionTypeSelector.tsx
│   ├── config/
│   │   └── firebase.ts
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── layout/
│   │   └── AppLayout.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Transactions.tsx
│   │   └── TransactionsForm.tsx
│   ├── routes/
│   │   ├── index.tsx
│   │   └── PrivateRoutes.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── categoryService.ts
│   │   └── transactionService.ts
│   ├── types/
│   │   ├── auth.ts
│   │   ├── category.ts
│   │   └── transactions.ts
│   ├── utils/
│   │   └── formatter.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── biome.json
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Autor

André Vinícius Branches Cunha
