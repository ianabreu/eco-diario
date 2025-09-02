import { Section } from "@/components/section";
import { Col, Grid, ImageCard, Title } from "../_components";

export function Section07() {
  return (
    <Section>
      <Title>Do Recipiente ao Solo: Dando Vida à Sua Horta</Title>
      <Grid>
        <Col>
          <p>
            Para começar sua horta, você pode plantar diretamente no solo já
            preparado ou iniciar suas sementes em recipientes menores.
          </p>
          <Title size="md" className="text-left my-0">
            Para a Germinação:
          </Title>
          <ol className="flex flex-col gap-2">
            <li className="list-decimal ml-6">
              <strong>Escolha o Vaso</strong>: Use pequenos vasos (ou até
              bandejas de ovos!) com furos na parte de baixo para a água escoar.
            </li>
            <li className="list-decimal ml-6">
              <strong>Prepare a Terra</strong>: Coloque terra fértil nos
              recipientes e umedeça com um borrifador.
            </li>
            <li className="list-decimal ml-6">
              <strong>Plante as Sementes</strong>: Faça pequenos furos na terra
              e coloque 1 ou 2 sementes em cada um. Cubra com mais terra e
              umedeça novamente.
            </li>
            <li className="list-decimal ml-6">
              <strong>Aguarde</strong>: Mantenha a terra úmida e em local com
              luz indireta até as primeiras mudinhas aparecerem.
            </li>
          </ol>
          <Title size="md" className="text-left my-1">
            Transplantando para a Horta:
          </Title>
          <p>
            Quando as mudas estiverem maiores e fortes, com 2 ou 3 folhas de
            verdade, é hora de transferi-las para o local definitivo na sua
            horta.
          </p>
          <p>
            Faça um buraco no solo já preparado, coloque a muda com cuidado
            (mantendo a terra ao redor da raiz) e cubra, deixando um bom espaço
            entre cada planta para que cresçam sem competir.
          </p>
        </Col>
        <Col>
          <ImageCard
            src="/horta/007.png"
            alt="Mãos transplantando cuidadosamente uma pequena muda de hortaliça para o solo de um canteiro."
            caption="Dê vida à sua horta: transplante as mudas para o solo definitivo e observe-as crescer."
          />
        </Col>
      </Grid>
    </Section>
  );
}
