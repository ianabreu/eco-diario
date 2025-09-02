import { Section } from "@/components/section";
import { Col, Grid, ImageCard, Title } from "../_components";

export function Section04() {
  return (
    <Section>
      <Title>Ferramentas Essenciais</Title>
      <Grid>
        <Col>
          <p>
            Para começar sua horta, você não precisa de muito! Alguns itens
            básicos já são suficientes para dar os primeiros passos:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="list-disc ml-6">
              <strong>Ferramentas de Mão</strong>: Uma pá de jardinagem e uma
              enxada pequena são ótimas para preparar a terra.
            </li>
            <li className="list-disc ml-6">
              <strong>Para Regar</strong>: Um regador simples já faz o trabalho.
            </li>
            <li className="list-disc ml-6">
              <strong>Outros Úteis</strong>: Uma tesoura de poda é boa para
              manter suas plantas saudáveis.
            </li>
          </ul>
          <p>
            Conforme sua horta cresce, você pode pensar em itens adicionais,
            como <strong>etiquetas</strong> para identificar o que está
            plantado, ou até mesmo <strong>uma tela de sombrite</strong> para
            proteger suas plantas do sol mais intenso, dependendo do clima de
            sua região.
          </p>
        </Col>
        <Col>
          <ImageCard
            src="/horta/004.png"
            alt="Uma imagem de ferramentas de jardinagem essenciais, incluindo uma pá de mão, luvas de jardinagem e um regador."
            caption="Com apenas algumas ferramentas básicas, como uma pá e um regador, já é possível dar os primeiros passos para a sua horta."
          />
        </Col>
      </Grid>
    </Section>
  );
}
