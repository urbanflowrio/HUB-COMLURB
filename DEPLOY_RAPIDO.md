# ⚡ DEPLOY RÁPIDO — 3 PASSOS

## 📦 1. PREPARAR

Você baixou o arquivo `HUB_COMLURB_COMPLETO.zip`.

Extraia tudo em uma pasta no seu computador.

---

## 🌐 2. CRIAR REPOSITÓRIO NO GITHUB

### Opção A: Via Interface Web (MAIS FÁCIL)

1. Vá para: https://github.com/urbanflowrio
2. Clique em **"New"** (botão verde) ou **"New repository"**
3. Preencha:
   - **Repository name:** `HUB_COMLURB`
   - **Visibility:** ✅ **Public**
   - ❌ **NÃO** marcar "Add a README file"
   - ❌ **NÃO** marcar ".gitignore"
   - ❌ **NÃO** marcar "Choose a license"
4. Clique em **"Create repository"**
5. Na tela seguinte, clique em **"uploading an existing file"**
6. **ARRASTE TODOS OS ARQUIVOS** da pasta extraída para o GitHub
   - Isso inclui pastas `assets/`, `pessoas/`, `sme/`, etc.
   - E os arquivos `.nojekyll`, `_config.yml`, `index.html`, etc.
7. No campo "Commit changes":
   - Digite: `feat: deploy inicial HUB COMLURB`
8. Clique em **"Commit changes"**

### Opção B: Via Linha de Comando (GIT)

```bash
# Navegue até a pasta extraída
cd caminho/para/HUB_COMLURB

# Inicialize o Git
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "feat: deploy inicial HUB COMLURB"

# Renomeie a branch para 'main'
git branch -M main

# Adicione o remote (substitua 'urbanflowrio' pelo seu usuário)
git remote add origin https://github.com/urbanflowrio/HUB_COMLURB.git

# Envie para o GitHub
git push -u origin main
```

---

## ⚙️ 3. ATIVAR GITHUB PAGES

1. No repositório `HUB_COMLURB` no GitHub:
2. Clique em **Settings** (ícone de engrenagem ⚙️)
3. No menu lateral esquerdo, clique em **Pages**
4. Em **"Source"**, configure:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Clique em **Save**
6. **Aguarde 2-5 minutos** ⏱️

---

## 🎉 4. PRONTO!

Seu site estará disponível em:

### 🔗 https://urbanflowrio.github.io/HUB_COMLURB/

### Painéis:
- https://urbanflowrio.github.io/HUB_COMLURB/pessoas/
- https://urbanflowrio.github.io/HUB_COMLURB/sme/
- https://urbanflowrio.github.io/HUB_COMLURB/sms/
- https://urbanflowrio.github.io/HUB_COMLURB/contratos/
- https://urbanflowrio.github.io/HUB_COMLURB/dte/
- https://urbanflowrio.github.io/HUB_COMLURB/territorial/

---

## ✅ VERIFICAÇÃO

Na aba **Actions** do repositório, você verá:

- 🟡 **Amarelo (building)** → Aguarde, está construindo
- ✅ **Verde (success)** → Deploy completo! Pode acessar a URL
- ❌ **Vermelho (failed)** → Houve erro, clique para ver detalhes

---

## 🐛 SE DER ERRO

### Erro: "404 Not Found"

✅ **Solução:** Verifique se o arquivo `.nojekyll` está na raiz do repositório.

### Erro: CSS não carrega

✅ **Solução:** Verifique se a pasta `assets/` foi enviada corretamente.

### Erro: GitHub Pages não aparece em Settings

✅ **Solução:** O repositório precisa ser **Public**. Vá em Settings → Change repository visibility → Public.

---

## 📞 RESUMO ULTRA-RÁPIDO

1. **Extraia** o ZIP
2. **Crie repositório** `HUB_COMLURB` no GitHub (public)
3. **Arraste arquivos** para o repositório
4. **Settings → Pages** → Branch: `main` → Save
5. **Aguarde 2-5 minutos**
6. **Acesse:** https://urbanflowrio.github.io/HUB_COMLURB/

---

**Tempo total estimado:** 5-10 minutos ⏱️
