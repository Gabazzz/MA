# Instruções para Criação de Landing Pages e Sites (Aprovação Meta / WhatsApp Oficial)

Estas instruções foram criadas com base nos **Termos da Plataforma da Meta**. O seu site/landing page precisará seguir estritamente esses critérios para não sofrer rejeição durante a verificação da empresa (BM) ou aprovação do uso do WhatsApp Oficial.

## 1. Política de Privacidade Obrigatória
A presença de uma de Política de Privacidade é o requisito mais crítico para aprovação. O site deve cumprir as seguintes obrigações:
- **Página Dedicada e Acessível**: Deve haver um link rodapé apontando para a Política de Privacidade. A URL deve estar ativa, publicamente acessível (sem necessidade de login), sem bloqueio geográfico e permitir rastreamento pelos bots da Meta. (Ref: *Seção 4.a*)
- **Transparência de Dados**: O texto da política deve explicar muito claramente:
  1. Quais dados estão sendo coletados do usuário.
  2. Como os dados estão sendo tratados e armazenados.
  3. Quais as finalidades da coleta desses dados. (Ref: *Seção 4.b*)
- **Gestão de Exclusão de Dados**: A política e o site devem explicar claramente como os usuários podem solicitar a exclusão de seus dados. O site deve ter uma maneira "facilmente acessível e claramente assinalada" para o usuário pedir que seus dados sejam alterados ou apagados (ex: formulário de contato, botão no perfil, ou um e-mail específico de privacidade). (Ref: *Seções 3.d.i e 4.b*)

## 2. Termos de Uso e Gestão de Direitos
- **Canal de Denúncias/Remoção**: Seu site ou Termos de Uso deve possuir um processo adequado de "aviso e remoção" (Notice and Takedown) de conteúdo se houver usuários publicando coisas, e cumprir as leis para reclamações de infração de direitos de terceiros. (Ref: *Seção 2.c.iii*)
- **Sem Violação**: O site não pode exibir conteúdos piratas, uso indevido de marcas ou imagens que violem direitos de terceiros.

## 3. Restrições do Formulário e Tratamento de Dados
Caso sua Landing Page colete leads, atente-se ao seguinte:
- **Formulário e Redirecionamento para WhatsApp**: A página DEVE conter um formulário na seção de contatos solicitando, no mínimo, Nome e Mensagem. Ao clicar em enviar, os dados devem ser usados para abrir diretamente o WhatsApp do cliente, montando uma mensagem pré-preenchida com esses dados. **TODO contato e botão de ação da página deve direcionar exclusivamente para o WhatsApp do cliente**.
- **Sem Discriminação**: Os textos e o propósito da ferramenta não podem tratar dados para discriminar pessoas por atributos pessoais (raça, religião, idade, saúde, orientação sexual, etc). (Ref: *Seção 3.a.i*)
- **Sem Testes de Elegibilidade**: É proibido que a página solicite ou processe dados para determinar elegibilidade para moradia, crédito, emprego, seguro, etc. (Ref: *Seção 3.a.ii*)
- **Proibição de Venda de Dados**: O texto nunca deve dar a entender (pelo contrário, deve deixar claro que não faz) que os dados serão vendidos ou licenciados a terceiros não autorizados. (Ref: *Seção 3.a.iv*)

## 4. Requisitos de Segurança e Credenciais
- **Canal de Relato de Vulnerabilidades**: O site obrigatoriamente deve oferecer uma forma facilmente acessível para que pessoas relatem "vulnerabilidades de segurança" na página/app (ex: e-mail `security@seudominio.com.br` visível no rodapé ou na Política). (Ref: *Seção 6.a.ii*)
- **Zero Phishing de Credenciais da Meta**: O site jamais deve conter formulários que solicitem senhas do Facebook, Instagram ou Meta. (Ref: *Seção 6.a.iii*)
- **Uso de Dados Concedidos**: Se algum dado for preenchido via Integração da Meta, os dados não podem ser decriptografados ou feito engenharia reversa das identidades sem autorização. (Ref: *Seção 3.a.vi*)

## 5. Alta Performance, Estética Premium e Responsividade
Além da conformidade legal, as landing pages devem adotar os seguintes padrões obrigatórios de tecnologia e design:
- **Design Premium e Moderno:** Utilize sempre um design system avançado. Evite cores genéricas. Aplique efeitos modernos (Glassmorphism, gradientes, *hover effects* refinados) e micro-animações nas interações e rolagem de página (ex: Intersection Observer API para *reveal on scroll*).
- **Recursos Visuais (Imagens e Banners):** Nunca entregue um site parecendo um esqueleto ou contendo caixas vazias (placeholders simples). O visual deve dar vida ao site com **Banners e Imagens de altíssima qualidade** (gerados por IA ou providenciados pelo cliente). A primeira impressão visual é essencial para a conversão de anúncios Meta.
- **Responsividade Absoluta:** Interfaces devem ser planejadas de modo "mobile-first". Como os cliques virão massivamente de CTAs ou links da Meta, 90% dos usuários estarão usando o celular. Assegure que as tags de `viewport` estejam corretas e o CSS tenha `@media queries` estritas para adaptação impecável.
- **Micro-Performance (Velocidade Extrema):** Quando for desenvolvimento padrão, usar apenas HTML, CSS e JS puros se possível. Em qualquer stack tecnológica (Next.js, Vite, etc.), foque em carregar de forma prioritária e assíncrona:
  1. Prefira usar `link rel="preconnect"` e `link rel="preload"` para fontes e arquivos críticos.
  2. Scripts não determinantes devem utilizar a tag `defer` para não bloquear o parser do HTML e manter a nota máxima no Pagespeed.

## Resumo Funcional (Checklist para o Desenvolvedor/Designer)
- [ ] Formulário de contato coletando Nome e Mensagem, com envio direcionando via API do WhatsApp.
- [ ] Todos os botões de contato do site direcionando para o WhatsApp do cliente.
- [ ] Link visível e funcional para a **Política de Privacidade** (geralmente no rodapé em todas as páginas).
- [ ] O texto da Política de Privacidade detalha exatamente o que se faz com os dados do Formulário.
- [ ] Link, e-mail ou formulário fácil para o lead solicitar exclusão dos dados coletados.
- [ ] Inclusão de um contato claro para reportar vulnerabilidades de segurança do site.
- [ ] Inclusão de um link para os **Termos de Uso** incluindo política contra infração de direitos (DMCA/LGPD).
- [ ] Remoção de qualquer texto ou validação de "Elegibilidade" de benefícios, crédito, emprego ou baseada em traços pessoais sensíveis (discriminação).
- [ ] Otimização para Alta Performance (`preconnect`, scripts com `defer`, 100/100 no Lighthouse).
- [ ] Layout mobile-first responsivo e com visual estético *Premium* Moderno.
- [ ] Integração de imagens/banners de alta qualidade visual gerando vida à interface.
- [ ] (Opcional recomendado) Banner de consentimento de cookies apontando para a Política de Privacidade.
