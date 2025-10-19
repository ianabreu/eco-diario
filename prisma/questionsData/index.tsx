import { Prisma } from "@/generated/prisma";

export const questionsSeed: Prisma.QuestionCreateInput[] = [
  {
    id: "1",
    question: "Qual é a principal vantagem de praticar a compostagem em casa?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Diminui a quantidade de lixo seco enviado para aterros sanitários.",
            isCorrect: false,
            explanation:
              "A compostagem trata resíduos orgânicos, não o lixo seco.",
          },
          {
            content:
              "Ajuda a eliminar o desperdício de energia elétrica em casa.",
            isCorrect: false,
            explanation: "Não há relação direta com energia elétrica.",
          },
          {
            content:
              "Transforma resíduos orgânicos em adubo, enriquecendo o solo.",
            isCorrect: true,
            explanation: "Esse é o objetivo principal da compostagem.",
          },
          {
            content: "Aumenta a produção de gases poluentes na atmosfera.",
            isCorrect: false,
            explanation:
              "Ao contrário, reduz gases como o metano liberados em aterros.",
          },
        ],
      },
    },
  },
  {
    id: "2",
    question: "Qual é a principal fonte de energia renovável no Brasil?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Energia solar",
            isCorrect: false,
            explanation: "Ainda está crescendo, mas não é a principal.",
          },
          {
            content: "Energia eólica",
            isCorrect: false,
            explanation: "Importante, mas não é a principal no Brasil.",
          },
          {
            content: "Energia hidrelétrica",
            isCorrect: true,
            explanation: "O Brasil depende fortemente de hidrelétricas.",
          },
          {
            content: "Energia nuclear",
            isCorrect: false,
            explanation: "Poucas usinas no Brasil, não é a principal.",
          },
        ],
      },
    },
  },
  {
    id: "3",
    question: "Qual prática ajuda a reduzir o gasto de energia em residências?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Trocar lâmpadas incandescentes por LED.",
            isCorrect: true,
            explanation: "Lâmpadas LED consomem menos energia e duram mais.",
          },
          {
            content: "Deixar aparelhos em stand-by.",
            isCorrect: false,
            explanation:
              "Mesmo em stand-by, eles continuam consumindo energia.",
          },
          {
            content: "Abrir a geladeira com frequência.",
            isCorrect: false,
            explanation:
              "Isso aumenta o consumo de energia do eletrodoméstico.",
          },
          {
            content: "Utilizar aquecedor elétrico o dia todo.",
            isCorrect: false,
            explanation: "Aumenta muito o gasto de energia.",
          },
        ],
      },
    },
  },
  {
    id: "4",
    question: "Qual atitude mais ajuda a fortalecer a economia local?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Comprar em grandes redes de supermercados.",
            isCorrect: false,
            explanation: "Grandes redes concentram renda fora da comunidade.",
          },
          {
            content: "Comprar de produtores e comerciantes locais.",
            isCorrect: true,
            explanation: "Isso mantém a renda circulando na comunidade.",
          },
          {
            content: "Comprar produtos importados sempre que possível.",
            isCorrect: false,
            explanation: "Isso envia recursos para fora do país/comunidade.",
          },
          {
            content: "Depender apenas de compras online internacionais.",
            isCorrect: false,
            explanation: "Também tira recursos da economia local.",
          },
        ],
      },
    },
  },
  {
    id: "5",
    question: "O que significa consumo consciente?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Comprar apenas produtos baratos.",
            isCorrect: false,
            explanation: "Não é só preço, envolve impacto ambiental e social.",
          },
          {
            content: "Consumir apenas o que é necessário e sustentável.",
            isCorrect: true,
            explanation: "Foca em reduzir excessos e impactos negativos.",
          },
          {
            content: "Evitar qualquer tipo de consumo.",
            isCorrect: false,
            explanation: "Consumo é necessário, mas deve ser equilibrado.",
          },
          {
            content: "Comprar o máximo possível para girar a economia.",
            isCorrect: false,
            explanation: "Exageros geram desperdício e poluição.",
          },
        ],
      },
    },
  },
  {
    id: "6",
    question: "Qual é o benefício de uma horta comunitária?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Aumenta a dependência de alimentos industrializados.",
            isCorrect: false,
            explanation: "Na verdade, reduz essa dependência.",
          },
          {
            content:
              "Produz alimentos saudáveis e fortalece a união da comunidade.",
            isCorrect: true,
            explanation: "Promove saúde, economia e integração social.",
          },
          {
            content: "Gera mais lixo orgânico para o bairro.",
            isCorrect: false,
            explanation: "Os restos podem ser usados como adubo.",
          },
          {
            content: "É apenas uma forma de lazer sem utilidade prática.",
            isCorrect: false,
            explanation: "Tem utilidade alimentar e social.",
          },
        ],
      },
    },
  },
  {
    id: "7",
    question: "Qual é uma forma simples de economizar água em casa?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Lavar calçadas com mangueira.",
            isCorrect: false,
            explanation: "Isso desperdiça muita água.",
          },
          {
            content: "Reaproveitar água da chuva para regar plantas.",
            isCorrect: true,
            explanation: "Ajuda a economizar água potável.",
          },
          {
            content: "Deixar a torneira aberta ao escovar os dentes.",
            isCorrect: false,
            explanation: "Gasta litros de água desnecessariamente.",
          },
          {
            content: "Tomar banhos longos todos os dias.",
            isCorrect: false,
            explanation: "Isso aumenta bastante o consumo de água.",
          },
        ],
      },
    },
  },
  {
    id: "8",
    question: "Por que separar o lixo reciclável do orgânico?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Facilita a reciclagem e reduz o volume em aterros.",
            isCorrect: true,
            explanation: "Essa é a principal razão da coleta seletiva.",
          },
          {
            content: "Deixa o lixo mais bonito e cheiroso.",
            isCorrect: false,
            explanation: "Não é esse o objetivo da separação.",
          },
          {
            content: "Aumenta a quantidade de resíduos produzidos.",
            isCorrect: false,
            explanation: "Na verdade, ajuda a reduzir o impacto.",
          },
          {
            content: "Evita que o lixo seja coletado pela prefeitura.",
            isCorrect: false,
            explanation:
              "O lixo ainda é coletado, mas de forma mais eficiente.",
          },
        ],
      },
    },
  },
  {
    id: "9",
    question: "Qual alternativa é um exemplo de energia renovável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Carvão mineral.",
            isCorrect: false,
            explanation: "É uma fonte fóssil e poluente.",
          },
          {
            content: "Energia solar.",
            isCorrect: true,
            explanation: "É limpa, renovável e abundante.",
          },
          {
            content: "Gás natural.",
            isCorrect: false,
            explanation: "Apesar de menos poluente, ainda é fóssil.",
          },
          {
            content: "Petróleo.",
            isCorrect: false,
            explanation: "É uma fonte não renovável e poluente.",
          },
        ],
      },
    },
  },
  {
    id: "10",
    question: "Qual prática reduz o desperdício de alimentos em casa?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Comprar sempre em grandes quantidades.",
            isCorrect: false,
            explanation: "Pode levar ao vencimento e desperdício.",
          },
          {
            content: "Planejar as refeições antes de comprar.",
            isCorrect: true,
            explanation: "Ajuda a comprar apenas o necessário.",
          },
          {
            content: "Descartar sobras mesmo que estejam boas.",
            isCorrect: false,
            explanation: "Isso aumenta o desperdício.",
          },
          {
            content: "Ignorar datas de validade dos produtos.",
            isCorrect: false,
            explanation: "Pode causar desperdício e até problemas de saúde.",
          },
        ],
      },
    },
  },
  {
    id: "11",
    question:
      "Qual impacto positivo o uso de bicicletas pode trazer à comunidade?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Aumenta a poluição sonora.",
            isCorrect: false,
            explanation: "Bicicletas são silenciosas.",
          },
          {
            content: "Reduz emissões de poluentes e melhora a saúde.",
            isCorrect: true,
            explanation: "Contribui para o meio ambiente e para o bem-estar.",
          },
          {
            content: "Ocupa mais espaço do que carros.",
            isCorrect: false,
            explanation: "Bicicletas ocupam muito menos espaço.",
          },
          {
            content: "Dificulta o transporte de pessoas.",
            isCorrect: false,
            explanation: "É uma alternativa prática para curtas distâncias.",
          },
        ],
      },
    },
  },
  {
    id: "12",
    question:
      "Qual medida simples pode diminuir o uso de plásticos descartáveis?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Utilizar sacolas reutilizáveis nas compras.",
            isCorrect: true,
            explanation: "Diminui o uso de sacolas plásticas descartáveis.",
          },
          {
            content: "Comprar mais produtos embalados.",
            isCorrect: false,
            explanation: "Isso aumenta o uso de plásticos.",
          },
          {
            content: "Usar copos descartáveis em festas sempre.",
            isCorrect: false,
            explanation: "Esses copos contribuem para o lixo plástico.",
          },
          {
            content: "Descartar plástico junto ao lixo orgânico.",
            isCorrect: false,
            explanation: "Isso dificulta a reciclagem.",
          },
        ],
      },
    },
  },
  {
    id: "13",
    question: "O que é economia circular?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Modelo que incentiva descarte rápido de produtos.",
            isCorrect: false,
            explanation: "Isso é o oposto da economia circular.",
          },
          {
            content:
              "Sistema que busca reutilizar, reciclar e reduzir resíduos.",
            isCorrect: true,
            explanation: "Esse é o conceito central da economia circular.",
          },
          {
            content: "Economia baseada apenas em combustíveis fósseis.",
            isCorrect: false,
            explanation: "Isso se refere à economia linear tradicional.",
          },
          {
            content: "Prática de gastar mais para aumentar o consumo.",
            isCorrect: false,
            explanation: "Isso não é sustentável nem circular.",
          },
        ],
      },
    },
  },
  {
    id: "14",
    question: "Por que reutilizar garrafas de vidro é uma prática sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Porque o vidro se quebra facilmente.",
            isCorrect: false,
            explanation: "Quebrar não é vantagem sustentável.",
          },
          {
            content: "Porque evita a produção de novas garrafas.",
            isCorrect: true,
            explanation: "Reutilizar reduz o consumo de recursos e energia.",
          },
          {
            content: "Porque o vidro não pode ser reciclado.",
            isCorrect: false,
            explanation: "O vidro é 100% reciclável.",
          },
          {
            content: "Porque melhora o sabor dos alimentos.",
            isCorrect: false,
            explanation: "Não tem relação direta com o sabor.",
          },
        ],
      },
    },
  },
  {
    id: "15",
    question: "O conceito de sustentabilidade diz respeito:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Somente ao meio ambiente.",
            isCorrect: false,
            explanation: null,
          },
          {
            content: "Ao meio ambiente e à sociedade.",
            isCorrect: false,
            explanation: null,
          },
          {
            content: "A fatores sociais, políticos e econômicos.",
            isCorrect: false,
            explanation: null,
          },
          {
            content: "A fatores sociais, políticos, econômicos e ambientais.",
            isCorrect: true,
            explanation: null,
          },
        ],
      },
    },
  },
  {
    id: "16",
    question: "ser ecologicamente correto é:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Lavar o carro todos os dias.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Não esgotar os recursos da natureza.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Jogar o lixo na rua.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Desperdiçar os recursos da natureza.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "17",
    question: "Ser economicamente viável é:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Manter as luzes acesas durante o dia.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Ligar o ventilador ao invés de abrir as janelas.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Utilizar produtos que consomem menos energia.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Utilizar os recursos da maneira que me convém.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "18",
    question: "Ser socialmente justo é:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Não compartilhar recursos.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Cada um cuidar da sua própria vida.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Usufruir dos recursos das outras pessoas.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "Entender que o planeta é um só e pertence a todos que vivem aqui.",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "19",
    question: "São ações sustentáveis, exceto:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Reduzir o tempo do banho.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Deixar as luzes acesas durante o dia.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Fechar a torneira ao escovar os dentes.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Priorizar a ventilação natural dos ambientes.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "20",
    question: "Os 3 R's da sustentabilidade significam:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Reduzir, reutilizar e reciclar.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Reduzir, repensar e reutilizar.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Reutilizar, repensar e reciclar.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Repensar, refazer  reaproveitar.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "21",
    question:
      "Uma das formas de preservar o meio ambiente é reduzindo a produção de lixo. Mas como?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Optando pela compra de produtos com embalagens recicláveis.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Reutilizando os materiais e objetos sempre que possível.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Apoiando iniciativas de reciclagem.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Todas as alternativas estão corretas.",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "22",
    question: "Como consumir de forma consciente?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Trocando os nossos objetos sempre que um novo for lançado.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Usar a mangueira para lavar o quintal e o carro.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Utilizando os recursos naturais para nos satisfazer.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Adquirindo qualquer tipo de produto se for barato.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "23",
    question:
      "Sete bilhões de seres humanos produzem anualmente _____ de toneladas de resíduos sólidos.",
    alternatives: {
      createMany: {
        data: [
          {
            content: "90 milhões",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "1,4 bilhões",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "900 milhões",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "6,8 trilhões",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "24",
    question: "O que é reciclagem?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Jogar fora o lixo produzido.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "Coletar todo tipo de material existente em lixos recicláveis.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "Nome dado para todo o processo sofrido pelo lixo após seu descarte.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "Transformação de materiais usados em novos produtos para uso.",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "25",
    question:
      "Qual das alternativas abaixo permite a reciclagem do lixo produzido?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Incineração (queima) do lixo.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Acúmulo de matéria-prima.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Coleta seletiva.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Descarte do lixo no chão.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "26",
    question: "O que é coleta seletiva?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Separação do lixo e seu recolhimento visando a reciclagem.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Destinação de resíduos para lixões.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Entrega do lixo para catadores de rua.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "A escolha aleatória do melhor lixo produzido.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "27",
    question: "Como separar corretamente o seu lixo?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Juntar tudo na lixeira e descartar na rua.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "Separar o lixo orgânico dos resíduos sólidos (papel, plástico, alumínio...)",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Deixar plásticos sujos junto com o lixo orgânico.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Juntar todo tipo de lixo e descartar em ponto de coleta.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "28",
    question: "Lixo orgânico é:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Sacolas, embalagens de material de limpeza e utensílios.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Resíduos de origem vegetal ou animal.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Retalhos de tecido, sobras e retalhos de metal.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Curativos, seringas e agulhas usadas.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "29",
    question:
      "Qual é a porcentagem do lixo produzido no Brasil que é reciclado?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "4%",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "99%",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "18%",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "68%",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "30",
    question: "Pode ser reciclado:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Isopor.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Guardanapo usado.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Lata de refrigerante.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Lâmpadas e baterias.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "31",
    question: "Como preservar árvores e florestas?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Construindo uma casa na árvore.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "Usando conscientemente e reciclando papéis, jornais e revistas.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Reutilizando metais e vidros.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Indo em parques.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "32",
    question:
      "A reciclagem de uma tonelada de papel evita o abate de quantas árvores?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "De 2 a 5 árvores.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "De 15 a 30 árvores.",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "De 100 a 300 árvores.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "De 1000 a 1500 árvores.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "33",
    question: "Qual o percentual de água potável do mundo?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "12%",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "50%",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "20%",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "2,5%",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "34",
    question: "Quanto tempo o vidro leva para se decompor na natureza?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "300 anos.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "1000 anos.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "3000 anos.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "O vidro não é biodegradável, ou seja, não se decompõe naturalmente.",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "35",
    question: "Sobre as sacolas plásticas, marque a alternativa correta:",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Elas servem de alimento para as tartarugas marinhas.",
            isCorrect: false,
            explanation: "",
          },
          {
            content: "Elas gastam cerca de 6 meses para sumir na natureza.",
            isCorrect: false,
            explanation: "",
          },
          {
            content:
              "Devemos priorizar o uso das eco-bags (sacolas reutilizáveis).",
            isCorrect: true,
            explanation: "",
          },
          {
            content: "Elas não poluem a natureza.",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    id: "36",
    question: "O que é economia sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Um modelo econômico que ignora os impactos ambientais.",
            isCorrect: false,
            explanation:
              "A economia sustentável busca equilibrar economia, sociedade e meio ambiente.",
          },
          {
            content:
              "Um sistema que visa crescimento econômico com responsabilidade ambiental.",
            isCorrect: true,
            explanation:
              "A economia sustentável considera o uso racional dos recursos naturais.",
          },
          {
            content: "Um modelo voltado apenas para reduzir impostos.",
            isCorrect: false,
            explanation: "Não tem relação direta com tributação.",
          },
          {
            content: "Uma forma de incentivar o consumismo.",
            isCorrect: false,
            explanation:
              "A economia sustentável busca reduzir o consumo excessivo.",
          },
        ],
      },
    },
  },
  {
    id: "37",
    question: "O que são negócios sustentáveis?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Empresas que visam apenas o lucro financeiro.",
            isCorrect: false,
            explanation:
              "Negócios sustentáveis equilibram lucro, sociedade e meio ambiente.",
          },
          {
            content:
              "Empresas que adotam práticas éticas e de baixo impacto ambiental.",
            isCorrect: true,
            explanation:
              "Esses negócios buscam reduzir impactos e gerar benefícios sociais.",
          },
          {
            content: "Empresas que evitam pagar impostos.",
            isCorrect: false,
            explanation: "Isso é ilegal e não sustentável.",
          },
          {
            content: "Empresas que exploram recursos naturais sem controle.",
            isCorrect: false,
            explanation: "Isso vai contra o conceito de sustentabilidade.",
          },
        ],
      },
    },
  },
  {
    id: "38",
    question: "O que significa o termo 'pegada ecológica'?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "A quantidade de árvores plantadas por pessoa.",
            isCorrect: false,
            explanation:
              "A pegada ecológica mede o impacto ambiental do consumo humano.",
          },
          {
            content:
              "O impacto das atividades humanas sobre os recursos naturais.",
            isCorrect: true,
            explanation:
              "É um indicador que mostra quanto o consumo humano afeta o planeta.",
          },
          {
            content: "A área usada para reciclagem em uma cidade.",
            isCorrect: false,
            explanation: "Não é esse o conceito de pegada ecológica.",
          },
          {
            content:
              "A distância que um produto percorre até chegar ao consumidor.",
            isCorrect: false,
            explanation: "Isso se refere à 'pegada de carbono'.",
          },
        ],
      },
    },
  },
  {
    id: "39",
    question: "Qual dessas práticas representa consumo sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Comprar roupas novas a cada estação.",
            isCorrect: false,
            explanation: "Isso incentiva o desperdício e o consumo excessivo.",
          },
          {
            content: "Reaproveitar roupas e doar o que não usa mais.",
            isCorrect: true,
            explanation:
              "Essa prática reduz o desperdício e ajuda outras pessoas.",
          },
          {
            content: "Descartar roupas usadas no lixo comum.",
            isCorrect: false,
            explanation: "Isso aumenta o volume de resíduos.",
          },
          {
            content: "Comprar produtos sem se preocupar com origem.",
            isCorrect: false,
            explanation:
              "O consumo consciente exige atenção à origem e impacto do produto.",
          },
        ],
      },
    },
  },
  {
    id: "40",
    question:
      "Como o transporte público contribui para a economia sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Aumentando o consumo de combustíveis fósseis.",
            isCorrect: false,
            explanation: "Transporte coletivo reduz o consumo de combustíveis.",
          },
          {
            content: "Reduzindo o número de veículos e a emissão de poluentes.",
            isCorrect: true,
            explanation: "Menos carros significam menos CO₂ e menos trânsito.",
          },
          {
            content: "Desestimulando o uso de bicicletas.",
            isCorrect: false,
            explanation: "Ambos podem coexistir de forma sustentável.",
          },
          {
            content: "Gerando mais poluição sonora.",
            isCorrect: false,
            explanation:
              "O transporte público reduz o ruído urbano por passageiro transportado.",
          },
        ],
      },
    },
  },
  {
    id: "41",
    question: "Por que os produtos locais são mais sustentáveis?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Porque usam menos transporte e geram menos emissões.",
            isCorrect: true,
            explanation:
              "Produtos locais reduzem custos e impactos logísticos.",
          },
          {
            content: "Porque são sempre mais baratos.",
            isCorrect: false,
            explanation:
              "Nem sempre o preço é menor, mas o impacto ambiental é.",
          },
          {
            content: "Porque são produzidos com menos qualidade.",
            isCorrect: false,
            explanation:
              "Muitos produtos locais são de alta qualidade e frescos.",
          },
          {
            content: "Porque geram mais resíduos na produção.",
            isCorrect: false,
            explanation:
              "O foco é reduzir resíduos e fortalecer a economia local.",
          },
        ],
      },
    },
  },
  {
    id: "42",
    question: "O que é comércio justo (Fair Trade)?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Um modelo que visa explorar mão de obra barata.",
            isCorrect: false,
            explanation:
              "O comércio justo busca o oposto: valorização e equidade.",
          },
          {
            content:
              "Um sistema que garante preços justos e condições éticas de trabalho.",
            isCorrect: true,
            explanation:
              "Promove relações comerciais equilibradas e sustentáveis.",
          },
          {
            content: "Um programa de incentivos fiscais para grandes empresas.",
            isCorrect: false,
            explanation: "Não se trata de uma política fiscal.",
          },
          {
            content: "Um tipo de venda restrita a produtos importados.",
            isCorrect: false,
            explanation: "O comércio justo valoriza a produção local e ética.",
          },
        ],
      },
    },
  },
  {
    id: "43",
    question: "Como as energias renováveis influenciam a economia sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Aumentando a dependência de combustíveis fósseis.",
            isCorrect: false,
            explanation: "As renováveis reduzem essa dependência.",
          },
          {
            content: "Reduzindo custos a longo prazo e impactos ambientais.",
            isCorrect: true,
            explanation:
              "Energias limpas são mais sustentáveis e econômicas com o tempo.",
          },
          {
            content: "Gerando poluição e resíduos tóxicos.",
            isCorrect: false,
            explanation: "Fontes como solar e eólica são limpas.",
          },
          {
            content: "Diminuindo a geração de empregos locais.",
            isCorrect: false,
            explanation: "Elas criam novos empregos verdes e locais.",
          },
        ],
      },
    },
  },
  {
    id: "44",
    question: "O que é economia verde?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Economia que visa crescimento com baixa emissão de carbono.",
            isCorrect: true,
            explanation:
              "Foca na sustentabilidade e na redução dos impactos ambientais.",
          },
          {
            content: "Sistema baseado em exploração de recursos naturais.",
            isCorrect: false,
            explanation: "Isso caracteriza a economia tradicional.",
          },
          {
            content: "Economia voltada apenas ao setor agrícola.",
            isCorrect: false,
            explanation: "Não se restringe à agricultura.",
          },
          {
            content: "Modelo econômico que ignora o meio ambiente.",
            isCorrect: false,
            explanation:
              "A economia verde integra o meio ambiente nas decisões econômicas.",
          },
        ],
      },
    },
  },
  {
    id: "45",
    question:
      "Como o reaproveitamento de materiais contribui para a sustentabilidade?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Aumenta o consumo de matéria-prima virgem.",
            isCorrect: false,
            explanation:
              "O reaproveitamento diminui a extração de novos recursos.",
          },
          {
            content: "Reduz o desperdício e economiza energia.",
            isCorrect: true,
            explanation:
              "A reutilização evita a produção desnecessária e poupa energia.",
          },
          {
            content: "Eleva a poluição dos rios e solos.",
            isCorrect: false,
            explanation: "Na verdade, contribui para reduzir a poluição.",
          },
          {
            content: "Cria dependência de produtos importados.",
            isCorrect: false,
            explanation: "O reaproveitamento estimula a economia local.",
          },
        ],
      },
    },
  },
  {
    id: "46",
    question:
      "Qual setor tem grande potencial para promover a economia sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "O setor de turismo sustentável.",
            isCorrect: true,
            explanation:
              "Valoriza a natureza e gera renda com baixo impacto ambiental.",
          },
          {
            content: "A indústria de combustíveis fósseis.",
            isCorrect: false,
            explanation: "Essa indústria está entre as mais poluentes.",
          },
          {
            content: "A mineração intensiva.",
            isCorrect: false,
            explanation: "Ela costuma causar grandes impactos ambientais.",
          },
          {
            content: "O comércio de produtos descartáveis.",
            isCorrect: false,
            explanation: "Esse tipo de comércio gera muito lixo e poluição.",
          },
        ],
      },
    },
  },
  {
    id: "47",
    question: "O que são 'empregos verdes'?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Empregos relacionados à preservação ambiental e energia limpa.",
            isCorrect: true,
            explanation:
              "Contribuem para a sustentabilidade e o bem-estar social.",
          },
          {
            content: "Empregos no setor automobilístico tradicional.",
            isCorrect: false,
            explanation: "Nem sempre têm foco em sustentabilidade.",
          },
          {
            content: "Trabalhos informais sem regulamentação.",
            isCorrect: false,
            explanation: "Empregos verdes seguem boas práticas trabalhistas.",
          },
          {
            content: "Funções administrativas sem impacto ambiental.",
            isCorrect: false,
            explanation:
              "O foco é na contribuição direta para o meio ambiente.",
          },
        ],
      },
    },
  },
  {
    id: "48",
    question: "O que é economia compartilhada?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Sistema em que as pessoas compartilham bens e serviços.",
            isCorrect: true,
            explanation:
              "Reduz desperdício e promove o uso racional de recursos.",
          },
          {
            content: "Modelo baseado em consumo excessivo.",
            isCorrect: false,
            explanation: "A economia compartilhada reduz o consumo individual.",
          },
          {
            content: "Sistema de trocas apenas financeiras.",
            isCorrect: false,
            explanation:
              "Inclui trocas não monetárias, como compartilhamento e aluguel.",
          },
          {
            content: "Prática de descartar produtos rapidamente.",
            isCorrect: false,
            explanation: "O foco é prolongar o uso e reduzir o descarte.",
          },
        ],
      },
    },
  },
  {
    id: "49",
    question: "Por que investir em energia solar é uma decisão sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Porque depende de combustíveis fósseis.",
            isCorrect: false,
            explanation: "A energia solar é renovável e limpa.",
          },
          {
            content: "Porque reduz gastos com energia e emissões de carbono.",
            isCorrect: true,
            explanation: "É uma fonte limpa e econômica a longo prazo.",
          },
          {
            content: "Porque gera muito lixo eletrônico.",
            isCorrect: false,
            explanation: "A manutenção dos painéis é mínima e pouco poluente.",
          },
          {
            content: "Porque só funciona em áreas urbanas.",
            isCorrect: false,
            explanation: "Pode ser utilizada em diversos locais.",
          },
        ],
      },
    },
  },
  {
    id: "50",
    question: "Qual é o papel da educação ambiental na economia sustentável?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Ensinar práticas de consumo e produção responsáveis.",
            isCorrect: true,
            explanation: "A conscientização é base para a sustentabilidade.",
          },
          {
            content: "Aumentar o consumo de produtos industrializados.",
            isCorrect: false,
            explanation: "O objetivo é justamente o oposto.",
          },
          {
            content: "Eliminar a coleta seletiva.",
            isCorrect: false,
            explanation: "A educação ambiental incentiva a reciclagem.",
          },
          {
            content: "Desestimular o uso de energias renováveis.",
            isCorrect: false,
            explanation: "Ela promove o uso consciente de energia limpa.",
          },
        ],
      },
    },
  },
  {
    id: "51",
    question: "Como as empresas podem adotar práticas sustentáveis?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Desperdiçando recursos naturais para reduzir custos.",
            isCorrect: false,
            explanation: "O desperdício é contrário à sustentabilidade.",
          },
          {
            content:
              "Investindo em reciclagem, energia limpa e logística reversa.",
            isCorrect: true,
            explanation: "Essas são práticas empresariais sustentáveis.",
          },
          {
            content: "Ignorando a origem dos insumos utilizados.",
            isCorrect: false,
            explanation:
              "O controle da cadeia é essencial para a sustentabilidade.",
          },
          {
            content: "Produzindo mais resíduos tóxicos.",
            isCorrect: false,
            explanation: "Empresas sustentáveis buscam minimizar a poluição.",
          },
        ],
      },
    },
  },
  {
    id: "52",
    question: "Por que reduzir o consumo de carne ajuda o meio ambiente?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Porque a pecuária emite grandes quantidades de gases poluentes.",
            isCorrect: true,
            explanation:
              "Menos consumo significa menor emissão de metano e uso de água.",
          },
          {
            content: "Porque aumenta o desmatamento.",
            isCorrect: false,
            explanation: "Na verdade, reduz o desmatamento.",
          },
          {
            content: "Porque estimula o uso de combustíveis fósseis.",
            isCorrect: false,
            explanation: "Não há relação direta com combustíveis.",
          },
          {
            content: "Porque elimina a agricultura familiar.",
            isCorrect: false,
            explanation:
              "A agricultura familiar pode se beneficiar de práticas sustentáveis.",
          },
        ],
      },
    },
  },
  {
    id: "53",
    question: "O que são produtos biodegradáveis?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Materiais que se decompõem naturalmente sem poluir.",
            isCorrect: true,
            explanation:
              "Eles se transformam em compostos simples na natureza.",
          },
          {
            content: "Materiais que nunca se decompõem.",
            isCorrect: false,
            explanation:
              "Esses seriam não biodegradáveis, como o plástico comum.",
          },
          {
            content: "Produtos feitos com combustíveis fósseis.",
            isCorrect: false,
            explanation: "Geralmente são feitos de fontes renováveis.",
          },
          {
            content: "Itens descartáveis de uso único.",
            isCorrect: false,
            explanation: "Podem ser reutilizáveis ou compostáveis.",
          },
        ],
      },
    },
  },
  {
    id: "54",
    question: "Qual ação ajuda diretamente na economia circular?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Reutilizar embalagens de vidro.",
            isCorrect: true,
            explanation:
              "Evita descarte e reduz a necessidade de novos materiais.",
          },
          {
            content: "Descartar produtos logo após o uso.",
            isCorrect: false,
            explanation: "Isso caracteriza a economia linear.",
          },
          {
            content: "Usar plásticos de uso único.",
            isCorrect: false,
            explanation: "Vai contra o conceito circular.",
          },
          {
            content: "Aumentar a extração de recursos naturais.",
            isCorrect: false,
            explanation: "A economia circular busca reduzir a extração.",
          },
        ],
      },
    },
  },
  {
    id: "55",
    question: "Como o consumo consciente impacta a economia?",
    alternatives: {
      createMany: {
        data: [
          {
            content: "Estimula a produção irresponsável.",
            isCorrect: false,
            explanation: "Ele incentiva práticas éticas e sustentáveis.",
          },
          {
            content: "Valoriza empresas que respeitam o meio ambiente.",
            isCorrect: true,
            explanation:
              "Consumidores conscientes fortalecem negócios responsáveis.",
          },
          {
            content: "Desestimula a economia local.",
            isCorrect: false,
            explanation: "Pelo contrário, apoia produtores locais e justos.",
          },
          {
            content: "Gera mais lixo e desperdício.",
            isCorrect: false,
            explanation: "Busca reduzir o descarte e o consumo excessivo.",
          },
        ],
      },
    },
  },
  {
    id: "56",
    question: "O que é responsabilidade socioambiental nas empresas?",
    alternatives: {
      createMany: {
        data: [
          {
            content:
              "Compromisso com práticas que beneficiam a sociedade e o meio ambiente.",
            isCorrect: true,
            explanation:
              "Inclui ações éticas, ecológicas e de inclusão social.",
          },
          {
            content: "Priorizar apenas o lucro financeiro.",
            isCorrect: false,
            explanation: "A responsabilidade socioambiental vai além do lucro.",
          },
          {
            content: "Evitar qualquer tipo de fiscalização.",
            isCorrect: false,
            explanation: "Transparência é parte essencial da responsabilidade.",
          },
          {
            content: "Produzir sem considerar o impacto ambiental.",
            isCorrect: false,
            explanation: "Isso é o oposto da responsabilidade socioambiental.",
          },
        ],
      },
    },
  },
];
