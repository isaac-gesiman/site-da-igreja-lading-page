# Site da Igreja Batista Getsêmani - Mossoró

Site oficial (landing page) da **Igreja Batista Getsêmani**, em Mossoró, Rio Grande do Norte. Ele serve como ponto de encontro digital para membros e visitantes, reunindo a história da igreja, os ministérios, os horários dos cultos, o contato e o material de estudo do **Discipulado**.

🌐 **Site online:** https://igreja-batista-getsemani-mossoro-rn.web.app/

---

## 📖 Discipulado: baixe o livro respondido

A página **Discipulado** disponibiliza o **livro de discipulado com as respostas**, para ajudar cada pessoa no estudo.

O livro respondido **não substitui o estudo**. Ele serve para conferir o que você respondeu e tirar dúvidas depois de fazer cada lição por conta própria.

### Como baixar

**Opção 1: pelo site (mais fácil)**

1. Acesse https://igreja-batista-getsemani-mossoro-rn.web.app/
2. No menu, clique em **Discipulado**.
3. Clique no botão **Baixar Livro**.
4. O arquivo `Discipulado Respondido Completo.pdf` será salvo no seu aparelho (computador ou celular).

**Opção 2: pelo repositório no GitHub**

1. Abra a pasta `assets` do repositório.
2. Clique no arquivo `Discipulado Respondido Completo.pdf`.
3. Clique no ícone de download (**Download raw file**).

**Opção 3: clonando o projeto**

```bash
git clone https://github.com/isaac-gesiman/site-da-igreja-lading-page.git
```

O livro estará em `assets/Discipulado Respondido Completo.pdf`.

### Como usar o material no seu estudo

1. Faça cada lição do livro de discipulado primeiro, escrevendo as suas respostas.
2. Depois, abra o PDF respondido e compare com o que você escreveu.
3. Anote as diferenças e leve as dúvidas para o seu discipulador ou para a liderança da igreja.

> 💡 **Dica:** o arquivo é um PDF de cerca de 1,8 MB. No celular, ele abre direto no leitor de PDF; se quiser guardar, salve em "Arquivos" ou no Google Drive.

---

## 🧭 O que o site oferece

| Página | O que você encontra |
| --- | --- |
| **Home** | Boas-vindas, horários dos cultos (em vídeo), evento em destaque, redes sociais e contato |
| **Nossa História** | A história da implantação da igreja, desde a fundação em 2012, a visão e a missão |
| **Ministérios** | Os departamentos da igreja (veja a lista abaixo) |
| **Discipulado** | Download do livro de discipulado respondido |
| **404** | Página de erro para endereços que não existem |

### Ministérios apresentados

- Ministério Infantil
- Embaixadores do Rei
- Mensageiras do Rei
- Ministério dos Jovens
- Mulheres Cristãs em Missão
- Sociedade Missionária de Homens Batistas
- Ministério dos Casais
- Ministério de Louvor - Siloé
- Ministério de Mídia
- Ministério de Dança
- Ministério de Teatro

---

## ⚙️ Como o site funciona

O projeto é uma **landing page estática**, feita só com HTML, CSS e arquivos de mídia (imagens, vídeo e PDF). Não precisa de servidor próprio nem de banco de dados.

- **Navegação:** menu no topo que leva para Home, Nossa História, Ministérios e Discipulado.
- **Estilo:** uma folha de estilos única (`style.css`) mantém o visual igual em todas as páginas.
- **Horários dos cultos:** vídeo em loop, sem som, que roda automaticamente na Home.
- **Download do discipulado:** botão com o atributo `download`, que salva o PDF direto no aparelho.
- **Hospedagem:** Firebase Hosting, que deixa o site rápido e sempre disponível.
- **Busca no Google (SEO):** título e descrição por página, Open Graph, dados estruturados Schema.org, URL canônica, `sitemap-v2.xml`, `robots.txt` e verificação do Google Search Console.

---

## 🗂️ Estrutura do projeto

```
site-da-igreja-lading-page/
├── index.html              # Home
├── Nossa-Historia.html     # História da igreja
├── Ministerios.html        # Ministérios
├── Discipulado.html        # Download do livro respondido
├── 404.html                # Página de erro
├── style.css               # Estilos do site
├── robots.txt              # Regras para buscadores
├── sitemap-v2.xml          # Mapa do site
├── firebase.json           # Configuração do Firebase Hosting
├── .firebaserc             # Projeto do Firebase
└── assets/                 # Imagens, logos, vídeo e o PDF do discipulado
    └── Discipulado Respondido Completo.pdf
```

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- Firebase Hosting
- Schema.org (JSON-LD) e Open Graph para SEO

---

## 📍 Contato

- **E-mail:** getsemani.ibg19@gmail.com
- **Endereço:** R. Toré, 909 - Planalto Treze de Maio, Mossoró - RN, 59631-520
- **Instagram:** [@ib.getsemaniofc](https://www.instagram.com/ib.getsemaniofc)
- **Facebook:** [Igreja Batista Getsêmani](https://www.facebook.com/I.BatistaGetsemani)
- **YouTube:** [Igreja Batista Getsêmani - Mossoró](https://www.youtube.com/@igrejabatistagetsemani-mos2995)

---

## 👨‍💻 Autor

Desenvolvido por **Isaac Rodrigues de Medeiros** ([@isaac-gesiman](https://github.com/isaac-gesiman)).
