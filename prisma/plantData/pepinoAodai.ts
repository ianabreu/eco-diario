import { Prisma } from "@/generated/prisma";

export const pepinoAodai: Prisma.PlantCreateInput = {
  id: "3",
  name: "Pepino Aodai",
  scientificName: "Cucumis sativus",
  image_url:
    "https://res.cloudinary.com/ddiv5waqs/image/upload/v1759118657/pepino-aodai_lg6taw.jpg",
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
};
