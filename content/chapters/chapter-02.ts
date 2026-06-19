import { ChapterData } from '@/content/types';

export const chapter02: ChapterData = {
  id: '2',
  title: 'Estruturas de Dados e Análise de Complexidade',
  pages: [
    {
      pageNumber: 4,
      elements: [
        { type: 'chapter-title', number: 2, title: 'Estruturas de Dados e Análise de Complexidade', subtitle: 'Organização Memoriável e Notação Big-O' },
        { type: 'paragraph', text: 'A eficiência de um programa computacional é fortemente governada por dois pilares inseparáveis: a excelência dos algoritmos utilizados e a adequação das estruturas de dados nas quais a informação está alocada. Uma estrutura de dados não é simplesmente uma lista solta de variáveis, mas sim um modelo lógico estruturado projetado para permitir acesso, leitura e modificação altamente eficientes de dados.' },
        { type: 'paragraph', text: 'A escolha incorreta de uma estrutura de dados, mesmo em face a um algoritmo impecável, pode resultar no colapso sistêmico da aplicação, sobretudo quando os volumes de dados se aproximam de dimensões de Big Data, onde gargalos de O(n²) causam horas de atraso computacional.' },
        { type: 'section', level: 2, title: 'Complexidade Computacional (Big-O)', number: '2.1' },
        { type: 'paragraph', text: 'A notação Big-O é o padrão da indústria e do meio acadêmico para classificar a escalabilidade dos algoritmos de acordo com seu consumo de tempo e de espaço de memória, na medida em que a quantidade de dados de entrada (n) se aproxima do infinito.' },
        { type: 'paragraph', text: 'O propósito do Big-O não é estimar quanto tempo exato (em segundos) o processador levará, pois tal métrica varia drasticamente de hardware para hardware. Em vez disso, mede-se o número de operações elementares ou passos teóricos em resposta ao tamanho da amostra (n).' },
        { type: 'table', headers: ['Notação Big-O', 'Nomenclatura', 'Impacto Computacional (Escala de "n")'], rows: [
          ['O(1)', 'Constante', 'O tempo de execução é idêntico, independentemente do volume de dados. Altamente desejável.'],
          ['O(log n)', 'Logarítmica', 'Tempo aumenta de forma muito lenta e marginal. Comum em buscas binárias.'],
          ['O(n)', 'Linear', 'O tempo cresce de modo diretamente proporcional à entrada. Ex: varredura em vetor.'],
          ['O(n log n)', 'Linearitmica', 'Padrão predominante dos algoritmos otimizados de ordenação, como Merge Sort.'],
          ['O(n²)', 'Quadrática', 'Loops aninhados. Inviável para amostras que excedam dezenas de milhares de registros.'],
          ['O(2^n)', 'Exponencial', 'Estoura o limite de processamento muito rapidamente. Comum em algoritmos recursivos brutos.']
        ], caption: 'Tabela 2.1: Classificação assintótica de tempo de execução' }
      ]
    },
    {
      pageNumber: 5,
      elements: [
        { type: 'section', level: 2, title: 'Vetores (Arrays) e Memória Contígua', number: '2.2' },
        { type: 'paragraph', text: 'Os vetores (Arrays) são a estrutura de dados mais ubíqua da ciência da computação. Caracterizam-se por armazenarem os seus elementos de forma estritamente contígua (lado a lado) na memória RAM do computador.' },
        { type: 'paragraph', text: 'Devido a essa disposição espacial rigorosa, os arrays possuem uma vantagem imbatível: a indexação. O computador é capaz de localizar qualquer elemento em O(1) apenas calculando o endereço de memória através do tamanho do tipo de dado e do offset inicial. No entanto, sua natureza estática significa que redimensionar um array ou inserir dados no meio dele é muito custoso, exigindo a cópia massiva e deslocamento dos dados subjacentes para outros endereços na memória (O(n)).' },
        { type: 'section', level: 2, title: 'Listas Encadeadas (Linked Lists)', number: '2.3' },
        { type: 'paragraph', text: 'Para contornar as limitações matemáticas de alocação de Arrays, foram formuladas as Listas Encadeadas. Nessa topologia flexível, os elementos (nodos) não residem lado a lado na memória física. Em vez disso, cada bloco de dado é acompanhado por um ponteiro metafórico—uma variável que guarda as coordenadas reais do próximo elemento da corrente.' },
        { type: 'paragraph', text: 'Isso torna a inserção ou exclusão de nós incrivelmente rápida (O(1) caso a referência já seja conhecida), pois basta realinhar os ponteiros, sem mover blocos gigabytes de memória. A desvantagem principal reside na ausência da indexação direta: para encontrar o elemento nº 5.000, o programa deve invariavelmente pular ponteiro por ponteiro partindo do primeiro nodo.' },
        { type: 'table', headers: ['Critério', 'Array (Vetor)', 'Lista Encadeada'], rows: [
          ['Acesso Direto / Leitura', 'Rápido - O(1)', 'Lento - O(n)'],
          ['Inserção no Fim', 'Rápido (se há espaço)', 'Rápido - O(1)'],
          ['Inserção/Remoção no Meio', 'Lento - O(n)', 'Rápido (apenas trocam-se ponteiros)'],
          ['Uso de Memória Pura', 'Ótimo (somente os dados puros)', 'Ineficiente (cada dado precisa de 1 a 2 ponteiros)'],
          ['Localidade de Cache', 'Excepcional', 'Pobre (fragmentado na heap)']
        ], caption: 'Tabela 2.2: Comparativo analítico entre Memória Contígua e Nós Encadeados' },
        { type: 'section', level: 2, title: 'Pilhas e Filas (Stacks & Queues)', number: '2.4' },
        { type: 'paragraph', text: 'Pilhas e filas são abstrações arquiteturais que impõem regras rígidas de como os dados entram e saem de uma coleção, independente da estrutura subjacente (array ou lista) que as hospeda.' },
        { type: 'list', items: [
          'Pilha (Stack / LIFO): Last-In, First-Out. O último elemento adicionado deve ser obrigatoriamente o primeiro a ser processado e removido. Essencial para controle do ponteiro de funções recursivas do Sistema Operacional e comandos de "Desfazer" nos editores de texto.',
          'Fila (Queue / FIFO): First-In, First-Out. O primeiro que chega é rigorosamente o primeiro que sai. O modelo canônico de buffers de dados e impressoras. Uma sub-variante inclui as "Priority Queues", onde os dados furam a fila dependendo do seu peso interno estipulado pelo programador.'
        ], ordered: false },
        { type: 'paragraph', text: 'A quebra do princípio FIFO numa Fila regular causaria efeitos deletérios formidáveis na sincronização de pacotes de redes (TCP/IP), resultando em bytes fragmentados na transmissão entre servidores web e instâncias corrompidas.' }
      ]
    },
    {
      pageNumber: 6,
      elements: [
        { type: 'section', level: 2, title: 'Módulo de Verificação de Aprendizagem', number: '2.5' },
        { type: 'question', number: 1, text: 'Ao projetar o sistema de navegação de histórico de um navegador moderno (Botão Voltar/Avançar), um engenheiro júnior decide utilizar uma Fila circular. Avalie essa decisão com base nas propriedades de LIFO e FIFO.', questionType: 'open' },
        { type: 'question', number: 2, text: 'Sobre os gargalos de O(n²) aplicados a vetores em operações rudimentares, qual cenário abaixo sofreria imediatamente as penalidades dessa classificação de complexidade?', options: [
          'A inserção contínua de metadados log no fim de um array pré-alocado (append).',
          'A busca do valor máximo de um conjunto desordenado de 1 milhão de inteiros iterando a lista uma única vez.',
          'A comparação exaustiva de cada registro individual do banco de dados contra todos os outros registros para detecção de duplicatas (loop duplo).',
          'A travessia de uma árvore binária totalmente balanceada buscando uma chave de índice primário.'
        ], questionType: 'multiple-choice' },
        { type: 'exercise', number: 1, title: 'Estudo de Caso de Otimização', instructions: 'Leia o cenário a seguir e utilize o formalismo acadêmico de estruturas de dados para diagnosticar, projetar e corrigir a implementação da startup hipotética.', items: [
          'Fase 1: Uma startup armazena os IDs dos seus usuários ativos (que desconectam e conectam milhares de vezes por minuto) no meio de um Array estático. Justifique tecnicamente, mencionando a complexidade Big-O e os deslocamentos de memória, por que as instâncias dos servidores deles estão sofrendo CPU lockup e travamentos.',
          'Fase 2: Sugira duas alternativas completas de Estruturas de Dados Abstratas (tais como Árvores Balanceadas, HashMaps ou Listas Duplamente Encadeadas) que poderiam substituir esse Array. Forneça os trade-offs de memória de cada solução.'
        ] }
      ]
    }
  ]
};
