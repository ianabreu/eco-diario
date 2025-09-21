"use server";
import prisma from "@/lib/prisma";

export async function getQuestions(numQuestions: number) {
  await prisma.plant.findMany({
    select: { id: true, image_url: true, name: true },
  });
  return [
    {
      id: "1",
      question:
        "Qual é a principal vantagem de praticar a compostagem em casa?",
      alternatives: [
        {
          id: "1",
          content:
            "Diminui a quantidade de lixo seco enviado para aterros sanitários.",
          isCorrect: false,
          explanation:
            "A compostagem trata resíduos orgânicos, não o lixo seco.",
        },
        {
          id: "2",
          content:
            "Ajuda a eliminar o desperdício de energia elétrica em casa.",
          isCorrect: false,
          explanation: "Não há relação direta com energia elétrica.",
        },
        {
          id: "3",
          content:
            "Transforma resíduos orgânicos em adubo, enriquecendo o solo.",
          isCorrect: true,
          explanation: "Esse é o objetivo principal da compostagem.",
        },
        {
          id: "4",
          content: "Aumenta a produção de gases poluentes na atmosfera.",
          isCorrect: false,
          explanation:
            "Ao contrário, reduz gases como o metano liberados em aterros.",
        },
      ],
    },
    {
      id: "2",
      question: "Qual é a principal fonte de energia renovável no Brasil?",
      alternatives: [
        {
          id: "1",
          content: "Energia solar",
          isCorrect: false,
          explanation: "Ainda está crescendo, mas não é a principal.",
        },
        {
          id: "2",
          content: "Energia eólica",
          isCorrect: false,
          explanation: "Importante, mas não é a principal no Brasil.",
        },
        {
          id: "3",
          content: "Energia hidrelétrica",
          isCorrect: true,
          explanation: "O Brasil depende fortemente de hidrelétricas.",
        },
        {
          id: "4",
          content: "Energia nuclear",
          isCorrect: false,
          explanation: "Poucas usinas no Brasil, não é a principal.",
        },
      ],
    },
    {
      id: "3",
      question: "Qual renovável no Brasil?",
      alternatives: [
        {
          id: "1",
          content: " solar",
          isCorrect: false,
          explanation: "Ainda está crescendo, mas não é a principal.",
        },
        {
          id: "2",
          content: "Energia ",
          isCorrect: true,
          explanation: "Importante, mas não é a principal no Brasil.",
        },
        {
          id: "3",
          content: "Energia hidrelétrica",
          isCorrect: false,
          explanation: "O Brasil depende fortemente de hidrelétricas.",
        },
        {
          id: "4",
          content: "Energia nuclear",
          isCorrect: false,
          explanation: "Poucas usinas no Brasil, não é a principal.",
        },
      ],
    },
  ];
}
// export async function getPlantDetails(plantId: string) {
//   const plant = await prisma.plant.findUnique({
//     where: { id: plantId },
//     include: { plantInfo: true },
//   });

//   return plant;
// }
