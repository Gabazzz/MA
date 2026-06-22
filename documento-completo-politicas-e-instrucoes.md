# Guia Completo e Políticas para Aprovação de BM na Meta

Este documento consolida os **Termos da Plataforma da Meta** essenciais com as **instruções de implementação correspondentes** para a criação de landing pages e sites. O objetivo é garantir a aprovação de Business Manager (BM) e liberação do WhatsApp Oficial sem bloqueios ou rejeições por violação de políticas.

---

## SUMÁRIO DE AÇÕES E INSTRUÇÕES OBRIGATÓRIAS (CHECKLIST)

Antes de revisar os termos originais, certifique-se de que sua Landing Page ou Site possua os seguintes itens implementados estruturalmente e juridicamente:

1. **Política de Privacidade (URL Pública e Ativa):**
   - **Instrução:** Crie uma página dedicada (ex: `seudominio.com/privacidade`) contendo a Política de Privacidade. Coloque o link no rodapé de todas as páginas do site.
   - **Instrução:** Explique o que é coletado (nome, telefone, etc), como é tratado, e o propósito.
   - **Instrução:** Forneça uma forma fácil (botão, e-mail de DPO, formulário) para o usuário solicitar a exclusão de seus dados.
2. **Termos de Uso e Gestão de Direitos:**
   - **Instrução:** Crie uma página de Termos de Uso. Nela, deve haver um canal de denúncias para remoção de conteúdo (Aviso DMCA/Violação de Direitos).
   - **Instrução:** Garanta que não há uso de imagens/textos que violem direitos de terceiros.
3. **Restrições de Formulários (Limites de Uso de Dados):**
   - **Instrução:** Nunca solicite nem use dados para fins de discriminação, vigilância ou para determinar a elegibilidade a habitação, crédito, emprego, seguro, etc.
   - **Instrução:** Nunca venda dados coletados ou licencie-os sem autorização.
4. **Segurança e Relato de Vulnerabilidades:**
   - **Instrução:** Disponibilize no site (seja no rodapé ou na política) um meio "facilmente acessível" para pessoas relatarem vulnerabilidades de segurança (ex: `security@seudominio.com`).
   - **Instrução:** O site nunca deve simular o login da Meta para roubar senhas (Phishing).
5. **Estética, Responsividade e Performance Máxima:**
   - **Instrução:** É obrigatório aplicar conceitos de design moderno e visual premium. Use animações responsivas, *glassmorphism* se adequado e tipografia de excelência.
   - **Instrução:** O design deve ter "vida", ou seja, preencha os espaços e fundos (Hero section, áreas de destaque) usando imagens/banners atrativos de alta qualidade (fotografias geradas ou reais). Nunca deixe apenas blocos de cor vazios com texto simples se puder ser evitado.
   - **Instrução:** Atente-se à responsividade Mobile (prioridade absoluta).
   - **Instrução:** A performance deve ser máxima (arquiteturas enxutas, imagens otimizadas, scripts diferidos `defer` e uso de pré-conexões `preconnect`). Caso seja um site de página única (landing page), priorizar tecnologias puras para melhor PageSpeed. Caso seja um Web App complexo, usar React/Next.js/Vite e garantir renderização otimizada.

---

## TERMOS DA PLATAFORMA DA META (COM INSTRUÇÕES INTEGRADAS)

Abaixo estão os resumos das seções do documento original da Meta com a aplicação prática para o desenvolvimento do seu site:

### 1. Introdução e Direitos de Proteção Intelectual
Você recebe uma licença restrita para usar as Integrações (APIs, SDKs, Ferramentas).
- **Direitos de Terceiros e DMCA**: Você não pode hospedar ou apresentar conteúdo que infrinja direitos. Você também deve ter um aviso para *takedown* (Aviso e Remoção) na sua plataforma.
  > **Instrução para o Site:** Adicione uma seção de "Aviso de Direitos Autorais" e um e-mail de contato para denúncias nos Termos de Uso.

### 2. Uso de Dados (Práticas Proibidas)
- **Discriminação e Elegibilidade**: É proibido tratar dados para discriminar pessoas, nem para decidir quem é "elegível" para coisas importantes (moradia, seguros, emprego, status imigratório, crédito).
  > **Instrução para o Site:** Os textos do seu site e o backend nunca devem julgar, aprovar ou segmentar ofertas com base nesses atributos se as ferramentas da Meta estiverem integradas.
- **Vigilância**: Proibido oferecer serviços de vigilância de pessoas.
- **Venda ou Quebra de Criptografia**: Proibido vender dados e tentar "desanonimizar" as informações oferecidas pela Meta via API.
- **Exclusão de Dados**: Assim que não for mais necessário, ou quando o usuário solicitar, os dados captados devem ser excluídos.
  > **Instrução para o Site:** Tenha claro na sua ferramenta e na política o tempo de retenção. Crie o formulário/e-mail de "Solicitação de Exclusão de Conta/Dados".

### 3. Política de Privacidade
(Seção 4 dos Termos da Meta)
- Você deve fornecer e manter uma Política de Privacidade disponível por um URL ativo e não bloqueado geograficamente.
- A política deve explicar de modo claro quais dados você trata, a maneira como você os trata e a forma como os Usuários podem pedir a exclusão.
  > **Instrução para o Site:** Esta é a regra de ouro para a aprovação do BM. O bot/validador da Meta vai procurar a URL inserida no Painel e verificar se o site está online, se possui a Política declarada, com as formas de exclusão (data deletion) claras no texto.

### 4. Provedores de Serviço
Se você usar terceiros para armazenar/processar esses dados (AWS, Vercel, HostGator, CRMs, etc.), eles também devem cumprir os termos e não usar os dados para finalidades próprias.

### 5. Segurança dos Dados
(Seção 6 dos Termos da Meta)
- Você deve ter proteções administrativas, técnicas e físicas que cumpram os padrões do setor.
- **Relatório de Vulnerabilidades**: (Seção 6.a.ii) "Você deve disponibilizar uma forma facilmente acessível para que as pessoas relatem vulnerabilidades de segurança em seu App e tratar as deficiências identificadas imediatamente."
  > **Instrução para o Site:** O rodapé da home page ou do portal deve ter um link "Relatar Vulnerabilidade" ou a Política deve indicar ostensivamente um contato como *security@*.
- **Senhas da Meta**: É expressamente proibido solicitar/coletar a credencial (senha) do usuário para acessar os produtos da Meta (Facebook/Instagram). As integrações devem usar o login oficial (OAuth).

### 6. Direitos de Análise e Monitoramento
A Meta possui o direito de fazer análise no seu App/Site (App Review) e auditorias regulares (tanto físicas quanto remotas). O site deve refletir exatamente a mesma experiência que foi submetida e aprovada.

### Conclusão e Transferências de Dados (LGPD/GDPR)
Todos os processos no site devem observar as políticas de transferência e processamento global, incluindo adequação em países do EEE ou Brasil (LGPD), assegurando transparência. Qualquer violação pode causar o bloqueio dos serviços do BM da Meta instantaneamente.
