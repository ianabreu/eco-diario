import { Section } from "@/components/section";
import { Col, Grid, ImageCard, Title } from "../_components";

export function Section03() {
  return (
    <Section>
      <Title>Entenda o Seu Solo</Title>
      <Grid>
        <Col>
          <p>
            Após planejar, é hora de observar o chão que vai receber suas
            plantas. Para uma horta produtiva, o solo ideal precisa de alguns
            pontos-chave:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="list-disc ml-6">
              <strong>Sol e Abrigo</strong>: Escolha um local plano, que receba
              bastante luz solar, mas que também esteja protegido de ventos
              fortes.
            </li>
            <li className="list-disc ml-6">
              <strong>Drenagem Perfeita</strong>: O solo deve permitir que a
              água escoe bem, sem acumular poças, pois o excesso pode prejudicar
              as raízes.
            </li>
            <li className="list-disc ml-6">
              <strong>Limpeza</strong>: Antes de plantar, faça uma boa limpeza.
              Remova ervas daninhas, pedras, lixos e tudo o que possa atrapalhar
              o crescimento saudável das suas hortaliças.
            </li>
          </ul>
        </Col>
        <Col>
          <ImageCard
            src="/horta/003.png"
            alt="Mãos de uma pessoa trabalhando na terra, removendo pedras e preparando o solo em um canteiro de horta."
            caption="Entenda o seu solo e garanta que suas hortaliças tenham um crescimento saudável e produtivo."
          />
        </Col>
      </Grid>
    </Section>
  );
}
