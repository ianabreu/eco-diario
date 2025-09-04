import { Section } from "@/components/section";
import { Col, Grid } from "../_components";
import { ImageCard } from "@/components/image-card";
import { Title } from "@/components/title";

export function Section08() {
  return (
    <Section>
      <div className="mb-4 text-center">
        <Title>Plantio e cuidados diários</Title>
      </div>
      <Grid>
        <Col>
          <p>
            Com o solo preparado, é hora de dar vida à sua horta! No momento de
            plantar a semente ou a muda, misture a terra com adubo orgânico,
            garantindo que a planta comece a crescer com todos os nutrientes
            necessários.
          </p>
          <p>
            Após o plantio, a manutenção diária é fundamental. Para que sua
            horta cresça saudável e produtiva:
          </p>
          <ul className="flex flex-col gap-2">
            <li className="list-disc ml-6">
              <strong>Regue com frequência</strong>: Mantenha o solo sempre
              úmido, mas evite encharcar. O melhor horário para regar é no
              início da manhã ou no final da tarde.
            </li>
            <li className="list-disc ml-6">
              <strong>Adube</strong>: Para repor os nutrientes, faça uma nova
              adubação a cada 30 dias, utilizando fertilizantes orgânicos.
            </li>
            <li className="list-disc ml-6">
              <strong>Proteja</strong>: Fique de olho em pragas e use repelentes
              naturais para manter suas plantas seguras.
            </li>
          </ul>
        </Col>
        <Col>
          <ImageCard
            src="/horta/008.png"
            alt="Pessoas regando e cuidando de uma horta exuberante, com diversas hortaliças verdes e saudáveis."
            caption="Regue, adube e proteja para uma horta sempre produtiva."
          />
        </Col>
      </Grid>
    </Section>
  );
}
