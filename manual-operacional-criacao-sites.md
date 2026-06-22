# Manual Operacional e Fluxo Detalhado para Criação e Publicação de Sites

Este documento serve como um **Guia de Execução (SOP)** completo. Ele esmiuça as 5 etapas da jornada de criação de sites, desde a captação dos dados originais do cliente até a viabilização e apontamento de domínio visando obter aprovações no Gerenciador de Negócios (BM) da Meta e na API Oficial do WhatsApp.

---

## Etapa 1: Onboarding e Coleta Estratégica de Dados

O primeiro contato determina o sucesso de todo o compliance exigido pelas plataformas de tráfego. Nesta base, nenhuma informação pode estar faltando ou incorreta.

**1.1. O que coletar (Checklist Obrigatório)**
* **Nome da empresa:** Razão social completa e/ou nome fantasia que será exibido publicamente.
* **CNPJ:** Essencial para constar no rodapé e validar a veracidade legal perante a Meta.
* **Endereço Completo (Rua, Número e Complemento):** Necessário nas Políticas de Privacidade e Termos de Uso.
* **Bairro:** Complemento de localização espacial.
* **CEP:** Fundamental para cadastros de formulários de compliance de serviços de hospedagem e Meta.
* **Cidade/Estado:** Determina a legislação local aplicável.
* **E-mail:** E-mail de suporte e atendimento (precisa constar nos Termos).
* **WhatsApp / Telefone de contato:** Canal de triagem oficial.
* **Segmento da empresa:** Define o filtro e a linguagem a ser utilizada no copy da página.
* **Informações adicionais sobre produto/serviço:** O que a empresa vende? Como funciona o atendimento? Quais os diferenciais?

**1.2. Como agir:**
* Realize essa coleta através de uma conversa com o cliente ou através do envio de formulário padrão. 
* Valide se os dados fornecidos pelo cliente correspondem à realidade.

---

## Etapa 2: Desenvolvimento do Site via Inteligência Artificial (Antigravity) e Compliance Meta

O site precisa ser mais do que apenas "bonito"; ele dever ser "aprovável". Utilizamos nossa IA (Antigravity) para construir um código base sólido, amarrado com as regras da Meta.

**2.1. Ingestão Obrigatória de Conhecimento**
* **Ação Ativa do Prompter/IA:** A IA DEVE, obrigatoriamente, ser instruída a ler em sua totalidade os 3 documentos-gatilho de políticas antes de gerar qualquer linha de código:
  1. `documento-completo-politicas-e-instrucoes.md`
  2. `instrucoes-landing-pages-meta.md`
  3. `politicas-meta.md`

**2.2. Consolidação e Geração (Engenharia do Site)**
* A IA fará o "match" entre as exigências (documentos do ponto 2.1) e as variáveis do cliente (dados da Etapa 1).
* **Estrutura de Saída Esperada:**
  A IA deve entregar um ecossistema pronto, geralmente compreendendo:
  * `index.html` (com semântica perfeita, rápido e responsivo).
  * `styles.css` (estilização avançada, premium e focada em conversão).
  * `script.js` (comportamento, animações simples, rastreamento de links se houver).
  * `termos.html` (Termos de Uso legalmente formatados com dados da Etapa 1).
  * `privacidade.html` (Políticas de Privacidade formatadas com dados da Etapa 1).

**2.3. Checklist pós-geração**
* Verificar se o *Disclaimer* do Facebook consta no final da página inicial.
* Verificar se os links de Privacidade e Termos estão fluindo sem erros (Erro 404).

---

## Etapa 3: Versionamento de Código (Repositório)

Não se edita ou envia código via arquivos avulsos. Tudo precisa de histórico e controle.

**3.1. Preparando o Ambiente Local**
* Navegar no terminal até a pasta do projeto (ex: `landing-page-[nomedocliente]`).
* Rodar o comando `git init` para criar um repositório local vazio.
* Adicionar os arquivos `*html`, `*css` e `*js`.

**3.2. Versionando**
* Executar `git add .` para colocar os arquivos na "staging area".
* Executar `git commit -m "feat: site inicial completo [nome-do-cliente] e politicas"` para tirar o retrato do estado inicial.

**3.3. Subindo para a Nuvem (Cloud Repo)**
* Criar um repositório remoto (recomendado uso de conta GitHub corporativa, ex: "jetsales"). 
* Executar `git remote add origin https://github.com/URL_DO_REPO.git`.
* Executar `git push -u origin main` (ou master) para enviar os arquivos da sua máquina para a nuvem.

---

## Etapa 4: Publicação em Homologação (Deploy e Análise)

O site já deve estar publicável, porém sem uso de domínio principal e reservado apenas para aprovação do cliente e auditoria final.

**4.1. Conexão Vercel -> GitHub**
* Fazer login no painel da Vercel.
* Clicar em "Add New Project" e selecionar o repositório do cliente recentemente enviado (Etapa 3.3).
* Ignorar configurações de Framework (já que é HTML bruto Vanilla, sem React/Next.js) e clicar em `Deploy`.

**4.2. Geração de Link de Homologação**
* Aguardar (cerca de 20 a 40 segundos). A Vercel vai gerar um subdomínio padrão. Exemplo: `black-rock-imports.vercel.app`.

**4.3. Fluxo de Validação**
* Pegar esta URL de homologação.
* Enviar ao cliente com a seguinte mensagem-chave:
  > *"Olá. Criamos a estrutura do seu site e injetamos toda a parte legal (Políticas e Termos) para garantir sua aprovação. Segue o link temporário para que você possa avaliar textos, design e disposição de informações. Se algo precisar de ajuste ou estiver aprovado, me informe!"*

---

## Etapa 5: Setup de Domínio Oficial e "Go-Live" (Vai pro Ar)

Depois que o cliente enviar o "Ok, aprovado" em cima do link `.vercel.app`, é hora de transformar no link comercial definitivo.

**5.1. Aquisição ou Resgate do Domínio**
* Descobrir onde o domínio do cliente está hospedado (Registro.br, Hostinger, HostGator, Cloudflare, etc).

**5.2. Apontamento de DNS (Zona de DNS)**
* Acessar o painel gerenciador de DNS do cliente.
* Alterar ou adicionar os seguintes apontamentos para a Vercel:
  * **Tipo A:** Apontar `@` ou `root` para o IP da Vercel obtido no próprio painel.
  * **Tipo CNAME:** Apontar `www` para `cname.vercel-dns.com.`.

  Ou utilizar os DNS da Vercel: `dns1.vercel-dns.com` e `dns2.vercel-dns.com`.

**5.3. Inserção na Vercel e Emissão de SSL**
* Ir no projeto Vercel -> "Settings" -> "Domains".
* Adicionar o nome do domínio (ex: `empresadocliente.com.br`).
* A Vercel irá buscar as configurações de DNS. Assim que reconhecer o IP da etapa 5.2, ela emitirá automaticamente o certificado **SSL (HTTPS)**.

**5.4 Entrega Final**
* Testar `https://www.empresadocliente.com.br` tanto no Desktop quanto no Celular (4G).
* Informar ao cliente que o projeto está 100% no ar e apto a iniciar o processo no Gerenciador de Negócios (BM) da Meta!
