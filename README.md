# Desafio desenvolvedor full-stack 3wings (Front end)

Uma aplicação web para gerenciamento de postagens da empresas 3wings, onde cliente e funcionários podem ver as novidades e comunicados importantes

### Tecnologias Utilizadas

Exemplo:

- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Docker](https://www.docker.com/)

## Dependências e Versões Necessárias

- Node - Versão: 18.19.0 ou superior
- Docker - Versão: 24.0.7

### Como rodar o projeto

**OBS:** Crie um arquivo na raiz do projeto chaado `.env` e copie de tudo dentro do arquivo `.env.example` mudando para a rota de sua api, para rodar é preciso estar com a [api](https://github.com/MatheusVict/3wings-full-stack-challenge) rodando

_Usando npm_

```shell
npm install
```

depois rode

```shell
npm run dev
```

> _Usando yarn_

```shell
yarn install
```

depois rode

```shell
yarn dev
```

> _Usando docker-compose_

```
docker compose up -d
```

> Depois disso seu projeto estará rodando em [localhost:5173](http://localhost:5173).

> se quiser rodar em modo de produção você dever rodar o comando **npm run build** e depois **npm run preview** e abrir e em [localhost:4173](http://localhost:4173).

## Problemas enfrentados

### Problema 1:

Problemas ao rodar o docker

- Como solucionar: Se você está usando windows verifique se o docker possui todas as permissões necessárias na sua máquina.
