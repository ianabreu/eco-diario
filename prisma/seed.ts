import { PrismaClient, Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();
const plantsSeed: Prisma.PlantCreateInput[] = [
  {
    name: "Abobrinha",
    scientificName: "Cucurbita pepo",
    image: "/plants/abobrinha.png",
    shortDescription:
      "A abobrinha é um vegetal de crescimento rápido e alta produtividade, ideal para quem busca uma colheita farta. Seu sabor suave e textura macia a tornam versátil na cozinha, perfeita para saladas, sopas e refogados.",
    tip: "Verifique a sua planta diariamente, pois os frutos da abobrinha crescem muito rápido. Colher com frequência incentiva a planta a produzir ainda mais.",
    qualities: {
      create: [
        {
          title: "Crescimento Rápido",
          description:
            "Uma das hortaliças mais rápidas a dar frutos, permitindo várias colheitas em uma única estação.",
        },
        {
          title: "Alta Produtividade",
          description:
            "Uma única planta de abobrinha pode gerar uma grande quantidade de frutos, garantindo fartura na sua horta.",
        },
        {
          title: "Fácil de Cuidar",
          description:
            "É uma planta robusta, que não exige muitos cuidados e é tolerante a diferentes condições climáticas.",
        },
        {
          title: "Versatilidade",
          description:
            "Pode ser usada de diversas formas na culinária, tanto em pratos salgados quanto doces.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "A abobrinha adora calor. O melhor período para o plantio é na primavera e no verão. Evite plantá-la no inverno.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo fértil, rico em matéria orgânica e com boa drenagem. Adicione composto orgânico ou esterco para um bom crescimento.",
        },
        {
          title: "Luz",
          description:
            "Necessita de muito sol. Plante em um local que receba pelo menos 6 a 8 horas de sol direto por dia.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido, mas evite molhar as folhas e os frutos para prevenir doenças fúngicas. Regue na base da planta.",
        },
        {
          title: "Espaçamento",
          description:
            "Dê bastante espaço! Deixe cerca de 1 metro de distância entre as plantas para que elas possam crescer livremente e receber luz.",
        },
        {
          title: "Colheita",
          description:
            "Colha as abobrinhas quando elas estiverem pequenas a médias (15-20 cm). Frutos maiores tendem a ser menos saborosos e ter mais sementes.",
        },
      ],
    },
  },
  {
    name: "Alface",
    scientificName: "Lactuca sativa",
    image: "/plants/alface.png",
    shortDescription:
      "A alface é uma das hortaliças mais populares e acessíveis, ideal para quem está começando uma horta. Com suas folhas crocantes e refrescantes, é a base de muitas saladas e uma ótima fonte de nutrientes.",
    tip: "A alface roxa, além de ser linda na salada, é rica em antioxidantes! Experimente plantar diferentes variedades para dar mais cor e nutrição à sua horta.",
    qualities: {
      create: [
        {
          title: "Fácil de Cultivar",
          description:
            "Perfeita para jardineiros de primeira viagem, com poucas exigências de manejo.",
        },
        {
          title: "Crescimento Rápido",
          description:
            "Em poucas semanas, suas folhas já estarão prontas para a colheita.",
        },
        {
          title: "Produção Contínua",
          description:
            "Ao colher as folhas mais externas, a planta continua a produzir.",
        },
        {
          title: "Adaptável",
          description:
            "Pode ser cultivada em canteiros, vasos e até jardineiras.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "Pode ser plantada durante todo o ano em Livramento do Brumado, desde que se evite os períodos de sol mais intenso durante o dia, preferindo o plantio em épocas mais amenas ou com sombreamento parcial nas horas mais quentes.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solos ricos em matéria orgânica, leves e bem drenados. Adicione composto orgânico para um bom desenvolvimento.",
        },
        {
          title: "Luz",
          description:
            "Necessita de pelo menos 4 a 6 horas de sol direto por dia.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido, mas evite encharcar. Regue pela manhã ou no final da tarde.",
        },
        {
          title: "Espaçamento",
          description:
            "Plante as mudas com cerca de 20 a 30 cm de distância entre elas para que cresçam bem.",
        },
        {
          title: "Colheita",
          description:
            "Colha as folhas externas quando estiverem bem desenvolvidas. Isso estimula a planta a produzir mais.",
        },
      ],
    },
  },
  {
    name: "Cebolinha",
    scientificName: "Allium schoenoprasum",
    image: "/plants/cebolinha.png",
    shortDescription:
      "A cebolinha é um tempero indispensável na cozinha, conhecida pelo seu sabor suave e fresco. Ela é extremamente fácil de cuidar e se adapta bem a diferentes ambientes, sendo perfeita para jardineiros iniciantes.",
    tip: "Para incentivar a cebolinha a ficar mais forte e compacta, pode-a periodicamente. E lembre-se: ela é uma ótima companhia para cenouras e alface na horta, ajudando a afastar algumas pragas.",
    qualities: {
      create: [
        {
          title: "Fácil de Cultivar",
          description:
            "Perfeita para jardineiros de primeira viagem, com poucas exigências de manejo e crescimento rápido.",
        },
        {
          title: "Produção Contínua",
          description:
            "Ao cortar as hastes para uso, ela continua a brotar, garantindo um suprimento constante.",
        },
        {
          title: "Resistente",
          description:
            "Se adapta bem a vasos e canteiros, sendo tolerante a diferentes condições de sol e clima.",
        },
        {
          title: "Versátil",
          description:
            "É um tempero que pode ser usado em uma variedade de pratos, de saladas a sopas.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "Pode ser plantada em qualquer época do ano, desde que o clima não seja excessivamente frio.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo fértil, bem drenado e rico em matéria orgânica. Adicionar composto na terra ajuda no crescimento.",
        },
        {
          title: "Luz",
          description:
            "Cresce melhor sob sol pleno ou meia-sombra, recebendo pelo menos 4 horas de sol por dia.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo úmido, mas não encharcado. Regue com frequência, especialmente nos dias mais quentes.",
        },
        {
          title: "Espaçamento",
          description:
            "Plante as sementes ou mudas em pequenos aglomerados, mantendo um espaçamento de cerca de 10-15 cm entre os maços.",
        },
        {
          title: "Colheita",
          description:
            "Corte as hastes maiores na base, deixando as menores para continuar crescendo. Não colha mais de 1/3 da planta de uma vez.",
        },
      ],
    },
  },
  {
    name: "Cenoura",
    scientificName: "Daucus carota",
    image: "/plants/cenoura.png",
    shortDescription:
      "A cenoura é um vegetal de raiz, conhecido por sua cor alaranjada e sabor adocicado. É uma excelente fonte de vitaminas, fácil de cultivar e uma adição colorida à sua horta, sendo perfeita para saladas, sucos e pratos cozidos.",

    tip: "Sementes de cenoura demoram um pouco para germinar. Para manter a terra úmida nesse período, cubra o canteiro com palha ou um pedaço de tecido até que as primeiras mudas apareçam.",
    qualities: {
      create: [
        {
          title: "Fácil de Cultivar",
          description:
            "Exige poucos cuidados e pode ser plantada diretamente no solo, sendo ideal para iniciantes.",
        },
        {
          title: "Fonte de Nutrientes",
          description:
            "Rica em betacaroteno e vitamina A, a cenoura é ótima para a saúde da visão e do sistema imunológico.",
        },
        {
          title: "Versátil na Cozinha",
          description:
            "Pode ser consumida crua, cozida, em sucos, bolos e diversas outras receitas.",
        },
        {
          title: "Adaptação",
          description:
            "Se adapta bem a vasos e canteiros, desde que o solo seja profundo o suficiente para a raiz crescer.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "Prefere clima ameno. Pode ser plantada no outono e inverno em Livramento do Brumado, e também na primavera e início do verão, desde que a terra seja mantida úmida.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo solto, leve, rico em matéria orgânica e sem pedras, que podem deformar a raiz. Revire bem a terra antes do plantio.",
        },
        {
          title: "Luz",
          description:
            "Necessita de pelo menos 5 a 6 horas de sol direto por dia para um bom desenvolvimento.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido. Regue com frequência, mas com cuidado para não encharcar.",
        },
        {
          title: "Espaçamento",
          description:
            "Plante as sementes em fileiras, com cerca de 5 cm de distância entre elas. Quando as mudas estiverem maiores, retire as mais fracas para manter um espaçamento de 10 cm.",
        },
        {
          title: "Colheita",
          description:
            "A cenoura está pronta para a colheita quando a parte de cima, perto das folhas, começar a sair do solo. Basta puxá-la com cuidado.",
        },
      ],
    },
  },
  {
    name: "Coentro",
    scientificName: "Coriandrum sativum",
    image: "/plants/coentro.png",
    shortDescription:
      "O coentro é uma erva aromática de sabor e aroma marcantes, essencial em muitas culinárias ao redor do mundo. É uma planta que cresce rapidamente e é de fácil cultivo, sendo ideal para dar um toque especial aos seus pratos.",

    tip: "Se a planta começar a florescer, colha as flores e as sementes. As sementes secas podem ser usadas como tempero em diversas receitas.",
    qualities: {
      create: [
        {
          title: "Sabor Único",
          description:
            "Com um sabor forte e fresco, o coentro é indispensável para dar personalidade a molhos, caldos e saladas.",
        },
        {
          title: "Crescimento Rápido",
          description:
            "As folhas podem ser colhidas em poucas semanas, garantindo um suprimento constante de tempero fresco.",
        },
        {
          title: "Versatilidade",
          description:
            "Tanto as folhas quanto as sementes podem ser usadas na cozinha, em diferentes pratos e receitas.",
        },
        {
          title: "Ideal para Vasos",
          description:
            "Se adapta bem ao cultivo em vasos, desde que receba a luz e a rega necessárias.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "O coentro prefere clima ameno e fresco. O plantio no outono e inverno é o mais recomendado. Em locais muito quentes, prefira plantá-lo em meia-sombra.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo leve, fértil, rico em matéria orgânica e com boa drenagem. Adube a terra com composto orgânico antes de plantar.",
        },
        {
          title: "Luz",
          description:
            "Necessita de pelo menos 4 a 6 horas de sol por dia, mas em climas quentes, tolera a meia-sombra.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido, regando com frequência, mas evite encharcar.",
        },
        {
          title: "Espaçamento",
          description:
            "Plante as sementes em fileiras, com cerca de 20 a 30 cm de distância entre elas.",
        },
        {
          title: "Colheita",
          description:
            "Colha as folhas externas da planta, na quantidade que você for utilizar. A colheita regular ajuda a planta a continuar produzindo.",
        },
      ],
    },
  },
  {
    name: "Couve",
    scientificName: "Brassica oleracea var. sabellica",
    image: "/plants/couve.png",
    shortDescription:
      "A couve é uma hortaliça robusta, de folhas verde-escuras, rica em nutrientes e com um sabor marcante. É extremamente adaptável e de fácil cultivo, sendo uma das escolhas preferidas para hortas em climas mais amenos e até em vasos grandes.",

    tip: "A couve é uma ótima opção para plantio em vasos, desde que o recipiente seja grande o suficiente para acomodar o crescimento de suas raízes. Um vaso com pelo menos 30 cm de profundidade é ideal.",
    qualities: {
      create: [
        {
          title: "Alta Produtividade",
          description:
            "Ao colher as folhas externas, a planta continua a produzir por um longo período.",
        },
        {
          title: "Resistência",
          description:
            "É uma planta muito resistente, que suporta diferentes condições de clima e solo.",
        },
        {
          title: "Versátil na Cozinha",
          description:
            "Pode ser usada em saladas, refogados, sucos e sopas, sendo um ingrediente-chave em muitas receitas saudáveis.",
        },
        {
          title: "Rica em Nutrientes",
          description:
            "É uma fonte excelente de vitaminas e minerais, ideal para uma alimentação balanceada.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "A couve se adapta bem a diferentes estações, mas prefere temperaturas mais amenas. Em Livramento do Brumado, pode ser plantada durante todo o ano, com a ressalva de garantir irrigação constante em períodos mais quentes.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solos férteis, ricos em matéria orgânica e com boa drenagem. Adube a terra com composto orgânico antes do plantio.",
        },
        {
          title: "Luz",
          description:
            "Cresce melhor sob sol pleno, com pelo menos 5 horas de luz direta por dia.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido, regando com frequência, mas evite o excesso para não apodrecer as raízes.",
        },
        {
          title: "Espaçamento",
          description:
            "Deixe um espaço de 40 a 60 cm entre as mudas para que as folhas possam se desenvolver completamente.",
        },
        {
          title: "Colheita",
          description:
            "Colha as folhas mais externas e maduras, cortando-as na base. Isso estimula o crescimento de novas folhas no centro da planta.",
        },
      ],
    },
  },
  {
    name: "Hortelã",
    scientificName: "Mentha spicata",
    image: "/plants/hortela.png",
    shortDescription:
      "A hortelã é uma erva aromática e refrescante, indispensável para chás, sucos, sobremesas e temperos. É uma das plantas mais fáceis de cultivar em casa, crescendo rapidamente e se adaptando bem a vasos e pequenos espaços.",

    tip: "Hortelã e outras ervas do gênero Mentha se espalham rapidamente por meio de raízes subterrâneas. Plante-a em um vaso para evitar que ela 'invada' todo o canteiro e tome o espaço das outras plantas.",
    qualities: {
      create: [
        {
          title: "Crescimento Rápido",
          description:
            "Uma das plantas de crescimento mais rápido, o que garante um suprimento constante de folhas frescas.",
        },
        {
          title: "Aroma e Sabor",
          description:
            "Suas folhas exalam um aroma agradável e são perfeitas para dar um toque especial a diversas receitas.",
        },
        {
          title: "Adaptabilidade",
          description:
            "Pode ser cultivada em vasos, canteiros ou até mesmo em ambientes internos com bastante luz.",
        },
        {
          title: "Propriedades Medicinais",
          description:
            "É conhecida por auxiliar na digestão e aliviar dores de cabeça, sendo muito utilizada em chás e infusões.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "A hortelã se adapta bem a diferentes climas, mas o melhor período para o plantio é na primavera e no verão.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo úmido, rico em matéria orgânica e com boa drenagem. Adicione composto orgânico à terra para um melhor desenvolvimento.",
        },
        {
          title: "Luz",
          description:
            "Cresce melhor sob meia-sombra, recebendo luz solar indireta na maior parte do dia. Sol pleno pode queimar as folhas em climas mais quentes.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido. Regue com frequência, especialmente nos dias mais quentes, mas evite encharcar.",
        },
        {
          title: "Espaçamento",
          description:
            "A hortelã se espalha rapidamente! Se for plantar no canteiro, deixe bastante espaço ou use um vaso para controlar o crescimento.",
        },
        {
          title: "Colheita",
          description:
            "Colha as folhas e os galhos mais novos. Para manter a planta cheia, pode-a periodicamente para evitar que as hastes fiquem longas e finas.",
        },
      ],
    },
  },
  {
    name: "Pimentão",
    scientificName: "Capsicum annuum",
    image: "/plants/pimentao.png",
    shortDescription:
      "O pimentão é um vegetal colorido e saboroso que adiciona um toque especial a diversas receitas. É uma planta que adora sol e calor, sendo ideal para ser cultivada no verão e em locais com clima tropical ou subtropical.",

    tip: "Para evitar que as pragas ataquem os seus pimentões, plante cebolinha ou alho por perto. Eles agem como repelentes naturais e ajudam a proteger sua horta.",
    qualities: {
      create: [
        {
          title: "Versatilidade",
          description:
            "Pode ser consumido cru em saladas, recheado, assado ou refogado, sendo um ingrediente-chave em muitas cozinhas.",
        },
        {
          title: "Rica em Nutrientes",
          description:
            "É uma ótima fonte de vitaminas, especialmente vitamina C, e antioxidantes.",
        },
        {
          title: "Variedade de Cores",
          description:
            "Com pimentões verdes, amarelos, vermelhos e até roxos, você pode dar mais cor e beleza à sua horta e aos seus pratos.",
        },
        {
          title: "Adaptação",
          description:
            "Adapta-se bem ao cultivo em vasos grandes, desde que receba a luz solar necessária.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "O pimentão precisa de clima quente. A melhor época para o plantio é na primavera e no verão.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo fértil, rico em matéria orgânica e com boa drenagem. Adicione composto orgânico à terra para um bom desenvolvimento.",
        },
        {
          title: "Luz",
          description:
            "Necessita de bastante sol! Plante em um local que receba pelo menos 6 a 8 horas de sol direto por dia.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo úmido, regando de forma consistente. A falta de água pode prejudicar o crescimento e a produção dos frutos.",
        },
        {
          title: "Espaçamento",
          description:
            "Plante as mudas com cerca de 40 a 50 cm de distância uma da outra para que as plantas tenham espaço para se desenvolver.",
        },
        {
          title: "Colheita",
          description:
            "Colha os pimentões quando estiverem com a cor e o tamanho desejados. Colher regularmente incentiva a planta a produzir mais frutos.",
        },
      ],
    },
  },
  {
    name: "Rúcula",
    scientificName: "Eruca sativa",
    image: "/plants/rucula.png",
    shortDescription:
      "A rúcula é uma hortaliça de folhas verdes com um sabor picante e levemente amargo, que adiciona um toque especial a saladas e sanduíches. É uma planta que cresce rapidamente e é muito fácil de cultivar, ideal para quem está começando uma horta.",

    tip: "Se a rúcula começar a produzir flores, colha-as! Elas também são comestíveis, com um sabor suave, e podem ser usadas para decorar saladas.",
    qualities: {
      create: [
        {
          title: "Sabor Marcante",
          description:
            "Seu sabor apimentado e característico a torna um ingrediente indispensável para saladas e molhos.",
        },
        {
          title: "Rápido Crescimento",
          description:
            "As folhas podem ser colhidas em apenas 30 a 40 dias após o plantio, garantindo uma colheita rápida.",
        },
        {
          title: "Versatilidade",
          description:
            "Pode ser consumida crua ou cozida, e é um ótimo complemento para pizzas, massas e sopas.",
        },
        {
          title: "Resistente",
          description:
            "Adapta-se bem ao cultivo em vasos, canteiros e até mesmo em sacadas, com poucos cuidados.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "A rúcula cresce melhor em clima ameno. Pode ser plantada no outono ou na primavera. Em Livramento do Brumado, evite plantá-la nos meses mais quentes, pois o sabor pode ficar mais forte.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo fértil, rico em matéria orgânica e bem drenado. Adicione composto orgânico à terra para um melhor desenvolvimento.",
        },
        {
          title: "Luz",
          description:
            "Necessita de pelo menos 4 horas de sol direto por dia, mas tolera a meia-sombra, especialmente em dias de calor.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido, mas evite encharcar. Regue com frequência, especialmente durante o verão.",
        },
        {
          title: "Espaçamento",
          description:
            "Plante as sementes em fileiras, com cerca de 15 cm de distância entre elas.",
        },
        {
          title: "Colheita",
          description:
            "Colha as folhas externas quando tiverem cerca de 10 a 15 cm de comprimento. Isso estimula a planta a continuar produzindo.",
        },
      ],
    },
  },
  {
    name: "Tomate-cereja",
    scientificName: "Solanum lycopersicum var. cerasiforme",
    image: "/plants/tomate-cereja.png",
    shortDescription:
      "Pequeno, suculento e cheio de sabor, o tomate-cereja é uma das melhores opções para quem quer cultivar tomates em espaços pequenos, como vasos e jardineiras. É uma planta que exige sol e cuidados, mas recompensa com uma colheita abundante e deliciosa.",

    tip: "Transplante as mudas para um local definitivo quando elas tiverem entre 15 e 20 cm de altura. Use uma estaca ou suporte para ajudar a planta a se manter em pé e evitar que os frutos toquem o solo.",
    qualities: {
      create: [
        {
          title: "Ideal para Vasos",
          description:
            "Seu porte menor faz dele a escolha perfeita para cultivo em varandas, sacadas ou pequenos espaços.",
        },
        {
          title: "Produção Abundante",
          description:
            "Uma única planta pode produzir centenas de pequenos frutos ao longo da estação, garantindo uma colheita farta.",
        },
        {
          title: "Versatilidade Culinária",
          description:
            "Perfeito para saladas, molhos, espetinhos e petiscos, adicionando um toque de cor e frescor.",
        },
        {
          title: "Rápido Crescimento",
          description:
            "Cresce e amadurece relativamente rápido, permitindo que você desfrute dos frutos em poucas semanas.",
        },
      ],
    },
    steps: {
      create: [
        {
          title: "Melhor Época",
          description:
            "Plante na primavera ou no verão, pois o tomate-cereja adora clima quente e sol. Evite o plantio em épocas de frio intenso.",
        },
        {
          title: "Solo Ideal",
          description:
            "Prefere solo rico em matéria orgânica, bem drenado e levemente ácido. Use adubo orgânico para nutri-lo.",
        },
        {
          title: "Luz",
          description:
            "Necessita de pelo menos 6 a 8 horas de sol direto por dia para crescer e frutificar bem.",
        },
        {
          title: "Rega",
          description:
            "Mantenha o solo sempre úmido, regando consistentemente. Evite molhar as folhas para prevenir doenças.",
        },
        {
          title: "Espaçamento",
          description:
            "Se for plantar em canteiros, deixe cerca de 40 a 60 cm de distância entre as plantas para permitir que cresçam livremente.",
        },
        {
          title: "Colheita",
          description:
            "Colha os tomates quando estiverem completamente maduros e com cor vibrante. Continue colhendo regularmente para incentivar a planta a produzir mais.",
        },
      ],
    },
  },
];
export async function main() {
  for (const plant of plantsSeed) {
    await prisma.plant.create({ data: plant });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
