import { Prisma } from "@/generated/prisma";

export const plantsSeed: Prisma.PlantCreateInput[] = [
  {
    name: "Abóbora Bahiana Tropical",
    scientificName: "Cucurbita moschata",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860058/abobora-baiana-tropical_xkessl.jpg",
    howToPlant:
      "Plante diretamente no local definitivo, pois a abóbora não gosta de ser transplantada. Revolva o solo até 20 cm para deixá-lo bem solto. Adicione bastante composto orgânico ou húmus para nutrir a planta. Mantenha o solo úmido mas sem encharcar, para um bom desenvolvimento.",
    climate: "Clima quente",
    description:
      "Planta rasteira, com polpa alaranjada, firme e doce. É ideal para o clima tropical.",
    tips: "Coloque 4 sementes por cova e, após a germinação, deixe apenas as 2 plantas mais fortes (raleio) É ótima para pratos como camarão ou carne-seca na moranga.",
    germination: "de 4 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "2 cm" },
          { order: 2, title: "Sementes por cova", description: "4" },
          { order: 3, title: "Espaçamento", description: "2 m x 1 m" },
          { order: 4, title: "Raleio", description: "Deixar 2 plantas" },
          { order: 5, title: "Peso do Fruto", description: "1,5 - 2 kg" },
          { order: 6, title: "Colheita", description: "120 a 140 dias" },
        ],
      },
    },
  },
  {
    name: "Pepino Aodai",
    scientificName: "Cucumis sativus",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/pepino-aodai_jznaje.jpg",
    howToPlant:
      "Plante as sementes diretamente no local definitivo. O solo deve ser solto, com no mínimo 20 cm de profundidade  e enriquecido com composto orgânico ou húmus. Mantenha a irrigação constante e suave, sem encharcar a terra.",
    climate: "Clima quente",
    description:
      "Fruto cilíndrico, verde escuro e medindo cerca de 20 x 5 cm. Além de refrescante, é um diurético natural.",
    tips: "Para um bom desenvolvimento, é necessário tutoramento (suporte) para a planta crescer verticalmente. Faça o raleio quando as mudas estiverem maiores, deixando apenas uma por ponto.",
    germination: "de 4 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "1 cm" },
          {
            order: 2,
            title: "Espaçamento inicial",
            description: "50 cm x 20 cm",
          },
          {
            order: 3,
            title: "Espaçamento após raleio",
            description: "50 cm x 40 cm",
          },
          { order: 4, title: "Peso do Fruto", description: "180 - 200 g" },
          { order: 5, title: "Colheita", description: "60 a 70 dias" },
        ],
      },
    },
  },
  {
    name: "Cenoura Brasília",
    scientificName: "Daucus carota",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/cenoura-brasilia_igyoqd.jpg",
    howToPlant:
      "Semeie diretamente no canteiro. O segredo da cenoura é um solo muito fofo: revolva no mínimo 20 cm  e remova todas as pedras. Adicione húmus ou composto orgânico  e mantenha o solo úmido, mas nunca seco.",
    climate: "Clima quente",
    description:
      "Raiz de forma cilíndrica, uniforme, com cerca de 14 x 4 cm. Rica em Betacaroteno, benéfico para a visão.",
    tips: "Faça o raleio (retirada das mudas excedentes) quando as plantas tiverem 5 cm, deixando o espaçamento correto para que as raízes engrossem. É tolerante a temperaturas mais altas.",
    germination: "de 7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "0,5 cm" },
          {
            order: 2,
            title: "Espaçamento inicial",
            description: "20 cm x 2 cm",
          },
          {
            order: 3,
            title: "Espaçamento após raleio",
            description: "20 cm x 8 cm",
          },
          { order: 4, title: "Altura da folhagem", description: "35 - 45 cm" },
          { order: 5, title: "Colheita", description: "90 a 100 dias" },
        ],
      },
    },
  },
  {
    name: "Alface Crespa",
    scientificName: "Lactuca sativa",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860107/alface-crespa_iqycmz.jpg",
    howToPlant:
      "A alface é melhor cultivada em sementeiras e transplantada. O solo deve ser preparado com 20 cm de profundidade  e com bastante composto orgânico. Mantenha o solo sempre úmido , regando diariamente em pequenas quantidades.",
    climate: "Clima ameno",
    description:
      "Folhas crespas e verdes, ideal para saladas frescas. É um alimento de fácil digestão.",
    tips: "Evite locais de sol muito intenso  em dias quentes, pois isso pode fazer a alface espigar rapidamente. Colha a cabeça inteira de uma vez.",
    germination: "de 4 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "0,5 cm" },
          { order: 2, title: "Espaçamento", description: "30 cm x 30 cm" },
          { order: 3, title: "Peso da cabeça", description: "150 - 250 g" },
          { order: 4, title: "Colheita", description: "45 a 60 dias" },
        ],
      },
    },
  },
  {
    name: "Almeirão Pão-de-Açúcar",
    scientificName: "Cichorium intybus",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/almeirao-pao-de-acucar_nigiqv.jpg",
    howToPlant:
      "Semeie diretamente no local definitivo em solo fértil, solto e bem drenado. Faça canteiros altos para ajudar na drenagem e adicione composto orgânico. Mantenha o solo úmido, principalmente durante a germinação.",
    climate: "Clima ameno",
    description:
      "Folhas longas e verdes, com um sabor levemente amargo, ideais para saladas mais sofisticadas. ",
    tips: "Pode ser cultivado o ano todo em regiões de clima suave. O amargor pode ser reduzido cultivando-o em locais de meia-sombra.",
    germination: "de 7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "1 cm" },
          { order: 2, title: "Espaçamento", description: "30 cm x 30 cm" },
          {
            order: 3,
            title: "Espaçamento após raleio",
            description: "35 cm x 30 cm",
          },
          { order: 4, title: "Peso da cabeça", description: "250 - 350 g" },
          { order: 5, title: "Colheita", description: "60 a 70 dias" },
        ],
      },
    },
  },
  {
    name: "Beterraba Early Wonder",
    scientificName: "Beta vulgaris",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/beterraba-early-wonder_mdqxds.jpg",
    howToPlant:
      "Semeie diretamente em canteiros. A beterraba exige um solo leve e fofo  para que a raiz arredondada cresça bem, então solte bem a terra. Mantenha o solo constantemente úmido, mas evite o encharcamento.",
    climate: "Clima ameno",
    description:
      "Raiz arredondada com casca lisa e polpa vermelha intensa. É rica em nutrientes, incluindo ferro.",
    tips: "As folhas da beterraba também são comestíveis e ricas em ferro; utilize-as em refogados! Faça o raleio para garantir o espaçamento correto e o bom desenvolvimento da raiz.",
    germination: "de 5 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "1,5 cm" },
          { order: 2, title: "Espaçamento", description: "20 cm x 20 cm" },
          { order: 3, title: "Peso da raiz", description: "100 - 150 g" },
          { order: 4, title: "Colheita", description: "70 a 80 dias" },
        ],
      },
    },
  },
  {
    name: "Cebolinha Verde",
    scientificName: "Allium fistulosum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/cebolinha-verde_polbiv.jpg",
    howToPlant:
      "Pode ser plantada por sementes ou mudas. Prefira solos leves, ricos em matéria orgânica e bem drenados. Mantenha a umidade, especialmente após a semeadura, para incentivar a rebrota.",
    climate: "Clima ameno",
    description:
      "Folhas longas e cilíndricas de sabor suave, essencial para temperar pratos, caldos e saladas.",
    tips: "A colheita deve ser feita cortando as folhas perto da base, pois ela rebrota com facilidade. É uma planta que pode ser cultivada em vasos pequenos perto da cozinha.",
    germination: "de 7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "1 cm" },
          {
            order: 2,
            title: "Espaçamento inicial",
            description: "20 cm x 10 cm",
          },
          {
            order: 3,
            title: "Espaçamento após raleio",
            description: "25 cm x 15 cm",
          },
          { order: 4, title: "Peso", description: "50 - 100 g" },
          { order: 5, title: "Colheita", description: "90 dias" },
        ],
      },
    },
  },
  {
    name: "Coentro Verdão",
    scientificName: "Coriandrum sativum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/coentro-verdao_cn4sja.jpg",
    howToPlant:
      "Semeie diretamente no canteiro, pois o coentro não gosta de transplante. O solo deve ser bem drenado e enriquecido com composto orgânico. Regue suavemente para manter a umidade, especialmente em clima quente.",
    climate: "Clima quente",
    description:
      "Erva aromática com folhas intensamente perfumadas, essencial na culinária nordestina e em temperos.",
    tips: "Faça 'semeaduras sucessivas': plante um pouco a cada 15 ou 20 dias. Isso garante que você terá folhas frescas sempre, pois ele floresce rápido no calor.",
    germination: "de 7 a 15 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "1 cm" },
          { order: 2, title: "Espaçamento", description: "20 cm x 20 cm" },
          {
            order: 3,
            title: "Espaçamento após raleio",
            description: "25 cm x 20 cm",
          },
          { order: 4, title: "Peso", description: "30 - 50 g" },
          { order: 5, title: "Colheita", description: "45 dias" },
        ],
      },
    },
  },
  {
    name: "Couve Manteiga",
    scientificName: "Brassica oleracea",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/couve-manteiga_xddwuk.jpg",
    howToPlant:
      "Geralmente plantada por mudas. O solo deve ser fértil, bem drenado e com bastante adição de composto orgânico. A couve gosta de sol pleno, mas tolera um pouco de sombra.",
    climate: "Clima ameno",
    description:
      "Folhas largas, verde-escuras e macias, ideais para refogados e sucos verdes. É rica em ferro e cálcio.",
    tips: "Colha sempre as folhas mais externas e velhas primeiro. Isso permite que o caule continue produzindo novas folhas continuamente, prolongando a vida da planta.",
    germination: "de 6 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "1 cm" },
          {
            order: 2,
            title: "Espaçamento inicial",
            description: "60 cm x 50 cm",
          },
          {
            order: 3,
            title: "Espaçamento após raleio",
            description: "70 cm x 60 cm",
          },
          { order: 4, title: "Peso médio", description: "500 - 800 g" },
          { order: 5, title: "Colheita", description: "80 a 100 dias" },
        ],
      },
    },
  },
  {
    name: "Espinafre Nova Zelândia",
    scientificName: "Tetragonia tetragonioides",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/espinafre-nova-zelandia_zsbtlj.jpg",
    howToPlant:
      "Semeie diretamente no local definitivo em solo fértil e rico em matéria orgânica. É uma planta que gosta de calor. Mantenha as regas diárias em pequenas quantidades para não encharcar.",
    climate: "Clima quente",
    description:
      "Folhas suculentas e verdes, com alto teor de ferro e vitaminas. Mais tolerante ao calor que o espinafre comum.",
    tips: "Colha as folhas externas da planta, deixando o centro intacto para que ela possa rebrotar e produzir mais. Não precisa de raleio.",
    germination: "de 10 a 20 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Profundidade", description: "2 cm" },
          { order: 2, title: "Espaçamento", description: "40 cm x 40 cm" },
          {
            order: 3,
            title: "Espaçamento após raleio",
            description: "45 cm x 45 cm",
          },
          { order: 4, title: "Peso", description: "150 - 250 g" },
          { order: 5, title: "Colheita", description: "90 dias" },
        ],
      },
    },
  },
  {
    name: "Pimentão (Diferentes Cores)",
    scientificName: "Capsicum annuum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0019_pimentao_fvdmrs.jpg",
    howToPlant:
      "Comece semeando em sementeira e transplante as mudas para o local definitivo após cerca de 45 a 60 dias. O solo deve ser leve, rico em composto orgânico e bem drenado. Gosta de muito sol!",
    climate: "Quente e úmido",
    description:
      "Fruto versátil e colorido, rico em vitamina C e antioxidantes. Usado em saladas, recheios e molhos.",
    tips: "Utilize estacas (tutoramento) para apoiar o caule principal. Mantenha a irrigação constante, pois a falta de água pode prejudicar os frutos.",
    germination: "7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "0,5 cm" },
          { order: 3, title: "Espaçamento", description: "50 cm x 50 cm" },
          { order: 4, title: "Colheita", description: "90 a 120 dias" },
        ],
      },
    },
  },
  {
    name: "Rúcula",
    scientificName: "Eruca vesicaria",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0018_rucula_ozcshq.jpg",
    howToPlant:
      "Pode ser semeada diretamente no canteiro ou vaso. Escolha um solo rico em composto orgânico. Mantenha a rega frequente para que o solo permaneça sempre úmido, mas não encharcado.",
    climate: "Temperado a quente",
    description:
      "Folhosa de sabor picante e ligeiramente amargo. Rica em vitamina K e ferro.",
    tips: "Para uma colheita contínua, retire apenas as folhas externas. No verão, plante em um local que receba sol pela manhã e sombra à tarde para evitar o amargor.",
    germination: "4 a 7 dias",
    plantInfo: {
      createMany: {
        data: [
          {
            order: 1,
            title: "Luminosidade",
            description: "Sol Pleno/Meia-sombra",
          },
          { order: 2, title: "Profundidade", description: "0,5 cm" },
          { order: 3, title: "Espaçamento", description: "20 cm x 10 cm" },
          { order: 4, title: "Colheita", description: "30 a 50 dias" },
        ],
      },
    },
  },
  {
    name: "Salsa",
    scientificName: "Petroselinum crispum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0017_salsa_rfcbbh.jpg",
    howToPlant:
      "A salsa é difícil de germinar; deixe as sementes de molho por 24h antes do plantio para ajudar. Semeie em sementeira ou diretamente. Mantenha o solo sempre úmido  e prefira locais de meia-sombra.",
    climate: "Temperado",
    description:
      "Erva aromática essencial na culinária brasileira. Rica em vitamina C e A e possui ação diurética.",
    tips: "Corte os talos mais externos para estimular o crescimento de novos ramos. Não deixe a planta secar, pois isso prejudica a produção.",
    germination: "14 a 28 dias (demorada)",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Meia-sombra" },
          { order: 2, title: "Profundidade", description: "0,5 cm" },
          { order: 3, title: "Espaçamento", description: "20 cm x 15 cm" },
          { order: 4, title: "Colheita", description: "60 a 90 dias" },
        ],
      },
    },
  },
  {
    name: "Tomate Cereja",
    scientificName: "Solanum lycopersicum var. cerasiforme",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0016_tomate-cereja_ia7ux0.jpg",
    howToPlant:
      "Semeie em sementeira e transplante as mudas para o local definitivo quando tiverem de 4 a 6 folhas. O tomate precisa de sol pleno e tutoramento (estacas) para crescer.",
    climate: "Quente e seco",
    description:
      "Frutinho doce e suculento, perfeito para saladas. Excelente fonte de licopeno (antioxidante).",
    tips: "Retire as brotações laterais (chamadas 'ladrões') para concentrar a energia no crescimento e frutificação do caule principal.",
    germination: "5 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Espaçamento", description: "60 cm x 40 cm" },
          { order: 4, title: "Colheita", description: "70 a 90 dias" },
        ],
      },
    },
  },
  {
    name: "Cebola Roxa",
    scientificName: "Allium cepa",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204488/_0015_cebola-roxa_l6dh2p.jpg",
    howToPlant:
      "Semeie em sementeira e transplante as mudas. O solo deve ser solto, leve, rico e sem pedras  para que o bulbo possa se desenvolver facilmente. Mantenha as regas moderadas.",
    climate: "Ameno e seco",
    description:
      "Variedade de cebola com sabor mais suave e levemente adocicado. Rica em quercetina (antioxidante).",
    tips: "Reduza a rega quando o bulbo começar a inchar e pare completamente na colheita. Não cubra o topo do bulbo com terra para facilitar o crescimento.",
    germination: "7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Espaçamento", description: "30 cm x 10 cm" },
          { order: 4, title: "Colheita", description: "120 a 180 dias" },
        ],
      },
    },
  },
  {
    name: "Quiabo",
    scientificName: "Abelmoschus esculentus",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204488/_0014_quiabo_ujbc4n.jpg",
    howToPlant:
      "Semeie diretamente no local definitivo, pois ele não tolera bem o transplante. Requer muito sol e alta temperatura  para crescer forte. O solo deve ser fértil.",
    climate: "Quente e tropical",
    description:
      "Fruto alongado famoso pela mucilagem (baba). Rico em fibras e vitaminas. Essencial na culinária mineira.",
    tips: "Colha os frutos quando ainda estiverem pequenos (5 a 8 cm), pois se ficarem grandes, ficam duros. Para diminuir a baba, prepare com um pouco de vinagre.",
    germination: "7 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 a 2 cm" },
          { order: 3, title: "Espaçamento", description: "100 cm x 50 cm" },
          { order: 4, title: "Colheita", description: "60 a 80 dias" },
        ],
      },
    },
  },
  {
    name: "Melancia",
    scientificName: "Citrullus lanatus",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204488/_0013_melancia_fzijs5.jpg",
    howToPlant:
      "Semeie diretamente em covas grandes no local definitivo. Precisa de muito espaço para a rasteira crescer. O solo deve ser fértil e as regas, abundantes na fase inicial.",
    climate: "Quente e seco",
    description:
      "Fruto grande e doce, composto por mais de 90% de água. Rico em licopeno e potássio, ideal para o calor.",
    tips: "Reduza as regas após a frutificação para concentrar o açúcar e deixar o fruto mais doce. A polinização por abelhas é crucial.",
    germination: "4 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "2 cm" },
          { order: 3, title: "Espaçamento", description: "200 cm x 200 cm" },
          { order: 4, title: "Colheita", description: "90 a 110 dias" },
        ],
      },
    },
  },
  {
    name: "Mamão Papaia",
    scientificName: "Carica papaya",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204490/_0012_mamao-papaia_mtfp85.jpg",
    howToPlant:
      "Plante as sementes em saquinhos e transplante as mudas. Requer solo profundo, rico e muito bem drenado. O mamoeiro não tolera geadas.",
    climate: "Tropical e subtropical",
    description:
      "Fruta tropical, saborosa e de fácil digestão. Rica em papaína (enzima digestiva) e vitamina C.",
    tips: "Mantenha o solo sempre livre de mato competidor. Para evitar doenças, regue apenas na base, sem molhar o caule.",
    germination: "15 a 40 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Espaçamento", description: "250 cm x 250 cm" },
          { order: 4, title: "Colheita", description: "9 a 12 meses" },
        ],
      },
    },
  },
  {
    name: "Alecrim",
    scientificName: "Salvia rosmarinus",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204490/_0011_alecrim_jh6bsl.jpg",
    howToPlant:
      "Pode ser plantado por estaquia (ramos) ou sementes. Prefere solo leve, arenoso e com excelente drenagem. Regue com moderação, pois tolera a seca e não gosta de excesso de umidade.",
    climate: "Mediterrâneo/Ameno",
    description:
      "Erva perene de aroma intenso. Possui propriedades antioxidantes e ajuda a melhorar a memória.",
    tips: "Pode ser cultivado facilmente em vasos pequenos. Faça uma poda regular após a floração para estimular o crescimento de novos ramos.",
    germination: "14 a 21 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          {
            order: 2,
            title: "Profundidade",
            description: "1 cm (se for semente)",
          },
          { order: 3, title: "Espaçamento", description: "50 cm x 50 cm" },
          { order: 4, title: "Colheita", description: "90 dias (ramos)" },
        ],
      },
    },
  },
  {
    name: "Manjericão",
    scientificName: "Ocimum basilicum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204490/_0010_manjericao_oiljds.jpg",
    howToPlant:
      "Semeie em sementeira e transplante quando a muda tiver 4 folhas. O manjericão ama sol e calor, e precisa de solo constantemente úmido. Regue frequentemente, mas sem encharcar.",
    climate: "Quente",
    description:
      "Erva essencial para a culinária italiana, usada em pestos e molhos. Seu aroma intenso afasta alguns insetos.",
    tips: "Pode as pontas dos ramos para evitar a floração. A floração faz com que o sabor da folha fique mais fraco.",
    germination: "5 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "0,5 cm" },
          { order: 3, title: "Espaçamento", description: "30 cm x 20 cm" },
          { order: 4, title: "Colheita", description: "60 a 90 dias" },
        ],
      },
    },
  },
  {
    name: "Pimenta Dedo-de-Moça",
    scientificName: "Capsicum baccatum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0009_pimenta-dedo-de-moca_lsj1ke.jpg",
    howToPlant:
      "Semear em sementeira e transplantar as mudas para o local definitivo. A pimenta é uma planta que adora calor intenso e sol pleno, então escolha um local ensolarado. Requer solo fértil e uma irrigação constante, mas tome cuidado para não encharcar.",
    climate: "Quente e tropical",
    description:
      "Pimenta de ardência média, muito popular no Brasil. Rica em capsaicina, que tem propriedades anti-inflamatórias",
    tips: "A colheita estimula a produção de novos frutos. Sempre use luvas para manusear as pimentas e tome muito cuidado para evitar tocar os olhos ou mucosas",
    germination: "7 a 20 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          {
            order: 3,
            title: "Espaçamento",
            description: "60 cm entre plantas",
          },
          {
            order: 4,
            title: "Colheita",
            description: "90 a 120 dias 11]",
          },
        ],
      },
    },
  },
  {
    name: "Couve-flor",
    scientificName: "Brassica oleracea var. botrytis",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0008_couve-flor_bxbr39.jpg",
    howToPlant:
      "Comece plantando em sementeira e depois transplante as mudas para o canteiro definitivo. A couve-flor prefere clima ameno e solo muito rico em matéria orgânica. Evite grandes variações de temperatura",
    climate: "Ameno/Frio",
    description:
      "Hortaliça que forma uma cabeça (flor) comestível. Excelente fonte de fibras e vitaminas C e K",
    tips: "Quando a cabeça estiver do tamanho de uma maçã, dobre as folhas externas sobre ela. Isso a protege do sol e a mantém branca e macia (processo conhecido como 'amarelamento')",
    germination: "7 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          {
            order: 3,
            title: "Espaçamento",
            description: "60 cm entre plantas",
          },
          {
            order: 4,
            title: "Colheita",
            description: "90 a 150 dias",
          },
        ],
      },
    },
  },
  {
    name: "Berinjela",
    scientificName: "Solanum melongena",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204490/_0007_beringela_srarpd.jpg",
    howToPlant:
      "Semeie em sementeira e transplante as mudas. A berinjela precisa de muito sol, calor e solo fértil Mantenha a irrigação regular. Ela precisa de apoio (estacas) para suportar o peso dos frutos (tutoramento)",
    climate: "Quente",
    description:
      "Fruto roxo escuro, rico em antioxidantes e fibras. É um ótimo alimento para a saúde cardiovascular.",
    tips: "Retire o primeiro fruto que surgir na planta. Isso ajuda a fortalecer a estrutura para que ela produza mais frutos nas flores seguintes.",
    germination: "7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          {
            order: 3,
            title: "Espaçamento",
            description: "80 cm entre plantas ",
          },
          {
            order: 4,
            title: "Colheita",
            description: "90 a 120 dias ",
          },
        ],
      },
    },
  },
  {
    name: "Abobrinha Italiana",
    scientificName: "Cucurbita pepo",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0006_abobrinha-italiana_jpdf4h.jpg",
    howToPlant:
      "Semeie diretamente no local definitivo, pois ela é vigorosa e cresce muito rápido. Precisa de muito sol e água, mas não tolera geadas. Prepare o solo com bastante composto orgânico.",
    climate: "Quente",
    description:
      "Fruto de polpa macia e de fácil digestão, colhido ainda imaturo. É rica em vitaminas do complexo B.",
    tips: "Colha os frutos quando ainda estiverem pequenos e macios (15-20 cm). Se o fruto crescer demais, a casca endurece e a planta reduz a produção de novos frutos.",
    germination: "4 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "2 cm" },
          {
            order: 3,
            title: "Espaçamento",
            description: "100 cm x 80 cm ",
          },
          { order: 4, title: "Colheita", description: "40 a 60 dias" },
        ],
      },
    },
  },
  {
    name: "Batata Doce",
    scientificName: "Ipomoea batatas",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0005_batata-doce_kbxrq6.jpg",
    howToPlant:
      "É plantada por meio de ramas (pedaços do cipó), e não por sementes. Requer solo solto, arenoso e profundo, com boa drenagem, para que a raiz tuberosa se desenvolva.",
    climate: "Quente",
    description:
      "Raiz tuberosa rica em carboidratos complexos e betacaroteno. É uma excelente fonte de energia e fibras.",
    tips: "A colheita é feita quando as folhas do cipó começam a amarelar. Evite regas excessivas no final do ciclo para prevenir que as raízes rachem.",
    germination: "Propagada por rama (estaca)",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "15 cm (da rama)" },
          {
            order: 3,
            title: "Espaçamento",
            description: "80 cm x 30 cm ",
          },
          {
            order: 4,
            title: "Colheita",
            description: "120 a 180 dias ",
          },
        ],
      },
    },
  },
  {
    name: "Morango",
    scientificName: "Fragaria x ananassa",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0004_morango_incsev.jpg",
    howToPlant:
      "Plante por mudas (coroas). Gosta de clima ameno e solo rico em matéria orgânica. Cultivar em canteiros elevados ou vasos suspensos é ideal para proteger os frutos.",
    climate: "Ameno/Frio",
    description:
      "Fruta saborosa e de alto valor nutritivo. É rica em vitamina C e antioxidantes, ideal para pequenas hortas.",
    tips: "Use cobertura morta (palha) para evitar que os frutos toquem o solo. Isso ajuda a prevenir fungos e facilita a colheita.",
    germination: "Propagada por mudas/estolões",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          {
            order: 2,
            title: "Profundidade",
            description: "A coroa da muda deve ficar acima da terra ",
          },
          { order: 3, title: "Espaçamento", description: "30 cm x 30 cm" },
          {
            order: 4,
            title: "Colheita",
            description: "A partir de 60 dias no ciclo de produção ",
          },
        ],
      },
    },
  },
  {
    name: "Repolho",
    scientificName: "Brassica oleracea var. capitata ",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204489/_0003_repolho_dluywh.jpg",
    howToPlant:
      "Semeie em sementeira e transplante as mudas para o local definitivo. O solo deve ser bem adubado com composto e o clima fresco são essenciais para que a cabeça se forme corretamente.",
    climate: "Ameno/Frio",
    description:
      "Folhosa que forma uma cabeça compacta. É rico em fibras e vitaminas, usado em saladas e refogados.",
    tips: "Mantenha o solo úmido, mas evite o encharcamento. O frio intenso ajuda muito a formar cabeças maiores e mais firmes.",
    germination: "5 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Espaçamento", description: "50 cm x 40 cm" },
          {
            order: 4,
            title: "Colheita",
            description: "90 a 120 dias ",
          },
        ],
      },
    },
  },
  {
    name: "Brócolis",
    scientificName: "Brassica oleracea var. italica ",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204488/_0002_brocolis_grorfl.jpg",
    howToPlant:
      "Semeie em sementeira e transplante as mudas. Requer solo fértil e clima ameno para conseguir desenvolver as flores (cabeças).",
    climate: "Ameno/Frio",
    description:
      "Hortaliça crucífera super nutritiva. É rica em sulforafano e fibras e possui propriedades benéficas à saúde.",
    tips: "Após colher a cabeça principal, não arranque a planta. Deixe-a no solo, pois ela pode produzir brotos laterais (cabeças menores) que podem ser colhidos posteriormente.",
    germination: "7 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "1 cm" },
          {
            order: 3,
            title: "Espaçamento",
            description: "60 cm x 60 cm ",
          },
          { order: 4, title: "Colheita", description: "90 a 150 dias" },
        ],
      },
    },
  },
  {
    name: "Mandioca (Aipim/Macaxeira)",
    scientificName: "Manihot esculenta",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204488/_0001_mandioca_gehiqz.jpg",
    howToPlant:
      "Plante por meio de manivas (pedaços do caule). O solo deve ser profundo e bem drenado. É muito resistente à seca e requer pouca manutenção, sendo ideal para iniciantes.",
    climate: "Tropical e subtropical",
    description:
      "Raiz tuberosa fundamental na culinária brasileira. É uma fonte de amido resistente, que é benéfico para a saúde intestinal.",
    tips: "O plantio deve ser feito preferencialmente em épocas chuvosas. As raízes podem ser deixadas no solo por mais tempo, funcionando como um 'banco' de alimentos.",
    germination: "Propagada por manivas",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          {
            order: 2,
            title: "Profundidade",
            description: "10 a 15 cm (da maniva) ",
          },
          { order: 3, title: "Espaçamento", description: "100 cm x 60 cm" },
          { order: 4, title: "Colheita", description: "12 a 24 meses" },
        ],
      },
    },
  },
  {
    name: "Milho",
    scientificName: "Zea mays",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1761204488/_0000_milho_znntgo.jpg",
    howToPlant:
      "Semeie diretamente no local definitivo. O milho exige sol pleno e solo fértil. A irrigação precisa ser constante, principalmente quando a planta estiver na fase de florescimento ('pendoamento').",
    climate: "Quente",
    description:
      "Grão consumido ainda imaturo (verde), rico em carboidratos e vitaminas. Essencial em receitas típicas brasileiras.",
    tips: "Plante o milho em blocos (várias fileiras lado a lado) em vez de uma única linha. Isso facilita a polinização pelo vento e garante espigas cheias e bem formadas.",
    germination: "4 a 7 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 1, title: "Luminosidade", description: "Sol Pleno" },
          { order: 2, title: "Profundidade", description: "2 a 3 cm" },
          { order: 3, title: "Espaçamento", description: "100 cm x 30 cm" },
          { order: 4, title: "Colheita", description: "80 a 100 dias" },
        ],
      },
    },
  },
];
