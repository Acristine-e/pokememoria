# PokéMemória --- Instruções para Claude Code

## 1. Visão do projeto

**PokéMemória** é um jogo web de nostalgia para adultos millennials que
cresceram assistindo e jogando Pokémon e hoje, entre trabalho, reuniões
e boletos, já não lembram o nome de todos os Pokémon.

**Slogan:** "Você conhece o Pokémon. Só esqueceu o nome dele."

O projeto deve combinar humor, nostalgia e tecnologia, com uma
experiência simples, divertida, responsiva e acessível. O público
principal são pessoas adultas que cresceram com a franquia, não
crianças.

## 2. Conceito e personalidade

A identidade deve transmitir nostalgia dos anos 1990/2000 com acabamento
de produto digital atual.

O mascote será um treinador Pokémon adulto, millennial, com entradas ou
calvície parcial, olheiras e expressão simpática de quem está cansado da
vida corporativa, mas ainda ama Pokémon. Pode aparecer com café, mochila
ou notebook e roupa de treinador.

O humor deve ser leve e identificável, sem ridicularizar pessoas.
Exemplos de tom: - "30 anos, 15 reuniões e não lembro o nome desse
Pokémon." - "A memória RAM já não é mais a mesma." - "CLT de dia, mestre
Pokémon nas horas vagas."

**Importante sobre propriedade intelectual:** não reproduzir Ash ou
outros personagens protegidos como mascote principal. Criar um treinador
original, apenas inspirado no arquétipo de treinador de anime, sem
copiar rosto, roupa, silhueta ou elementos distintivos de personagens
existentes. Usar nomes, imagens e dados de Pokémon somente de forma
compatível com os termos e políticas das fontes utilizadas. Não afirmar
que o projeto é oficial ou afiliado à The Pokémon Company, Nintendo ou
Game Freak.

## 3. Objetivo do produto

Permitir que a pessoa: 1. Veja a imagem de um Pokémon. 2. Tente lembrar
e informar o nome. 3. Receba feedback imediato. 4. Ganhe pontos e
mantenha sequências de acertos. 5. Use dicas quando necessário, com
penalidade na pontuação. 6. Revise os Pokémon que errou e acompanhe
quais esquece com mais frequência.

A experiência básica deve funcionar sem cadastro.

## 4. Funcionalidades planejadas

### MVP --- primeira versão

-   Página inicial com identidade visual e botão para jogar.
-   Primeiro modo jogável com Pokémon da região de Kanto.
-   Exibição da imagem do Pokémon.
-   Campo para digitar a resposta.
-   Validação tolerante a maiúsculas/minúsculas e espaços extras.
-   Feedback de acerto ou erro.
-   Pontuação e sequência de acertos.
-   Botão para próxima pergunta e opção de iniciar nova rodada.
-   Layout responsivo para celular e desktop.
-   Dados de demonstração/local inicialmente, com estrutura preparada
    para integração à PokéAPI.

### Evoluções futuras

-   Modo "Quem é esse Pokémon?" com resposta digitada.
-   Modo de múltipla escolha com quatro alternativas.
-   Modo Nostalgia: primeira geração/Kanto.
-   Modo Desafio: várias gerações e dificuldade progressiva.
-   Dicas: primeira letra, tipo e geração, com desconto de pontos.
-   Histórico local de acertos e erros.
-   Lista dos Pokémon mais esquecidos.
-   Revisão direcionada dos erros.
-   XP, níveis, medalhas, conquistas e ranking.
-   Cadastro opcional e sincronização entre dispositivos.

Não implementar todas as funcionalidades de uma vez. Priorizar o MVP e
validar cada etapa antes de avançar.

## 5. Arquitetura técnica definida

A arquitetura escolhida é híbrida:

### Frontend

-   React
-   TypeScript
-   Vite
-   Tailwind CSS
-   Componentes reutilizáveis e páginas organizadas.

O Lovable pode ser usado para gerar e evoluir a interface. O código deve
permanecer organizado e versionado no GitHub.

### Backend

-   Python
-   FastAPI

O backend será introduzido depois do primeiro protótipo funcional. Ele
deverá concentrar regras de jogo, validação de respostas, pontuação,
dicas e lógica de revisão adaptativa.

### Dados e serviços

-   PokéAPI: fonte de dados de Pokémon, nomes, tipos, gerações e imagens
    disponíveis.
-   Supabase: possibilidade futura para autenticação opcional, histórico
    persistente e ranking global.
-   LocalStorage: progresso local no MVP, sem exigir cadastro.

### Repositório

-   GitHub como repositório principal e portfólio público.
-   Documentação em Markdown.
-   Testes para regras de negócio e componentes importantes.

Não criar um backend paralelo em Node.js. As regras de negócio do jogo
devem ficar em Python/FastAPI quando o backend for implementado.

