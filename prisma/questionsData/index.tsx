import { Prisma } from "@/generated/prisma";

export const questionsSeed: Prisma.QuestionCreateInput[] = [
  {
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
];
