import { Section } from "@/components/section";
import { Col, Grid, ImageCard, Title } from "../_components";

export function Section06() {
  return (
    <Section>
      <Title>Escolha as plantas certas</Title>
      <Grid>
        <Col>
          <p>
            A melhor horta é aquela que se adapta à sua rotina e ao seu espaço.
            Para escolher o que plantar, pense em três pontos principais:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="list-disc ml-6">
              <strong>Clima e Espaço</strong>: Considere o tempo da sua região e
              o espaço que você tem disponível na sua horta. Algumas plantas
              precisam de mais sol ou mais espaço para crescer.
            </li>
            <li className="list-disc ml-6">
              <strong>Seu Tempo</strong>: Algumas plantas exigem mais cuidado
              que outras. Escolha as que se encaixam na sua rotina para evitar
              frustrações.
            </li>
          </ul>
          <p>
            Felizmente, existem muitas opções fáceis de cuidar que se dão bem em
            quase qualquer lugar, como{" "}
            <strong>
              salsa, hortelã, manjericão, abóbora, batata-doce e pimentas.
            </strong>
          </p>
        </Col>
        <Col>
          <ImageCard
            src="/horta/006.png"
            alt="Uma variedade colorida de hortaliças e vegetais frescos e diversos, incluindo cenouras, tomates, pimentões e alface."
            caption="Escolha as plantas ideais para sua horta com base no clima, no espaço disponível e no seu tempo."
          />
        </Col>
      </Grid>
    </Section>
  );
}
