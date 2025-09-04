import { Section } from "@/components/section";
import { Col, Grid } from "../_components";
import { ImageCard } from "@/components/image-card";
import { Title } from "@/components/title";

export function Section02() {
  return (
    <Section>
      <div className="mb-4 text-center">
        <Title>Planejamento da Área</Title>{" "}
      </div>
      <Grid>
        <Col>
          <p>
            Tudo começa com um bom plano. Antes de colocar a mão na terra,
            planejar o espaço da sua horta é essencial.
          </p>
          <p>
            Comece definindo o tamanho e o objetivo. É para consumo próprio ou
            para compartilhar com a família? Depois, observe o ambiente: qual
            área recebe mais sol? É de fácil acesso?
          </p>
          <p>
            Com base nessas respostas, faça uma lista de tudo o que você vai
            precisar. Anote desde as sementes e mudas até as ferramentas
            básicas, como uma pá de jardinagem e um regador.
          </p>
          <p>
            <strong>Dica Extra</strong>: Se você tem animais de estimação em
            casa, considere instalar uma cerca de proteção. Isso vai garantir
            que suas plantinhas cresçam em segurança.
          </p>
        </Col>
        <Col>
          <ImageCard
            src="/horta/002.png"
            alt="Uma horta comunitária vibrante com diversas pessoas de diferentes idades cuidando de canteiros de vegetais."
            caption="Planejamento é o primeiro passo para uma horta de sucesso."
          />
        </Col>
      </Grid>
    </Section>
  );
}