## 6. Estratégia de desenvolvimento

Seguir esta ordem:

1.  **Planejamento e estrutura:** revisar o repositório existente antes
    de alterar arquivos; identificar o que já foi criado.
2.  **Interface inicial:** construir a landing page e o visual do jogo.
3.  **MVP jogável:** implementar uma rodada funcional com dados de
    demonstração.
4.  **PokéAPI:** integrar dados reais, tratando falhas, limites e
    carregamento.
5.  **Backend Python:** criar FastAPI para regras de jogo e pontuação.
6.  **Memória do jogador:** começar com armazenamento local; avaliar
    Supabase depois.
7.  **Qualidade:** testes, acessibilidade, responsividade, tratamento de
    erros e documentação.
8.  **Publicação:** preparar README, imagens de demonstração e
    instruções de execução.

## 7. Diretrizes de trabalho com a pessoa desenvolvedora

A pessoa responsável pelo projeto está começando a aprender Python e
precisa de orientação didática, prática e gradual.

-   Explicar em português do Brasil.
-   Trabalhar em etapas pequenas, uma de cada vez.
-   Antes de executar mudanças grandes, explicar o que será feito e por
    quê.
-   Informar exatamente quais arquivos serão criados ou alterados.
-   Ao orientar tarefas locais, fornecer comandos completos e indicar
    onde executá-los.
-   Não presumir conhecimento prévio de Python, terminal, Git ou
    configuração de ambiente.
-   Depois de cada etapa, fornecer instruções claras para testar e
    validar.
-   Aguardar a confirmação de que a etapa funcionou antes de avançar
    para a próxima.
-   Se houver erro, investigar e corrigir antes de adicionar novas
    funcionalidades.
-   Não despejar grandes blocos de tarefas sem necessidade.
-   Não reescrever arquivos ou estruturas existentes sem primeiro
    inspecioná-los.

## 8. Padrões de código

-   Preferir código simples, legível, modular e fácil de manter.
-   Usar nomes claros em inglês no código e textos da interface em
    português do Brasil.
-   Separar componentes visuais, lógica do jogo, serviços de API e
    tipos.
-   Tratar estados de carregamento, erro, ausência de dados e respostas
    inválidas.
-   Evitar duplicação de lógica.
-   Adicionar testes para validação de respostas, pontuação, dicas e
    seleção de perguntas.
-   Não adicionar dependências sem necessidade; explicar por que uma
    dependência nova é útil.
-   Não introduzir complexidade antes de ela ser necessária.

## 9. Segurança e publicação

-   Nunca colocar senhas, tokens, chaves privadas ou credenciais no
    código ou no GitHub.
-   Usar variáveis de ambiente quando houver credenciais.
-   Criar e manter `.gitignore` adequado.
-   Não publicar dados pessoais de jogadores.
-   Não tornar cadastro obrigatório para jogar.
-   Verificar os termos de uso das APIs e fontes de imagens.
-   Deixar claro que PokéMemória é um projeto independente, não oficial.

## 10. Direção visual

-   Paleta sugerida: azul-marinho, vermelho, amarelo e branco.
-   Visual inspirado em videogames retrô, mas com acabamento moderno.
-   Tipografia expressiva e legível.
-   Elementos gráficos: Pokébola, Pokédex, pixels, estrelas e
    referências visuais à era Game Boy.
-   Interface divertida, mas não infantil.
-   Priorizar acessibilidade, contraste e boa experiência em telas
    pequenas.
-   O mascote original deve manter aparência consistente entre capa,
    tela inicial, feedbacks e conquistas.

## 11. Critérios de aceite do MVP

O MVP estará pronto quando: - A pessoa conseguir abrir o site sem criar
conta. - Uma pergunta com imagem de Pokémon for exibida. - A pessoa
conseguir enviar uma resposta. - A validação funcionar sem depender de
capitalização ou espaços extras. - O sistema mostrar feedback correto. -
A pontuação e a sequência forem atualizadas corretamente. - A pessoa
conseguir avançar para outra pergunta. - A experiência funcionar em
celular e desktop. - Houver tratamento básico para falhas de
carregamento. - O README explicar como executar o projeto.

## 12. Como começar

Ao iniciar o trabalho:

1.  Inspecione o repositório e identifique a estrutura e tecnologias já
    presentes.
2.  Resuma o estado atual do projeto e aponte o que já existe.
3.  Compare o estado atual com o MVP descrito neste arquivo.
4.  Recomende somente o próximo passo necessário.
5.  Não comece uma reestruturação ampla nem implemente tudo de uma vez.
6.  Peça confirmação antes de iniciar uma etapa que altere
    significativamente a estrutura.

**Primeira tarefa esperada:** avaliar o repositório atual e propor o
próximo passo para construir a primeira versão jogável do PokéMemória.
