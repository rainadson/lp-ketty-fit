# FIT em 30 — Landing Page

Landing page de vendas (sales page) desenvolvida para a personal trainer **Ketty Sato**, promovendo o aplicativo de treinos **FIT em 30**. Projeto 100% estático, focado em conversão, com copywriting orientado a dor/objeção, prova social, tabela de planos e integrações de rastreamento de tráfego pago.

## Sobre o projeto

Página única (one-page) construída com **HTML, CSS e JavaScript puros**, sem frameworks ou bundlers — pensada para carregar rápido e ser hospedada em qualquer serviço estático.

O funil segue a estrutura clássica de páginas de venda de infoproduto:

- Hero com headline e CTA principal
- Marquee animado
- VSL (Video Sales Letter) embutido via player de terceiros
- Comparativo de custo (academia/nutricionista vs. o produto)
- Timeline vertical animada por scroll
- Bônus e prova social (carrossel de depoimentos)
- Cards de dor/objeção
- Tabela de planos (mensal, trimestral, anual)
- Garantia de 7 dias
- FAQ em acordeão

## Stack

- **HTML5** semântico
- **CSS3** puro, com mais de 150 media queries para responsividade mobile-first
- **JavaScript vanilla** (scroll listeners, acordeão de FAQ, ativação de timeline)
- **[Swiper.js](https://swiperjs.com/)** para carrosséis (via CDN)
- Fontes customizadas: Clash Display, Tusker Grotesk e Host Grotesk

### Integrações

- **Meta Pixel** — rastreamento de conversão para anúncios no Facebook/Instagram
- **UTMify** — atribuição de campanhas via UTM
- **ConverteAI SmartPlayer** — player de VSL com analytics de retenção
- Checkout externo integrado via links de assinatura por plano

## Destaques técnicos

Durante a manutenção do projeto, alguns problemas de performance e integridade de assets foram identificados e corrigidos:

- **Redução de ~87% no peso do `index.html`** (de ~900 KB para ~111 KB), extraindo um ícone SVG que estava duplicado 6 vezes como Base64 inline e movendo-o para um arquivo de imagem cacheável.
- **Correção de encoding de nomes de arquivo**: assets com nomes acentuados corrompidos (mojibake, comum em extração de ZIP no Windows) foram renomeados para casar exatamente com as referências no HTML, corrigindo ícones que apareciam quebrados.

## Estrutura do projeto

```
├── index.html          # marcação principal da landing page
├── styles.css          # estilos e media queries
├── script.js           # scroll reveal e CTA de scroll suave
├── swiper-init.js       # inicialização dos carrosséis e acordeão do FAQ
├── assets/              # fontes customizadas (.otf/.ttf)
└── images/              # imagens, ícones e SVGs
```

## Como rodar localmente

Por ser um projeto estático, basta servir a pasta com qualquer servidor HTTP simples:

```bash
python -m http.server 5501
```

Ou usando a extensão **Live Server** do VS Code (configuração já incluída em `.vscode/settings.json`).

Depois é só acessar `http://localhost:5501`.

## Autor

Desenvolvido por [Rainadson Claudinho](https://github.com/rainadson).
