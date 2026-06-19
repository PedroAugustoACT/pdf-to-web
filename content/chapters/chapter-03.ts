import { ChapterData } from '@/content/types';

export const chapter03: ChapterData = {
  id: '3',
  title: 'Engenharia de Software e Padrões de Projeto',
  pages: [
    {
      pageNumber: 7,
      elements: [
        { type: 'chapter-title', number: 3, title: 'Engenharia de Software e Padrões de Projeto', subtitle: 'Metodologias de Ciclo de Vida e GoF' },
        { type: 'paragraph', text: 'Construir um software comercial vai substancialmente além do ato isolado da programação e da codificação de algoritmos eficientes. A Engenharia de Software é o subcampo acadêmico que cuida da elicitação de requisitos, da gestão do tempo, da garantia de segurança, da escalabilidade arquitetural e da gerência de equipes multidisciplinares ao longo do desenvolvimento de um produto digital.' },
        { type: 'paragraph', text: 'O processo formal que descreve essa trajetória contínua da ideia inicial à descontinuidade de um produto é globalmente conhecido pelo acrônimo SDLC (Software Development Life Cycle - Ciclo de Vida de Desenvolvimento de Software).' },
        { type: 'section', level: 2, title: 'Fases Críticas do SDLC', number: '3.1' },
        { type: 'list', items: [
          '1. Engenharia e Coleta de Requisitos: A ponte comunicacional entre o corpo técnico e as partes interessadas de negócios. Documentação de casos de uso rigorosos para evitar o temido "Scope Creep".',
          '2. Design e Arquitetura Sistêmica: Modelagem de diagramas UML, esquemas lógicos de banco de dados e escolhas tecnológicas globais, desenhando os contratos de APIs antes da codificação fluir.',
          '3. Codificação/Implementação: A fase onde engenheiros transformam as plantas e protótipos em bases de código legíveis e versionáveis.',
          '4. Testes e Validação: Implementação de baterias pesadas de automação através de Testes Unitários, de Integração e de Aceitação de Usuário (UAT). A etapa de teste é inerentemente construtiva e preventiva.',
          '5. Implantação e Manutenção Contínua (Deploy): O ato cirúrgico de mover o software para o ar. Estatísticas mostram que até 70% dos custos bilionários da indústria de software residem na fase crônica de manutenção e atualização de sistemas.'
        ], ordered: false },
        { type: 'section', level: 2, title: 'Metodologias: Cascata vs. Modelos Ágeis', number: '3.2' },
        { type: 'paragraph', text: 'Ao longo de cinco décadas de engenharia civil importada para a programação, as metodologias tentaram orquestrar com sucesso milhares de engenheiros. O modelo Clássico (Cascata) tentava prever milimetricamente cada tijolo antes do início das obras. A realidade volátil do código demonstrou que essa utopia industrial é ineficiente quando clientes não conseguem mapear de forma cristalina as necessidades futuras dos consumidores.' },
        { type: 'paragraph', text: 'A rebelião epistemológica culminou no Manifesto Ágil de 2001, priorizando iterações curtas (Sprints), entrega incremental contínua e a premissa fundamental de que os requisitos sofrerão mutações ao longo da vida do projeto, cabendo ao ciclo de vida acolher e gerenciar tais flexões.' }
      ]
    },
    {
      pageNumber: 8,
      elements: [
        { type: 'table', headers: ['Dimensão', 'Modelo Cascata (Waterfall)', 'Metodologia Ágil (Scrum/Kanban)'], rows: [
          ['Natureza do Fluxo', 'Sequencial rígido e ininterrupto', 'Iterativo, incremental e cíclico'],
          ['Engajamento do Cliente', 'Intenso na fase 1 e na entrega', 'Feedback orgânico a cada iteração'],
          ['Manejo de Mudanças', 'Péssimo; requer quebra burocrática', 'Excelente; mudança é encorajada no backlog'],
          ['Tamanho do Risco Isolado', 'Colossal se requisitos falharem', 'Mitigado em micro-módulos fracassados'],
          ['Volume de Documentação', 'Exaustivo e altamente formalizado', 'Mínimo Viável ("Software funcional acima de documentos")']
        ], caption: 'Tabela 3.1: Matriz de Análise Metodológica Corporativa' },
        { type: 'section', level: 2, title: 'Padrões de Projeto (Design Patterns - GoF)', number: '3.3' },
        { type: 'paragraph', text: 'À medida que a Engenharia de Software evoluiu e a Orientação a Objetos consolidou sua hegemonia no mercado corporativo, os engenheiros começaram a documentar resoluções de problemas sistêmicos reincidentes. O grupo de quatro autores conhecido como "Gang of Four" catalogou classicamente as estruturas mentais imutáveis aplicáveis sob o conceito de Padrões de Projeto.' },
        { type: 'paragraph', text: 'Tais padrões não são bibliotecas instaláveis ou frameworks fechados; tratam-se de moldes arquitetônicos transferíveis entre diferentes linguagens (como Java, C# ou TypeScript). A adoção dessas regras semânticas impede a temível duplicação de lógica e a proliferação do "Código Espaguete".' },
        { type: 'list', items: [
          'Padrões Criacionais (Singleton, Factory Method, Builder): Focam na abstração orgânica e inteligente do complexo processo de instanciar classes ricas sem o uso sujo e poluidor da cláusula "new" no meio do fluxo lógico.',
          'Padrões Estruturais (Adapter, Decorator, Facade): Atuam de maneira cirúrgica sobre a composição tática de interfaces e grandes módulos de objetos, fazendo com que estruturas desajustadas sejam traduzidas e colaborem em harmonia.',
          'Padrões Comportamentais (Observer, Strategy, State): Especializados de modo sofisticado no encapsulamento algorítmico e na definição elegante de cadeias comunicacionais sobre quem envia avisos, quem deve ser modificado em tempo real e a responsabilidade algorítmica de cada nó da árvore.'
        ], ordered: false },
        { type: 'paragraph', text: 'O abuso precoce dessas abstrações teóricas é conhecido nos corredores de T.I. como o antipadrão da "Super Engenharia", onde programadores inserem complexidade astronômica para problemas simplórios que nunca se escalarão nas proporções justificadas pelas interfaces abstratas.' },
        { type: 'section', level: 2, title: 'Exame de Princípios e Arquitetura', number: '3.4' },
        { type: 'question', number: 1, text: 'No contexto do Padrão "Observer", qual é o principal fluxo comunicacional mitigado por esta abstração comportamental que normalmente causaria dependência pesada de dados no lado de entidades distintas?', questionType: 'open' },
        { type: 'question', number: 2, text: 'Qual destas assertivas viola fundamentalmente a essência tática de Metodologias Ágeis de desenvolvimento?', options: [
          'Priorização do feedback contínuo em substituição à espera até os momentos epílogos do SDLC.',
          'Crença explícita de que a documentação técnica tem valor, embora o software operante transpareça um valor prático esmagadoramente superior no momento de validar métricas comerciais com as partes investidoras.',
          'O estabelecimento inflexível de escopo, preço de horas técnicas e barreiras contratuais bloqueando a refatoração do software antes da aprovação total pelo departamento burocrático inicial.',
          'As entregas contínuas em ciclos operantes variando quinzenalmente no formato conhecido universalmente pelo jargão "Sprints".'
        ], questionType: 'multiple-choice' }
      ]
    }
  ]
};
