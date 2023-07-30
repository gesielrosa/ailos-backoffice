# AILOS Backoffice

[DEMO](https://ailos-backoffice.netlify.app/)

## Requisitos

- Angular CLI >= 16
- Node >= 18
- NPM >= 9

## Pacotes de terceiros utilizados

- Bootstrap 5
- ngx-mask 16

## Iniciar um servidor local

Abra um terminal na raiz do projeto e execute o comando:

```bash
npm run start
```

> A aplicação ficará disponível no endereço `http://localhost:4200/`

## Compilar para distribuição

Abra um terminal na raiz do projeto e execute o comando:

```bash
npm run build
```

> Os arquivos da aplicação ficarão disponíveis na pasta `dist/ailos-backoffice`

## Instruções para testar as funcionalidades descritas no desafio

Página demo: https://ailos-backoffice.netlify.app/

Pode-se utilizar os seguintes CPFs para fazer os devidos testes:

- 30907589030
- 07130736089
- 47682789069

> São todos dados fictícios

## Observações gerais

- Os ícones utilizados na aplicação foram retirados do Google Fonts, pois o Figma disponibilizado para o desafio não permite exportar assets;
- Alguns dos componentes não foram criados com todas as funcionalidades previstas no Alpaca Design System pois não faziam sentido para o desafio (ex.: Menu lateral abrir, stepper com navegação funcional e etc);
- Não foi utilizado nenhuma API externa para consulta dos dados do desafio, apenas foi implementado um Interceptor para simular a consulta em uma API;
- Não foi dado muita atenção para a compatibilidade do layout com dispositivos móveis (responsividade);

## Autor

Gesiel Rosa - me@gesiel.com
