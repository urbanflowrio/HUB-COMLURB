# 🏢 HUB COMLURB

**Centro de Inteligência Operacional**  
Portal executivo dos painéis operacionais, funcionais, territoriais e contratuais da COMLURB.

![Status](https://img.shields.io/badge/status-ativo-green)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)

---

## 🌐 Acesso

**URL Principal:** https://urbanflowrio.github.io/HUB_COMLURB/

### Painéis Disponíveis

- **DTE** — Diretoria Técnica e de Engenharia  
  https://urbanflowrio.github.io/HUB_COMLURB/dte/

- **Pessoas** — Perfil funcional e territorial  
  https://urbanflowrio.github.io/HUB_COMLURB/pessoas/

- **SME** — Limpeza e higienização escolar  
  https://urbanflowrio.github.io/HUB_COMLURB/sme/

- **SMS** — Monitoramento operacional hospitalar  
  https://urbanflowrio.github.io/HUB_COMLURB/sms/

- **Contratos** — Acompanhamento executivo contratual  
  https://urbanflowrio.github.io/HUB_COMLURB/contratos/

- **Territorial** — Leitura geográfica e territorial  
  https://urbanflowrio.github.io/HUB_COMLURB/territorial/

---

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar repositório no GitHub

1. Vá para https://github.com/urbanflowrio
2. Clique em **New repository**
3. Nome: `HUB_COMLURB`
4. Visibilidade: **Public**
5. ✅ NÃO inicializar com README
6. Clique em **Create repository**

### Passo 2: Fazer upload dos arquivos

**Opção A — Via interface web do GitHub:**

1. No repositório recém-criado, clique em **uploading an existing file**
2. Arraste TODOS os arquivos desta pasta
3. Commit message: `feat: deploy inicial HUB COMLURB`
4. Clique em **Commit changes**

**Opção B — Via linha de comando:**

```bash
cd HUB_COMLURB
git init
git add .
git commit -m "feat: deploy inicial HUB COMLURB"
git branch -M main
git remote add origin https://github.com/urbanflowrio/HUB_COMLURB.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. Vá em **Settings** (⚙️) do repositório
2. Menu lateral: **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**

### Passo 4: Aguardar deploy

- O GitHub vai buildar automaticamente (2-5 minutos)
- Você verá uma mensagem: "Your site is ready to be published at..."
- Quando ficar verde ✅, o site está no ar!

---

## ✅ Checklist de Deploy

- [ ] Repositório criado no GitHub
- [ ] Todos os arquivos enviados (incluindo `.nojekyll`)
- [ ] GitHub Pages ativado em Settings → Pages
- [ ] Branch `main` selecionado
- [ ] Deploy concluído (ícone verde ✅)
- [ ] URL testada: https://urbanflowrio.github.io/HUB_COMLURB/
- [ ] Todos os painéis testados

---

**© 2025 COMLURB — Todos os direitos reservados.**
