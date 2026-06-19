import { ChapterData } from '@/content/types';

export const chapter06: ChapterData = {
  id: '6',
  title: 'Segurança da Informação e Criptografia',
  pages: [
    {
      pageNumber: 13,
      elements: [
        { type: 'chapter-title', number: 6, title: 'Segurança da Informação', subtitle: 'Criptografia Aplicada e Defesa Ativa' },
        { type: 'paragraph', text: 'No mundo hiperconectado atual, a Segurança da Informação não é um recurso suplementar ou um complemento final ao SDLC (Ciclo de Vida do Software), mas um pilar matricial exigido em legislações estritas de conformidade global como o GDPR e a LGPD. Arquiteturas desenvolvidas negligenciando a segurança desde as fundações (Security-by-Design) inevitavelmente expõem as organizações a ramificações penais profundas e crises colossais de relações públicas.' },
        { type: 'paragraph', text: 'Academicamente, o paradigma da segurança da informação repousa estritamente sobre a Tríade fundamental conhecida pela sigla "CIA":' },
        { type: 'list', items: [
          'Confidencialidade (Confidentiality): Medidas operacionais matemáticas para garantir que dados classificados não sejam revelados a entidades não-autorizadas. Implementada primariamente através da criptografia forçada.',
          'Integridade (Integrity): Garantia pericial de que as informações estão fidedignas à sua origem incontaminada. Nenhum byte malicioso ou corrompimento cósmico alterou sub-repticiamente o arquivo. Conquistada pelo algoritmo formal matemático de "Hasing".',
          'Disponibilidade (Availability): Garantir as defesas arquiteturais para o negócio operar nos acordos de SLA contratados sem sofrer ataques orquestrados de negação de serviço (DDoS).'
        ], ordered: false },
        { type: 'section', level: 2, title: 'A Revolução da Criptografia Assimétrica', number: '6.1' },
        { type: 'paragraph', text: 'Até os meados do século XX, exércitos inteiros e governos dependiam brutalmente da Criptografia Simétrica. Neste modelo rudimentar e eficaz, ambos os interlocutores precisam obrigatoriamente possuir um segredo pré-compartilhado central (A Chave Única). O problema de escalabilidade comercial é óbvio: como um internauta transfere com segurança a chave criptográfica pela rede para um e-commerce pela primeira vez, sem que o canal de transferência inicial já seja interceptado e adulterado por terceiros observadores mal-intencionados?' },
        { type: 'paragraph', text: 'A invenção do intercâmbio algorítmico da dupla criptografia Assimétrica de Chaves Públicas e Privadas resolveu de maneira genial um dos problemas matemáticos mais impossíveis e difíceis da história acadêmica humana. Uma mensagem lacrada e trancada publicamente com o cadeado público da entidade receptora só pode ser descriptografada se, e somente se, possuir no seu encalço a chave mestra super secreta mantida eternamente offline pelo banco receptor, graças aos milagres impenetráveis da fatoração de colossais números inteiros primos randômicos (Como na lógica brutal do RSA).' },
        { type: 'table', headers: ['Família do Algoritmo', 'Propósito Estratégico', 'Performance Computacional', 'Exemplos Canônicos Industriais'], rows: [
          ['Criptografia Simétrica', 'Confidencialidade absoluta cifrada massivamente de dados colossais e blocos de discos inteiros.', 'Extremamente Rápida (Hardware otimizado no silício das CPUs modernas).', 'AES-256, ChaCha20'],
          ['Criptografia Assimétrica', 'Troca de Chaves secreta sobre redes puramente inseguras e Assinatura Digital não repudiável.', 'Incrivelmente Lenta e muito pesada para transferir Gigabytes de arquivos brutos.', 'RSA, Curvas Elípticas (ECC)'],
          ['Funções de Hashing', 'Garantir inalterabilidade através da Identidade Digital do documento; armazenamento unidirecional de senhas.', 'Rápida e Destrutiva (Via de mão única sem possibilidade de reverso matemático).', 'SHA-256, SHA-3, Argon2'],
        ], caption: 'Tabela 6.1: Panorama do Arsenal Criptográfico Padrão' }
      ]
    },
    {
      pageNumber: 14,
      elements: [
        { type: 'section', level: 2, title: 'Hashing Moderno e Assinaturas Digitais', number: '6.2' },
        { type: 'paragraph', text: 'Nota de Melhor Prática: O armazenamento em texto puro de credenciais (senhas) de usuários em qualquer matriz de banco de dados corporativo é considerado uma transgressão técnica fatal e uma conduta amadora absurda perante regulações. As senhas devem sempre ser submetidas a uma função matemática de Hash irreversível somada a um prefixo criptográfico randômico único por usuário, mecanismo esse conhecido globalmente como "Salt".' },
        { type: 'paragraph', text: 'O uso coordenado e alinhado do Hashing em conjunto e consórcio total da chave Assimétrica gera o valioso e infalível paradigma estrutural que conhecemos como "Assinatura Digital". Se Ana quiser provar legalmente a Beto sua autoria num contrato sem margens dúbias para repúdio legal nos tribunais, Ana cria o hash unívoco matematicamente perfeito do documento de texto PDF.' },
        { type: 'section', level: 2, title: 'PKI e Infraestrutura Corporativa', number: '6.3' },
        { type: 'paragraph', text: 'No entanto, a validação de identidades requer uma terceira entidade estrutural. O ecossistema de validação chamado Infraestrutura de Chaves Públicas (PKI - Public Key Infrastructure) confere validade matemática legal usando Autoridades Certificadoras Globais auditáveis pelo mercado, os quais os navegadores Web injetam localmente nos repositórios raízes certificados (Certificate Root Store).' },
        { type: 'list', items: [
          'Vulnerabilidades Injeção (Injection Vulnerabilities): Ataques diretos onde pacotes maliciosos viajam sobre interpretadores desprevenidos visando enganar comandos cruciais SQL ou comandos do sistema operacional (Shell Injection). Recomenda-se Queries Preparadas massivamente.',
          'Cross-Site Scripting (XSS): A inserção parasita impura de códigos Javascript arbitrários dentro da renderização limpa do navegador cliente de outras contas.',
          'Broken Authentication: Erros graves na gestão de sessão e tokens JWT sem política de expiração firme implementada no core do software de backend.'
        ], ordered: false },
        { type: 'section', level: 2, title: 'Conscientização dos Dez Maiores Riscos (OWASP Top 10)', number: '6.4' },
        { type: 'paragraph', text: 'O OWASP Top 10 é um tratado agnóstico emitido em consenso mundial pela principal comunidade aberta de profissionais da segurança cibernética global focado unicamente na compilação das categorias primárias mais recorrentes, mais dolorosas e exploradas nas fronteiras das auditorias na Web Moderna Corporativa.' },
        { type: 'table', headers: ['Posição Analítica', 'Classificação Técnica Crítica do Problema'], rows: [
          ['1º Posição', 'Quebras sistêmicas flagrantes no Controle de Acesso e Perfilamento do sistema'],
          ['2º Posição', 'Falhas grotescas globais na Proteção Criptográfica do Dado Parado ou em Trânsito'],
          ['3º Posição', 'Vulnerabilidades primárias de Injeção em Compiladores (SQL, NoSQL, LDAP, ORMs)'],
          ['4º Posição', 'Design arquitetural concebido fundamentalmente defeituoso (Insegurança no Projeto Base)']
        ], caption: 'Tabela 6.2: Panorama Parcial Global do OWASP Top 10' },
        { type: 'section', level: 2, title: 'Resumo das Boas Práticas', number: '6.5' },
        { type: 'paragraph', text: 'Aviso Prático: O desenvolvimento particular individual em "Casa" de algoritmos complexos criptográficos proprietários sem a exaustiva auditoria implacável da comunidade científica criptográfica global (como o projeto NIST) terminará inevitavelmente no esfacelamento completo perante analistas experientes armados de engenharia reversa rigorosa. Jamais reinvente a Criptografia Básica (Princípio de Kerckhoffs: um criptossistema seguro só existe se o algoritmo não for segredo, mas a chave sim).' },
        { type: 'section', level: 2, title: 'Laboratório de Conformidade LGPD', number: '6.6' },
        { type: 'exercise', number: 1, title: 'Simulação Forense de Conformidade', instructions: 'Como Arquiteto(a) responsável recém-nomeado pela conformidade judicial tecnológica da sua firma na Europa, desenhe formalmente as contingências de mitigação no papel do cenário hipotético problemático abaixo:', items: [
          'Sua base de dados contendo registros governamentais altamente reativos de cartões de clientes hospedados globalmente num provedor cloud privado não criptografado fisicamente em repouso (Data at Rest) foi inteiramente interceptada e desviada digitalmente.',
          'Detalhe minuciosamente na dissertação forense os motivos técnicos e algoritmos matemáticos pelo qual a sua corporação evitará legalmente multas pesadas bilionárias caso a sua política exigisse mandatoriamente que todos os cartões já fossem encriptados individualmente em colunas utilizando padrão militar rotacional AES-GCM 256 bits geridos por um Hardware Security Module.'
        ] }
      ]
    }
  ]
};
