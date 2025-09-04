import { Section } from "@/components/section";
import { Col, Grid } from "../_components";
import { ImageCard } from "@/components/image-card";
import { Title } from "@/components/title";

export function Section07() {
  return (
    <Section>
      <div className="mb-4 text-center">
        <Title>Do Recipiente ao Solo</Title>
      </div>
      <Grid>
        <Col>
          <p>
            Para começar sua horta, você pode plantar diretamente no solo já
            preparado ou iniciar suas sementes em recipientes menores.
          </p>
          <Title as="h3" size="medium">
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
          <Title as="h3" size="medium">
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
