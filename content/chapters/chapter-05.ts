import { ChapterData } from '@/content/types';

export const chapter05: ChapterData = {
  id: '5',
  title: 'Redes de Computadores e Protocolos',
  pages: [
    {
      pageNumber: 11,
      elements: [
        { type: 'chapter-title', number: 5, title: 'Redes de Computadores e Protocolos', subtitle: 'Arquitetura da Internet e Transporte' },
        { type: 'paragraph', text: 'O estudo de redes de computadores é a espinha dorsal da conectividade global moderna. Uma rede não é definida apenas por seus cabos submarinos transcontinentais ou roteadores sem fio corporativos, mas sim pelo emaranhado de normas lógicas e protocolos de comunicação que permitem que sistemas heterogêneos conversem utilizando o mesmo vocabulário de pulsos elétricos.' },
        { type: 'paragraph', text: 'A interoperabilidade é o milagre que possibilita um servidor baseado em uma arquitetura UNIX na Europa enviar páginas HTML para um smartphone embarcado com processador ARM na Ásia.' },
        { type: 'section', level: 2, title: 'O Modelo de Referência OSI', number: '5.1' },
        { type: 'paragraph', text: 'O modelo Open Systems Interconnection (OSI), padronizado pela ISO no ano de 1984, é uma estrutura conceitual vital que caracteriza e padroniza as funções de telecomunicação sem levar em consideração a tecnologia adjacente interna do computador. Ele compartimentaliza o fluxo de tráfego de rede em 7 camadas modulares.' },
        { type: 'table', headers: ['Camada', 'Nome (Inglês)', 'Função Principal', 'Exemplo Prático'], rows: [
          ['7', 'Application', 'Interfaces de rede e apresentação de dados para o software.', 'HTTP, FTP, SMTP'],
          ['6', 'Presentation', 'Criptografia, formatação e tradução de caracteres estruturados.', 'SSL/TLS, JPEG, ASCII'],
          ['5', 'Session', 'Controle, sincronização e encerramento de conexões dialógicas.', 'Sockets, NetBIOS'],
          ['4', 'Transport', 'Entrega end-to-end garantida, mitigação de congestionamento.', 'TCP, UDP'],
          ['3', 'Network', 'Roteamento algorítmico, descobrimento de caminhos através de saltos.', 'IP (IPv4, IPv6), ICMP'],
          ['2', 'Data Link', 'Transferência em nós locais, controle de acesso ao meio físico (MAC).', 'Ethernet, Switch (VLANs)'],
          ['1', 'Physical', 'Transmissão do fluxo de bits brutos sobre canais e cabos mecânicos.', 'Fibra Óptica, Cabos RJ45']
        ], caption: 'Tabela 5.1: O Modelo de Referência OSI de 7 Camadas' },
        { type: 'section', level: 2, title: 'A Pilha TCP/IP e a Camada de Transporte', number: '5.2' },
        { type: 'paragraph', text: 'Embora o modelo OSI seja um brilhante manual teórico exaustivo acadêmico, o mercado pragmático da Internet acabou convergindo para a arquitetura prática do conjunto de protocolos TCP/IP.' },
        { type: 'list', items: [
          'TCP (Transmission Control Protocol): Projetado rigorosamente para máxima integridade e confiabilidade sistêmica. Estabelece o famoso "Three-way Handshake" e exige recibos de confirmação (ACK) constantes para cada pacote entregue. Ideal para e-mails e transferências bancárias vitais.',
          'UDP (User Datagram Protocol): Protocolo "fire-and-forget". Ele dispara datagramas em velocidade absurda na fiação, rejeitando solenemente a garantia de entrega, ordem de chegada ou retransmissão corretiva de falhas. Extremamente necessário para streamings de vídeo em 4K e VoIP.'
        ], ordered: false },
        { type: 'paragraph', text: 'É altamente recomendado (Best Practice) nunca aplicar as lógicas de arquiteturas orientadas a eventos (Kafka) sobre canais puros em UDP sem um middleware fortificado, acarretando perda crônica de consistência entre microserviços em instabilidades elétricas do servidor.' }
      ]
    },
    {
      pageNumber: 12,
      elements: [
        { type: 'section', level: 2, title: 'Endereçamento Lógico: IPv4 e IPv6', number: '5.3' },
        { type: 'paragraph', text: 'A camada de Rede do protocolo depende universalmente do esquema de Endereçamento IP para guiar cirurgicamente a malha mundial. O Internet Protocol Version 4 (IPv4) representava endereços como inteiros de 32 bits, comportando teoricamente 4,3 bilhões de dispositivos, número insuficiente perante a onipresença dos celulares.' },
        { type: 'table', headers: ['Métrica Comparativa', 'Protocolo IPv4', 'Protocolo IPv6'], rows: [
          ['Extensão Criptográfica do Endereço', '32 bits numéricos', '128 bits hexadecimais alfanuméricos'],
          ['Notação Visual e Formatação', 'Decimal pontuado (Ex: 192.168.0.1)', 'Colon-Hexadecimal (Ex: 2001:0db8::ff00:0042)'],
          ['Suporte Funcional de IPSec Embutido', 'Opcional, acoplado via plugins extras', 'Nativo, rigorosamente obrigatório na arquitetura padrão'],
          ['Tamanho Físico Total Suportado', 'Aproximadamente 4.3 bilhões de nós', 'Aproximadamente 340 undecilhões de rotas exclusivas']
        ], caption: 'Tabela 5.2: Análise quantitativa técnica das limitações inerentes de Endereçamento IP' },
        { type: 'section', level: 2, title: 'Algoritmos de Roteamento Dinâmico', number: '5.4' },
        { type: 'paragraph', text: 'Quando um roteador autônomo recebe um pacote cujo endereço de destino pertence a um continente do qual ele não tem visibilidade trivial na tabela local, o núcleo da ciência da computação brilha através da matemática de grafos (Dijkstra) na busca algorítmica constante do menor caminho até o roteador de fronteira final (BGP).' },
        { type: 'paragraph', text: 'Nota Importante: Protocolos de roteamento Vetor de Distância como o antigo RIP sofrem profundamente do fenômeno "Count-to-Infinity". Recomenda-se explicitamente arquiteturas Link-State como OSPF para Redes Autônomas Interiores (IGP) devido a sua resiliência e estabilidade rápida perante falhas catastróficas em enlaces de comunicação principais.' },
        { type: 'section', level: 2, title: 'Aplicação: O Domínio HTTP e DNS', number: '5.5' },
        { type: 'paragraph', text: 'O DNS (Domain Name System) desempenha o papel essencial de "lista telefônica" descentralizada global. Humanos possuem sérias limitações cerebrais lógicas para decorar matrizes hexadecimais massivas (IPv6) das suas redes sociais favoritas; a necessidade fundamental do DNS reside na sua capacidade orgânica milissegundos de traduzir a string "www.instituto.edu" no identificador de rede primário do servidor hospedado na nuvem, com resiliência baseada em árvores de autoridade.' },
        { type: 'section', level: 2, title: 'Verificação Acadêmica Prática', number: '5.6' },
        { type: 'exercise', number: 1, title: 'Análise Profunda Forense de Pacotes e Wireshark', instructions: 'Com os seus conhecimentos teóricos consolidados neste capítulo, simule o diagnóstico do seguinte laboratório cibernético problemático:', items: [
          'Você observa que clientes sofrem travamentos lentos ao acessar uma base relacional, embora os Pings por ICMP apontem zero perda de pacotes e 5ms de latência contínua.',
          'Considerando as características da Camada de Transporte (Camada 4), explique logicamente qual mecanismo estrutural interno do TCP poderia estar diminuindo drasticamente a "Janela Deslizante" (Sliding Window), forçando artificialmente a lentidão das entregas das queries.'
        ] },
        { type: 'question', number: 1, text: 'No contexto do protocolo de inicialização "Three-way Handshake" inerente às normas RFC do TCP, marque a alternativa que estabelece fidedignamente o encadeamento rigoroso de sub-pacotes trocados entre origem e receptor:', options: [
          'ACK -> SYN -> FIN-ACK',
          'SYN -> SYN-ACK -> ACK',
          'RST -> SYN -> ACK',
          'SYN-ACK -> ACK -> ESTABLISHED'
        ], questionType: 'multiple-choice' }
      ]
    }
  ]
};
