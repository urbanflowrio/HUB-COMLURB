# IPL · Sistema de Inteligência Operacional

**HUB COMLURB** — Índice Padrão de Limpeza

---

## Sistema Real Baseado em Dados

**ZERO dados simulados. ZERO métricas inventadas.**

Tudo é calculado dinamicamente a partir das planilhas Google Sheets.

---

## Configuração (5 minutos)

### Passo 1: Publicar Planilhas como CSV

Para cada planilha no Google Sheets:

1. **Arquivo** → **Compartilhar** → **Publicar na web**
2. Selecione a aba correta
3. Formato: **CSV**
4. Clique em **Publicar**
5. Copie a URL gerada

Exemplo:
```
https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv
```

### Passo 2: Configurar URLs

Abra `app.js` e localize CONFIG (linha ~11):

```javascript
const CONFIG = {
  avaliacoes: 'COLE_AQUI_URL_AVALIACAO_TRECHOS_CSV',
  notas: 'COLE_AQUI_URL_NOTAS_IPL_CSV',
  pesos: 'COLE_AQUI_URL_PESOS_ITENS_CSV',
  
  metaIPL: 77.0
};
```

Cole as URLs:

```javascript
const CONFIG = {
  avaliacoes: 'https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv',
  notas: 'https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv',
  pesos: 'https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv',
  
  metaIPL: 77.0
};
```

---

## Padrão HUB COMLURB

### Visual

- CSS: `hub-premium.css`
- Sem emojis nos botões/textos
- Paleta: navy + blue + orange
- Estilo executivo premium

### Footer Institucional

```
Gabinete da Presidência
HUB COMLURB • Núcleo de Inteligência e Gestão Estratégica Operacional
```

Renderizado via:

```javascript
HUB.footer.render("footer", {
  customText: `
    <strong>Gabinete da Presidência</strong><br>
    HUB COMLURB • Núcleo de Inteligência e Gestão Estratégica Operacional
  `,
  version: "1.0",
  showTimestamp: false
});
```

### Componentes HUB

- `HUB.header.render()` — header e navegação
- `HUB.data.loadCSV()` — carregamento com cache
- `HUB.cards.render()` — KPIs
- `HUB.charts.*` — gráficos Chart.js
- `HUB.filters.*` — filtros dinâmicos
- `HUB.footer.render()` — footer institucional

---

## 5 Telas

### 1. Inteligência Operacional

**Alertas automáticos REAIS:**
- Superintendências abaixo da meta
- Itens críticos (top NOK)
- Sistema operacional (se tudo OK)

**KPIs:**
- Taxa conformidade geral
- Meta IPL
- Total avaliações
- Trechos avaliados
- Itens conformes
- Não conformidades
- Lixo branco total
- Média lixo branco/trecho

### 2. Executivo

- Filtros dinâmicos (mês, sup, gerência, bairro)
- KPIs filtrados
- Meta x Realizado
- Ranking gerências

### 3. Territorial

- Mapa Leaflet
- Hotspots de NOK
- Top 20 bairros críticos

### 4. Reincidência

- KPIs de reincidência
- Reincidência por item
- Top trechos reincidentes

### 5. Analítico

- Tabela completa
- Exportação CSV
- Ordenação por coluna

---

## Rastreabilidade

Cada número tem origem rastreável:

| Indicador | Cálculo |
|-----------|---------|
| Taxa Conformidade | `(totalOK / (totalOK + totalNOK)) * 100` |
| Total Avaliações | `avaliacoes.length` |
| Trechos Únicos | `Set(codigo + trecho).size` |
| Lixo Branco | `Soma TC1-4 P/G` |
| NOK por Item | `Count onde valor = 'Não'` |

---

## O Que NÃO Tem

❌ Dados simulados/mockados  
❌ Arrays hardcoded  
❌ Métricas inventadas  
❌ ML/IA fictícios  
❌ Previsões sem modelo  
❌ ROI inventado  
❌ Emojis nos botões  
❌ Buzzwords de consultoria  

---

## Atualização

As planilhas são lidas em tempo real.

Para atualizar:
1. Edite a planilha no Google Sheets
2. Salve (automático)
3. Recarregue o dashboard (F5)
4. Dados atualizados

---

## Desenvolvido por

**Gabinete da Presidência**  
HUB COMLURB • Núcleo de Inteligência e Gestão Estratégica Operacional  
Versão 1.0

---

## Licença

© 2026 COMLURB — Todos os direitos reservados
