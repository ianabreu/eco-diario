import { Prisma } from "@/generated/prisma";

export const plantsSeed: Prisma.PlantCreateInput[] = [
  {
    id: "1",
    name: "Abóbora Bahiana Tropical",
    scientificName: "Cucurbita moschata",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1759118274/abobora-baiana-tropical_ulhl1u.webp",
    howToPlant:
      "Revolva o solo no mínimo 20 cm de profundidade até que fique solto, sem a presença de torrões. Para melhorar o solo, adicione esterco e/ou húmus na proporção de 10%. Misture adubo balanceado NPK considerando 300g para cada 10m2 de canteiro. Para plantio em vasos, use substrato e adicione 5g de adubo por litro de vaso. Semeie conforme a tabela abaixo. Após o plantio, manter o solo e/ou substrato úmido, sem encharcar, para obter melhores resultados.",
    climate: "Clima quente",
    description:
      "Planta rasteira, polpa alaranjada, firme e doce. Desenvolvido para regiões tropicais.",
    tips: "Ideal para pratos como camarão ou carne-seca na moranga, também é muito usada em refogados e sopas.",
    germination: "de 4 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          {
            order: 1,
            title: "Profundidade",
            description: "2 cm",
          },

          { order: 2, title: "Sementes por cova", description: "4" },

          {
            order: 3,
            title: "Espaçamento entre covas",
            description: "2 m x 1 m",
          },

          {
            order: 4,
            title: "Raleio",
            description: "Deixar 2 plantas",
          },

          { order: 5, title: "Diâmetro", description: "20 - 25 cm" },

          { order: 6, title: "Peso", description: "1,5 - 2 kg" },

          {
            order: 7,

            title: "Colheita",
            description: "120 a 140 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "2",
    name: "Pepino Aodai",
    scientificName: "Cucumis sativus",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/pepino-aodai_jznaje.jpg",
    howToPlant:
      "Revolva o solo no mínimo 20 cm de profundidade até que fique solto, sem a presença de torrões. Para melhorar o solo, adicione esterco e/ou húmus na proporção de 10%. Misture adubo balanceado NPK considerando 300g para cada 10m2 de canteiro. Para plantio em vasos, use substrato e adicione 5g de adubo por litro de vaso. Semeie conforme a tabela. Após o plantio, manter o solo e/ou substrato úmido, sem encharcar, para obter melhores resultados.",
    climate: "Clima quente",
    description:
      "Fruto cilindrico, verde escuro, com espinhos brancos, medindo cerca de 20 x 5 cm.",
    tips: "O pepino é um diurético natural.",
    germination: "de 4 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          {
            order: 2,
            title: "Profundidade",
            description: "1 cm",
          },

          { order: 3, title: "Semeio direto", description: "50 cm x 20 cm" },

          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "50 cm x 40 cm",
          },

          { order: 5, title: "Peso", description: "180 - 200 g" },

          {
            order: 6,
            title: "Colheita",
            description: "60 a 70 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "3",
    name: "Cenoura Brasília",
    scientificName: "Daucus carota",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/cenoura-brasilia_igyoqd.jpg",
    howToPlant:
      "Revolva o solo no mínimo 20 cm de profundidade até que fique solto, sem a presença de torrões. Para melhorar o solo, adicione esterco e/ou húmus na proporção de 10%. Misture adubo balanceado NPK considerando 300g para cada 10m2 de canteiro. Para plantio em vasos, use substrato e adicione 5g de adubo por litro de vaso. Semeie conforme a tabela. Após o plantio, manter o solo e/ou substrato úmido, sem encharcar, para obter melhores resultados.",
    climate: "Clima quente",
    description: "Forma cilíndrica, uniforme, mede cerca de 14 x 4 cm. ",
    tips: "Tolerante a temperaturas mais altas. Rica em Betacaroteno.",
    germination: "de 7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          {
            order: 2,
            title: "Profundidade",
            description: "0,5 cm",
          },

          { order: 3, title: "Semeio direto", description: "20 cm x 2 cm" },

          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "20 cm x 8 cm",
          },

          { order: 5, title: "Altura", description: "35 - 45 cm" },

          {
            order: 6,
            title: "Colheita",
            description: "90 a 100 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "4",
    name: "Alface Crespa",
    scientificName: "Lactuca sativa",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860107/alface-crespa_iqycmz.jpg",
    howToPlant:
      "Prepare o solo com 20 cm de profundidade, soltando bem e misturando composto orgânico. Semeie em bandejas ou diretamente no canteiro, mantendo o solo úmido sem encharcar.",
    climate: "Clima ameno",
    description: "Folhas crespas e verdes, muito usada em saladas frescas.",
    tips: "Evite locais de sol intenso; regue diariamente em pequenas quantidades.",
    germination: "de 4 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 2, title: "Profundidade", description: "0,5 cm" },
          { order: 3, title: "Semeio direto", description: "30 cm x 30 cm" },
          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "30 cm x 30 cm",
          },
          { order: 5, title: "Peso", description: "150 - 250 g" },
          {
            order: 6,
            title: "Colheita",
            description: "45 a 60 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "5",
    name: "Almeirão Pão-de-Açúcar",
    scientificName: "Cichorium intybus",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/almeirao-pao-de-acucar_nigiqv.jpg",
    howToPlant:
      "Plante em solo fértil, solto e bem drenado. Faça canteiros altos e adicione composto orgânico. Semeie diretamente e mantenha o solo úmido.",
    climate: "Clima ameno",
    description: "Folhas longas e verdes, com sabor levemente amargo.",
    tips: "Pode ser cultivado o ano todo em regiões de clima suave.",
    germination: "de 7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Semeio direto", description: "30 cm x 30 cm" },
          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "35 cm x 30 cm",
          },
          { order: 5, title: "Peso", description: "250 - 350 g" },
          {
            order: 6,
            title: "Colheita",
            description: "60 a 70 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "6",
    name: "Beterraba Early Wonder",
    scientificName: "Beta vulgaris",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/beterraba-early-wonder_mdqxds.jpg",
    howToPlant:
      "Prefere solos leves e ricos em matéria orgânica. Misture húmus e adube com NPK 4-14-8. Mantenha o solo úmido, sem encharcar.",
    climate: "Clima ameno",
    description: "Raiz arredondada, casca lisa e polpa vermelha intensa.",
    tips: "Utilize as folhas em refogados, pois são ricas em ferro.",
    germination: "de 5 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 2, title: "Profundidade", description: "1,5 cm" },
          { order: 3, title: "Semeio direto", description: "20 cm x 20 cm" },
          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "25 cm x 25 cm",
          },
          { order: 5, title: "Peso", description: "100 - 150 g" },
          {
            order: 6,
            title: "Colheita",
            description: "70 a 80 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "7",
    name: "Cebolinha Verde",
    scientificName: "Allium fistulosum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/cebolinha-verde_polbiv.jpg",
    howToPlant:
      "Prefira solos leves, ricos em matéria orgânica e bem drenados. Pode ser plantada por sementes ou mudas.",
    climate: "Clima ameno",
    description:
      "Folhas longas, cilíndricas e de sabor suave, amplamente usada em temperos.",
    tips: "Pode ser replantada após o corte, pois rebrota com facilidade.",
    germination: "de 7 a 14 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Semeio direto", description: "20 cm x 10 cm" },
          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "25 cm x 15 cm",
          },
          { order: 5, title: "Peso", description: "50 - 100 g" },
          {
            order: 6,
            title: "Colheita",
            description: "90 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "8",
    name: "Coentro Verdão",
    scientificName: "Coriandrum sativum",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/coentro-verdao_cn4sja.jpg",
    howToPlant:
      "Semeie diretamente em canteiros bem drenados, com adição de composto orgânico. Evite locais de sol forte.",
    climate: "Clima quente",
    description: "Erva aromática com folhas verdes e intensamente perfumadas.",
    tips: "Faça semeaduras sucessivas para ter folhas frescas sempre.",
    germination: "de 7 a 15 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Semeio direto", description: "20 cm x 20 cm" },
          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "25 cm x 20 cm",
          },
          { order: 5, title: "Peso", description: "30 - 50 g" },
          {
            order: 6,
            title: "Colheita",
            description: "45 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "9",
    name: "Couve Manteiga",
    scientificName: "Brassica oleracea",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/couve-manteiga_xddwuk.jpg",
    howToPlant:
      "Plante em solo fértil e bem drenado, com adição de composto orgânico. Prefira locais de sol pleno.",
    climate: "Clima ameno",
    description:
      "Folhas largas, verde-escuras e macias, ideais para refogados.",
    tips: "Retire folhas externas e mantenha o caule para rebrota contínua.",
    germination: "de 6 a 10 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 2, title: "Profundidade", description: "1 cm" },
          { order: 3, title: "Semeio direto", description: "60 cm x 50 cm" },
          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "70 cm x 60 cm",
          },
          { order: 5, title: "Peso", description: "500 - 800 g" },
          {
            order: 6,
            title: "Colheita",
            description: "80 a 100 dias após a semeadura",
          },
        ],
      },
    },
  },
  {
    id: "10",
    name: "Espinafre Nova Zelândia",
    scientificName: "Tetragonia tetragonioides",
    image_url:
      "https://res.cloudinary.com/ddiv5waqs/image/upload/v1760860108/espinafre-nova-zelandia_zsbtlj.jpg",
    howToPlant:
      "Semeie diretamente no local definitivo em solo fértil, rico em matéria orgânica. Regue diariamente em pequenas quantidades.",
    climate: "Clima quente",
    description:
      "Folhas suculentas e verdes, com alto teor de ferro e vitaminas.",
    tips: "Corte as folhas externas e deixe o centro para rebrota.",
    germination: "de 10 a 20 dias",
    plantInfo: {
      createMany: {
        data: [
          { order: 2, title: "Profundidade", description: "2 cm" },
          { order: 3, title: "Semeio direto", description: "40 cm x 40 cm" },
          {
            order: 4,
            title: "Espaçamento após raleio",
            description: "45 cm x 45 cm",
          },
          { order: 5, title: "Peso", description: "150 - 250 g" },
          {
            order: 6,
            title: "Colheita",
            description: "90 dias após a semeadura",
          },
        ],
      },
    },
  },
];
