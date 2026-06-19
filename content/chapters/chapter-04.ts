import { ChapterData } from '@/content/types';

export const chapter04: ChapterData = {
  id: '4',
  title: 'Arquitetura de Sistemas e Bancos de Dados',
  pages: [
    {
      pageNumber: 9,
      elements: [
        { type: 'chapter-title', number: 4, title: 'Arquitetura de Sistemas e Bancos de Dados', subtitle: 'Normalização e o Paradigma ACID vs BASE' },
        { type: 'paragraph', text: 'O elemento mais crítico na camada de infraestrutura de longo prazo de um produto digital contemporâneo consiste em sua base persistente de dados. Embora as aplicações possuam memória transitória e lógicas orgânicas, o repositório de metadados central constitui efetivamente o "estado real" contábil da corporação.' },
        { type: 'paragraph', text: 'Os Modelos Relacionais (RDBMS) dominaram a paisagem por décadas valendo-se das leis rigorosas do Modelo Entidade-Relacionamento instituído pelo visionário Edgar Codd. Nesses cenários altamente regulados, as tabelas matriciais garantem garantias absolutas em detrimento orgânico da flexibilidade dos documentos.' },
        { type: 'section', level: 2, title: 'Transações e o Teorema ACID', number: '4.1' },
        { type: 'paragraph', text: 'A transação é uma unidade indivisível de processamento em um sistema gerenciador banco de dados. Uma mera transferência monetária envolve debito na conta A e crédito na B. Se uma instabilidade física desligar o servidor exato entre esses dois fatos, uma integridade estrutural severa é ferida.' },
        { type: 'list', items: [
          'Atomicidade (Atomicity): Princípio do "Tudo ou Nada". Ou a operação conclui inteiramente com injeção absoluta nos bits ou sofre o drástico retrocesso universal ("Rollback").',
          'Consistência (Consistency): Nenhuma violação estrutural de chaves estrangeiras ou limitações semânticas é permitida. As balanças dos registros fecham no mesmo plano da realidade que estavam inicialmente.',
          'Isolamento (Isolation): Múltiplos fios concorrentes manipulando a tabela ao vivo, porém a visão em memória é blindada. Uma concorrência na transação "Beta" não tem permissão de visualizar modificações efetuadas incompletamente pela transação "Gama".',
          'Durabilidade (Durability): As flutuações garantidas no disco rígido, em estado magnético ou sólido, tornam-se à prova de quebras catastróficas elétricas.'
        ], ordered: true },
        { type: 'section', level: 2, title: 'Anomalias Relacionais e a Batalha NoSQL', number: '4.2' },
        { type: 'paragraph', text: 'Com as arquiteturas das Big Techs exigindo velocidade caótica impulsionada pela horizontalidade do paradigma Cloud, a sacralidade relacional sofreu pressões. Nasceu a doutrina global Non-Relational (NoSQL), orientada inteiramente para a dispersão geográfica, particionamentos massivos sobre grafos, colunas puras e modelos abertos em JSON, aceitando-se filosoficamente o princípio transacional brando.' },
        { type: 'table', headers: ['Características', 'Bancos Relacionais (SQL)', 'Bancos Distribuídos (NoSQL)'], rows: [
          ['Esquema de Representação', 'Estritamente pré-estabelecido', 'Dinâmico, orgânico (Documentos flexíveis)'],
          ['Técnica de Escalabilidade', 'Geralmente Vertical (CPUs Massivos)', 'Profundamente Horizontal (Sharding de nós baratos)'],
          ['Filosofia Transacional', 'Propriedades rígidas e restritivas ACID', 'Teorema Teórico BASE e consistência gradual'],
          ['Casos Ideais de Mercado', 'Folhas orçamentárias, ERPs complexos, Contabilidade', 'Big Data analítico, Lojas e Redes Sociais distribuídas']
        ], caption: 'Tabela 4.1: Paralelo corporativo da escolha arquitetônica de armazém de dados.' }
      ]
    },
    {
      pageNumber: 10,
      elements: [
        { type: 'section', level: 2, title: 'Normalização Prática em Ambientes Críticos', number: '4.3' },
        { type: 'paragraph', text: 'A anomalia de atualização afeta um banco cujo design é desorganizado, acarretando replicação dos fatos primários em infinitos nós redundantes. Para extirpar essa deficiência sistêmica as Formas Normais matemáticas são meticulosamente aplicadas durante a modelagem de entidades.' },
        { type: 'list', items: [
          '1FN (Primeira Forma Normal): Erradicação universal das tabelas contendo múltiplos atributos de repetição em arrays escondidos. As colunas armazenam valores absolutamente atômicos.',
          '2FN (Segunda Forma Normal): Abolição imediata das redundâncias funcionais indiretas e dependências sistêmicas causadas pela composição de Chaves Primárias Compostas. Tudo gira inteiramente na órbita das restrições principais.',
          '3FN (Terceira Forma Normal): Banimento categórico e lógico dos campos calculados derivados de tabelas transitivas ou dependentes e parasitários de colunas laterais da mesma matriz funcional.'
        ], ordered: false },
        { type: 'section', level: 2, title: 'Auditoria Acadêmica Final do Documento', number: '4.4' },
        { type: 'exercise', number: 1, title: 'Construção Cênica Relacional e Big Data', instructions: 'Elabore graficamente e textualmente uma solução robusta arquitetural baseada nas premissas rigorosas de integridade aprendidas no subcapítulo das formas normais e teoremas.', items: [
          'Mapeie e denuncie todas as anomalias diretas presentes num schema de banco modelado pelo estado pré 1FN, ressaltando os fenômenos bizarros de mutação ao excluir informações singulares vitais associadas de tabelas.',
          'Argumente minuciosamente em uma análise textual os pormenores acadêmicos sobre a necessidade imperiosa da adoção do conceito BASE ao invés de ACID num cluster horizontal operando tráfego de métricas globais analíticas providas de micro-sensores de Internet das Coisas (IoT).'
        ] },
        { type: 'paragraph', text: 'Este guia educacional cobre os principais pontos teóricos abordados. O estudo da tecnologia nunca finaliza; baseia-se profundamente na assimilação teórica orgânica acoplada ao pragmatismo brutal da matemática digital. Fim do documento enciclopédico de referência.' }
      ]
    }
  ]
};
