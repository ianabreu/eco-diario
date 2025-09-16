import { Prisma } from "@/generated/prisma";

export const cenouraBrasilia: Prisma.PlantCreateInput = {
  name: "Cenoura Brasília",
  scientificName: "Daucus carota",
  image_url: "/plants/cenoura.png",
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
};
