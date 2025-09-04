import { Section } from "@/components/section";
import { Col, Grid } from "../_components";
import { ImageCard } from "@/components/image-card";
import { Title } from "@/components/title";

export function Section01() {
  return (
    <Section>
      <div className="mb-4 text-center">
        <Title as="h1">Como Construir Sua Horta</Title>
      </div>
      <Grid>
        <Col>
          <p>
            O interesse por hortas orgânicas caseiras está crescendo, e não é à
            toa. É uma forma de ter alimentos mais saudáveis e frescos, além de
            ser um excelente hobby para relaxar e se reconectar com a natureza.
          </p>
          <p>
            Ter sua própria horta pode parecer um desafio no começo, mas nós
            estamos aqui para mostrar que é mais fácil do que você imagina!
          </p>
          <p>
            Preparamos algumas dicas essenciais para te ajudar a dar os
            primeiros passos e cuidar das suas hortaliças.
          </p>
        </Col>
        <Col>
          <ImageCard
            src="/horta/001.png"
            alt="Uma horta repleta de plantas."
            caption="Gerada por IA"
          />
        </Col>
      </Grid>
    </Section>
  );
}
