import { Section } from "@/components/section";
import { Col, Grid } from "../_components";
import { ImageCard } from "@/components/image-card";
import { Title } from "@/components/title";

export function Section05() {
  return (
    <Section>
      <div className="mb-4 text-center">
        <Title>Prepare o solo para o plantio</Title>
      </div>

      <Grid>
        <Col>
          <p>
            Com a área limpa, é a hora de preparar o terreno. O solo ideal para
            a horta não pode ser duro ou cheio de pedras.
          </p>
          <p>
            O segredo é garantir uma terra solta e rica em nutrientes. Use uma
            enxada para revirar o solo. Isso vai deixá-lo mais macio e solto,
            criando o ambiente perfeito para as raízes das plantas crescerem
            fortes e saudáveis.
          </p>
        </Col>
        <Col>
          <ImageCard
            src="/horta/005.png"
            alt="Mãos areando e preparando o solo em um canteiro, com representações gráficas abstratas de moléculas flutuando acima da terra."
            caption="Garanta um solo solto e fértil: a base para raízes fortes e plantas saudáveis."
          />
        </Col>
      </Grid>
    </Section>
  );
}
