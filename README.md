# Acervo Sonoro

O **Acervo Sonoro** é uma página única dedicada à música alternativa. A interface apresenta um catálogo de álbuns e uma seção de bandas em destaque, com foco em uma organização simples, responsiva e inspirada em um acervo musical.

**Etapa atual:** Fase 4 — dados externos com React, TypeScript e CSS.

## Conteúdo da página

| Listagem | Quantidade | Informações exibidas |
| --- | --- | --- |
| Álbuns para descobrir | 10 álbuns | Capa, título, banda, gênero, ano e favorito |
| Bandas em destaque | 3 bandas | Foto, nome e descrição |

A página também possui cabeçalho com navegação, área de destaque, filtros visuais de gênero e rodapé.

## Responsividade

O layout foi desenvolvido com abordagem **mobile first**, usando CSS e media queries:

| Tela | Organização |
| --- | --- |
| Mobile — até 767 px | Menu recolhido, álbuns em uma coluna e bandas abaixo do catálogo |
| Tablet — a partir de 768 px | Navegação visível, álbuns em duas colunas e bandas lado a lado |
| Desktop — a partir de 1024 px | Álbuns em três colunas e bandas em uma barra lateral |

## Wireframes

- [Wireframe mobile](docs/wireframe-mobile.png)
- [Wireframe tablet](docs/wireframe-tablet.png)
- [Wireframe desktop](docs/wireframe-desktop.png)

## Implementação da Fase 2

Nesta fase:

- toda a página foi construída no `src/App.tsx`;
- os cards das duas listagens foram escritos diretamente no JSX;
- foram usados elementos semânticos, como `header`, `main`, `section` e `footer`;
- os estilos estão em `src/App.css`;
- as cores, espaçamentos e tipografia foram organizados com variáveis CSS em `:root`;
- a responsividade utiliza as media queries de `768px` e `1024px`;
- os dados e os controles de favoritos e filtros são representações estáticas.

## Implementação da Fase 3

Nesta fase:

- partes da página foram extraídas para componentes em `src/components/`;
- foram criados os types `Album` e `Band` com as props tipadas;
- o conteúdo das duas listagens virou vetores de objetos em `src/data/acervo.ts` (`ALBUMS` e `BANDS`), renderizados com `map` e `key`;
- a interação com `useState` foi implementada (favoritar álbuns e filtrar por gênero), com mudança visual na interface;
- o `App.tsx` passou a guardar o estado e compor os componentes.

## Implementação da Fase 4

Nesta fase:

- a listagem principal (álbuns) passou a ser carregada de uma fonte externa com `fetch` dentro de `useEffect`;
- o estado dos dados externos está tipado como `useState<Album[]>([])`;
- a interface exibe estado de carregando enquanto os dados não chegam;
- a interface exibe estado de erro com mensagem compreensível e botão para tentar novamente, caso a requisição falhe;
- a listagem secundária (bandas) continua vindo do vetor local em `src/data/acervo.ts`;
- a interação com `useState` da Fase 3 (favoritos e filtro) continua funcionando;
- os estilos continuam em CSS, em `src/App.css`, com estilos para os estados de carregando e de erro, e responsividade com media queries.

## Tecnologias

- React
- TypeScript
- Vite
- CSS

## Como executar

Pré-requisito: Node.js instalado.

```
npm install
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal.

Para gerar a versão de produção:

```
npm run build
```

## Fonte dos dados

- **Listagem principal (álbuns):** arquivo `public/albums.json`, carregado com `fetch('/albums.json')` dentro de `useEffect`. Contém 10 álbuns, cada um com `id`, `title`, `artist`, `genre`, `year` e `cover`.
- **Listagem secundária (bandas):** vetor local `BANDS` em `src/data/acervo.ts`.

> Se a fonte for trocada por um endpoint do Mockaroo, basta trocar a URL do `fetch` em `App.tsx` e atualizar esta seção com o link do endpoint.

## Etapas do desenvolvimento

| Fase | Objetivo | Branch |
| --- | --- | --- |
| 1 — Wireframe | Planejar as versões mobile, tablet e desktop | `fase-1-wireframe` |
| 2 — Página | Construir a interface no `App.tsx` usando JSX e CSS | `fase-2-pagina` |
| 3 — Componentes | Criar componentes, tipos, vetores de dados e interação com estado | `fase-3-componentes` |
| 4 — Dados externos | Carregar a listagem principal com `fetch`, com estados de carregando e de erro | `fase-4-json` |

## Autor

Dhiogo André.
