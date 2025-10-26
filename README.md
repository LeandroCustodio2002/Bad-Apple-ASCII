# Bad Apple ASCII — Guia de Artigo Científico

Este README serve como esqueleto para desenvolver um artigo científico robusto inspirado no projeto **Bad Apple ASCII** (renderização de vídeo em caracteres ASCII com p5.js). Os tópicos estão organizados para facilitar a redação e adaptação ao formato do Medium, preservando rigor acadêmico e clareza narrativa.

## 1. Resumo
- **Função:** apresentar objetivo, metodologia sintética e principais achados em até 200 palavras.
- **Pontos para abordar:**
  - Conversão de vídeo `badApple.mp4` em arte ASCII colorida em tempo real.
  - Uso de `p5.js`, `createVideo`, `createGraphics` e manipulação de `pixels`.
  - Contribuição: pipeline acessível para computação criativa / preservação de obras digitais.

## 2. Introdução
### 2.1 Contexto e motivação
- Cultura de remixes (Bad Apple!!) e demoscene.
- Razões para explorar ASCII art como meio expressivo e educacional.
- Gap: escassez de pipelines documentados que detalham aspectos técnicos e artísticos.

### 2.2 Objetivos específicos
- Formalizar o processo de conversão frame-a-frame.
- Discutir desafios de performance no navegador.
- Avaliar qualidade visual e fidelidade temporal.

## 3. Referencial Teórico
### 3.1 Arte ASCII e computação criativa
- Principais autores/projetos históricos (AARON, demoscene, ANSI art).
- Conceitos de resolução perceptual, dithering e mapeamento tonal.

### 3.2 Processamento de vídeo em navegadores
- Streaming vs. pré-processamento.
- Funcionalidades do `p5.js` relevantes (`createVideo`, `pixelDensity`).
- Alternativas (WebGL shaders, WebAssembly) para comparar.

## 4. Metodologia
### 4.1 Arquitetura da solução
- Diagrama sugerido: fluxo `video → offscreen buffer → matriz ASCII → DOM`.
- Componentes chaves (`script.js`, `style.css`, `index.html`).

### 4.2 Pré-processamento e parâmetros
- Definição de `asciiW`, cálculo dinâmico de `asciiH` via `aspect ratio`.
- Justificativa para `offscreen.pixelDensity(1)` (consistência em diferentes DPRs).
- Paleta de caracteres `Ñ@#W$…` e critérios de ordenação por luminância.

### 4.3 Algoritmo de conversão
1. Captura frame atual no `createGraphics`.
2. Iteração por pixel RGB, cálculo de brilho médio.
3. `map()` para índice de caractere e aplicação de `span` colorido.
4. Renderização no contêiner com fontes monoespaçadas.

### 4.4 Ambiente experimental
- Hardware/software de teste (navegadores, SO, resolução).
- Métricas a coletar: FPS, uso de CPU, latência de entrada.

## 5. Resultados e Análise
### 5.1 Avaliação qualitativa
- Screenshots (já há `image.png`) e GIFs; criticar legibilidade em diferentes zooms.
- Observações sobre sincronização áudio-vídeo.

### 5.2 Avaliação quantitativa
- Tabela com FPS médio vs. largura ASCII.
- Comparação entre diferentes navegadores ou densidades de pixels.
- Possível medição de tempo de conversão por frame.

### 5.3 Estudos de usabilidade
- Feedback de usuários sobre nostalgia / estética.
- Potencial pedagógico para aulas de gráficos computadorizados.

## 6. Discussão
- Limitações: dependência de `badApple.mp4`, custo O(n²) no loop de pixels, gargalos na manipulação do DOM.
- Estratégias para mitigar (Web Workers, Canvas 2D direto, shader pipeline).
- Reflexão sobre preservação de obras e licença de uso.

## 7. Conclusões e Trabalhos Futuros
- Resumo das contribuições práticas/teóricas.
- Roadmap futuro: suporte a upload de vídeos, interface responsiva, exportação para ANSI art estático.
- Chamado para colaboração aberta e replicabilidade.

## 8. Referências
- Guia para citar artigos sobre ASCII art, documentação `p5.js`, posts de Medium relacionados.
- Estrutura sugerida (ABNT ou APA) com placeholders prontos para substituição.

## 9. Apêndices
### 9.1 Trechos de código comentados
- Destaque de funções `calcAsciiSize`, `ensureOffscreen`, `draw` com comentários analíticos.

### 9.2 Scripts de apoio
- Ideias: script em Node para converter vídeos offline; planilha de métricas.

---

## Ideias de escrita para o Medium
- Comece com narrativa pessoal (descoberta de Bad Apple!!) para conectar com leitores.
- Use blocos de código curtos, GIFs e embeds de vídeo hospedados no GitHub Pages.
- Intercale seções técnicas com insights culturais/históricos para manter ritmo.
- Finalize com CTA para o repositório e convide leitores a remixarem o projeto.
- Considere publicar versões em PT/EN para ampliar alcance internacional.

## Checklist de Publicação
- [ ] Revisar ortografia e padronizar termos técnicos (ASCII, FPS, p5.js).
- [ ] Incluir links funcionais para demo e repositório.
- [ ] Comprimir imagens/GIFs para melhor carregamento no Medium.
- [ ] Validar acessibilidade (descrições alternativas de imagens, contraste).

Com essa estrutura você pode preencher cada seção progressivamente, garantindo profundidade acadêmica sem perder o tom convidativo esperado no Medium.
