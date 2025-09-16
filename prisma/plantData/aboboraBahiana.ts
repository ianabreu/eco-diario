import { Prisma } from "@/generated/prisma";

export const aboboraBahiana: Prisma.PlantCreateInput = {
  name: "Abóbora Bahiana Tropical",
  scientificName: "Cucurbita moschata",
  image_url: "/plants/abobrinha.png",
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
};
