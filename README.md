# Cypress API - Boilerplate

## Descrição do repositório

Este repositório contém o mímimo essencial para a criação de testes automatizados em API utilizando cypress + node.js + typescript

## Estrutura do repositório

├── .gitattributes
├── .gitignore
├── cypress
│  ├── e2e
│  │  ├── actions
│  │  │  └── example.action.ts
│  │  ├── asserts
│  │  │  └── example.assert.ts
│  │  ├── services
│  │  │  └── example.service.ts
│  │  └── tests
│  │    └── example.cy.ts
│  ├── fixtures
│  └── support
├── cypress.config.ts
├── docs
│  └── automated
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

## Como utilizar o boilerplate

Existe uma arquitetura pré-pronta onde: 

`services` -  responsável por toda comunicação com a API. Aqui ficam funções puras que fazem requisições (GET, POST, PUT, DELETE, etc). Elas não fazem validações, apenas enviam a request e retornam a resposta.

`asserts`  -  contém funções dedicadas somente às validações. Elas recebem a resposta da API e verificam idealmente:

- status code
- schema
- mensagens de erro
- campos obrigatórios
- valores esperados

`actions`  -  camada que orquestra o fluxo do teste. Ela coordena chamadas entre `services` e `asserts`, podendo:

- chamar múltiplos serviços
- preparar dados necessários para as requests
- encadear chamadas
- chamar assert na ordem correta

`tests`    -  São os arquivos *.cy.ts que o Cypress executa. Aqui você mantém somente o cenário de teste, chamando as ações prontas.
Fica assim:
- legível
- simples
- sem repetir lógica
- com responsabilidade clara

```bash
it('deve criar um usuário com sucesso', () => {
  userAction.createUser();
});
```

Todas as pastas dentro de cypress/e2e possuem arquivos exemplares.
Eles servem apenas para ilustrar a arquitetura — não irão rodar, pois não há uma rota de API real configurada.
