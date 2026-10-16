# Acervo Sonoro

Acervo Sonoro é uma proposta de página única dedicada à música alternativa, com um catálogo de álbuns e uma seção de bandas em destaque. A seleção inclui artistas como Soundgarden, Queens of the Stone Age, Deftones e Julie. O projeto faz parte do Trabalho de Conclusão da Disciplina e será desenvolvido com React, TypeScript e Tailwind CSS.

**Etapa atual:** Fase 1 — planejamento da interface e criação dos wireframes.

## Conteúdo da página

| Listagem | Quantidade | Informações por item |
| --- | --- | --- |
| Catálogo de álbuns | 10 álbuns | Capa, nome do álbum, banda, ano de lançamento e gênero |
| Bandas em destaque | 3 artistas | Foto, nome e descrição curta |

A página terá cabeçalho, área de destaque, catálogo de álbuns, bandas em destaque e rodapé.

## Layout responsivo

O planejamento segue a abordagem mobile first.

| Tela | Organização |
| --- | --- |
| Mobile — até 767 px | Menu hambúrguer, álbuns em uma coluna e bandas abaixo do catálogo |
| Tablet — de 768 a 1023 px (`md:`) | Links de navegação visíveis, álbuns em duas colunas e bandas lado a lado |
| Desktop — a partir de 1024 px (`lg:`) | Álbuns em três colunas à esquerda e bandas em uma barra lateral à direita |

## Wireframes

- [Mobile](docs/wireframe-mobile.png)
- [Tablet](docs/wireframe-tablet.png)
- [Desktop](docs/wireframe-desktop.png)

As imagens usam caixas cinzas e espaços reservados para capas e fotos.

## Interações planejadas

- Favoritar e desfavoritar álbuns, alterando o coração e o contador de favoritos.
- Filtrar os álbuns por gênero musical.
- Abrir e fechar o menu no celular.

Os controles são apenas representações visuais nesta fase. A interação com estado será implementada na Fase 3 com `useState`.

## Tecnologias previstas

React, TypeScript, Tailwind CSS e Vite.

## Etapas do desenvolvimento

| Fase | Objetivo | Branch |
| --- | --- | --- |
| 1 — Wireframe | Planejar as versões mobile, tablet e desktop | `fase-1-wireframe` |
| 2 — Página | Construir a interface no `App.tsx`, com os itens escritos diretamente no JSX | `fase-2-pagina` |
| 3 — Componentes | Criar componentes, tipos, vetores de dados e interação com estado | `fase-3-componentes` |
| 4 — JSON | Carregar os álbuns com `fetch` em `useEffect`, incluindo estados de carregamento e erro | `fase-4-json` |

Na Fase 4, os álbuns virão de um JSON externo à aplicação, e as bandas em destaque permanecerão em um vetor local. As instruções de execução e a fonte dos dados serão adicionadas ao README nas próximas etapas.

## Autor

Dhiogo André.
