import { Container, ProductContainer } from "./styles";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export function ProductItem({ title, price, imgUrl, description }) {
  return (
    <ProductContainer>
      <strong>
        <h3>{title}</h3>
      </strong>
      {/* <img src={`/headsets/${imgUrl}.png`} alt={title} /> */}
      <p>{description}</p>
      <AiOutlineArrowDown />
    </ProductContainer>
  );
}

export function OtherModels() {
  return (
    <Container>
      <div>
        <div>
          <h2>Soluções</h2>
          <FiArrowRight className="arrow-right" />
        </div>
        <p>
          Nosso produto é composto pelas
          <br /> seguintes soluções...
        </p>
        <FiArrowDown className="arrow-down" />
      </div>
      <section>
        <ProductItem
          title="Transcrição de Áudio Assíncrono"
          price="1500,95"
          description="API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala."
        />
        <ProductItem
          title="Transcrição de Áudio em tempo real"
          price="900,95"
          description="O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro."
        />
        <ProductItem
          title="Identificação de Idiomas em áudios"
          price="589,95"
          description="Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas."
        />
        <ProductItem
          title="Análise de sentimento a partir do áudio"
          price="589,95"
          description="Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda."
        />
      </section>
    </Container>
  );
}
