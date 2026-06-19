import { ChapterData } from '@/content/types';

export const chapter01: ChapterData = {
  id: '1',
  title: 'Fundamentos da Ciência da Computação',
  pages: [
    {
      pageNumber: 1,
      elements: [
        { type: 'chapter-title', number: 1, title: 'Fundamentos da Ciência da Computação', subtitle: 'Lógica Algorítmica e História da Computação' },
        { type: 'paragraph', text: 'A Ciência da Computação é a disciplina acadêmica que estuda as técnicas, metodologias e instrumentos computacionais para a automação de processos e o tratamento da informação. Ao contrário da crença popular, a ciência da computação não se restringe apenas ao estudo dos computadores enquanto máquinas físicas, mas sim ao estudo dos algoritmos e das estruturas matemáticas que tornam a computação possível.' },
        { type: 'paragraph', text: 'Historicamente, a formalização do que hoje chamamos de algoritmo precedeu a invenção dos computadores eletrônicos modernos. Matemáticos como Ada Lovelace e Alan Turing estabeleceram as bases teóricas que demonstraram como instruções lógicas encadeadas poderiam resolver problemas matemáticos complexos de forma determinística.' },
        { type: 'section', level: 2, title: 'O Conceito de Algoritmo', number: '1.1' },
        { type: 'paragraph', text: 'Um algoritmo pode ser rigorosamente definido como uma sequência finita, não ambígua e executável de instruções lógicas que visam resolver um problema específico ou realizar uma computação em um tempo finito. A clareza e a determinação são cruciais: a cada passo do algoritmo, a próxima instrução a ser executada deve ser absolutamente clara, sem margem para interpretações subjetivas.' },
        { type: 'paragraph', text: 'Na prática educacional, costuma-se fazer uma analogia entre algoritmos e receitas culinárias. Embora útil, essa metáfora falha ao não capturar o rigor matemático exigido pela máquina. Um computador não possui "senso comum" para inferir quantidades implícitas ou adaptar passos que deram errado. Ele obedece cegamente à sintaxe e à semântica das instruções fornecidas.' },
        { type: 'section', level: 3, title: 'Propriedades Essenciais dos Algoritmos', number: '1.1.1' },
        { type: 'list', items: [
          'Finitude: Todo algoritmo deve chegar ao fim após a execução de um número finito de passos.',
          'Definição (Não-ambiguidade): Cada passo do algoritmo deve ser definido com precisão. As ações a serem executadas devem ser rigorosamente especificadas para cada caso possível.',
          'Entradas (Inputs): Um algoritmo tem zero ou mais entradas. Tratam-se de quantidades que lhe são fornecidas antes de seu início ou dinamicamente à medida que é executado.',
          'Saídas (Outputs): Um algoritmo tem uma ou mais saídas. Tratam-se de quantidades que têm uma relação específica com as entradas.',
          'Efetividade: Espera-se que um algoritmo seja efetivo, ou seja, que todas as operações a serem realizadas sejam suficientemente básicas para poderem ser feitas de forma exata e num tempo finito por um ser humano usando papel e lápis.'
        ], ordered: true },
        { type: 'section', level: 2, title: 'Lógica Booleana e Portas Lógicas', number: '1.2' },
        { type: 'paragraph', text: 'A base física e lógica da computação digital repousa sobre a Álgebra Booleana, desenvolvida pelo matemático George Boole no século XIX. Trata-se de um ramo da álgebra em que os valores das variáveis são limitados aos valores lógicos Verdadeiro (1) e Falso (0).' },
        { type: 'paragraph', text: 'Na arquitetura de computadores, essas operações matemáticas são implementadas fisicamente em circuitos integrados através de transistores que atuam como chaves eletrônicas, formando o que conhecemos como Portas Lógicas.' }
      ]
    },
    {
      pageNumber: 2,
      elements: [
        { type: 'table', headers: ['Operador', 'Símbolo', 'Significado', 'Avaliação Lógica'], rows: [
          ['AND (E)', '∧', 'Conjunção', 'Verdadeiro se, e somente se, todas as proposições forem verdadeiras.'],
          ['OR (OU)', '∨', 'Disjunção', 'Verdadeiro se pelo menos uma das proposições for verdadeira.'],
          ['NOT (NÃO)', '¬', 'Negação', 'Inverte o valor lógico da proposição (Verdadeiro torna-se Falso).'],
          ['XOR', '⊕', 'Disjunção Exclusiva', 'Verdadeiro se, e somente se, os valores lógicos das proposições forem diferentes.']
        ], caption: 'Tabela 1.1: Operadores lógicos fundamentais da Álgebra Booleana' },
        { type: 'section', level: 2, title: 'Estruturas de Controle de Fluxo', number: '1.3' },
        { type: 'paragraph', text: 'As estruturas de controle de fluxo alteram a execução sequencial linha a linha de um programa, permitindo que os algoritmos tomem decisões baseadas em estados computacionais e repitam blocos de código sem duplicação manual de instruções.' },
        { type: 'list', items: [
          'Estruturas Condicionais (SE / ENTÃO / SENÃO): Avaliam uma expressão booleana. Se for verdadeira, um bloco de instruções é executado; caso contrário, outro fluxo é acionado.',
          'Estruturas de Repetição com Teste no Início (ENQUANTO): Um bloco de instruções é executado repetidamente enquanto a condição de controle retornar o valor verdadeiro.',
          'Estruturas de Repetição com Variável de Controle (PARA): Ideal para situações onde o número de iterações é previamente conhecido. Uma variável atua como um contador.'
        ], ordered: false },
        { type: 'paragraph', text: 'A correta utilização e o aninhamento dessas estruturas são fundamentais para o desenvolvimento de programas complexos. Contudo, deve-se ter cautela para evitar condições que causem "loops infinitos", onde a rotina de repetição nunca alcança sua condição de parada.' },
        { type: 'section', level: 2, title: 'Questões de Fixação Teórica', number: '1.4' },
        { type: 'question', number: 1, text: 'Considerando os preceitos teóricos estabelecidos por Alan Turing, qual é a principal distinção metodológica entre um processo heurístico e um processo algorítmico?', questionType: 'open' },
        { type: 'question', number: 2, text: 'No contexto das propriedades essenciais de um algoritmo (Finitude, Definição, Entradas, Saídas e Efetividade), assinale a alternativa que descreve corretamente o princípio da Efetividade:', options: [
          'A garantia de que o algoritmo será executado mais rapidamente em hardware moderno.',
          'A exigência de que as operações atômicas sejam básicas e resolvíveis num tempo finito sem tecnologia complexa.',
          'O fato de que cada passo instrucional deve retornar um valor nulo ao sistema operacional.',
          'A capacidade do algoritmo de reparar autonomamente instruções mal definidas pelo programador.'
        ], questionType: 'multiple-choice' },
        { type: 'question', number: 3, text: 'Justifique a afirmação "Um algoritmo que não possui uma condição de parada clara viola um dos cinco princípios matemáticos essenciais estabelecidos por Donald Knuth".', questionType: 'open' }
      ]
    },
    {
      pageNumber: 3,
      elements: [
        { type: 'exercise', number: 1, title: 'Laboratório Lógico e Pseudocódigo', instructions: 'Utilizando papel e caneta ou um editor de texto simples, estruture as soluções lógicas para os cenários abaixo, focando exclusivamente na exatidão sequencial das instruções.', items: [
          'Desenvolva um algoritmo detalhado em formato de pseudocódigo que calcule as raízes reais de uma equação do 2º grau (Bhaskara). Não esqueça de tratar as ramificações de validação para cenários de Delta negativo.',
          'Dado um conjunto de N números inteiros fornecidos dinamicamente pelo usuário, escreva a sequência lógica para determinar qual é o maior e o menor valor do conjunto sem armazená-los em matrizes longas.',
          'Aplique a tabela-verdade completa para a expressão booleana complexa: S = (A AND B) OR (NOT C AND A).'
        ] },
        { type: 'section', level: 2, title: 'Resumo do Capítulo', number: '1.5' },
        { type: 'paragraph', text: 'Neste capítulo inaugural, exploramos os alicerces teóricos e práticos da Ciência da Computação. O estudo iniciou-se na definição formal do termo algoritmo, separando-o de generalizações simplistas e atribuindo-lhe propriedades estritas. Posteriormente, examinamos como os estados lógicos (Verdadeiro/Falso) suportam o funcionamento do computador a nível de portas físicas e expressões matemáticas booleanas.' },
        { type: 'paragraph', text: 'Esses conceitos básicos não são apenas marcos históricos; eles são continuamente aplicados por engenheiros e arquitetos de software em sistemas de missão crítica em todo o mundo. A capacidade de abstrair problemas complexos para reduzi-los a uma cadeia lógica impecável continua sendo a habilidade mais vital para o profissional do século XXI.' }
      ]
    }
  ]
};
