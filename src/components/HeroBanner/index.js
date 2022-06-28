import {
  Container,
  HeadsetsContainer,
  SocialContainer,
  HeroContent,
} from "./styles";

import {
  FaShoppingBag,
  FaRegPlayCircle,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import headImg1 from "../../assets/headset/head1.png";
import { useEffect, useState } from "react";

function SocialLinks() {
  return (
    <SocialContainer>
      <FaYoutube />
      <FaTwitter />
      <FaInstagram />
      <FaFacebookF />
    </SocialContainer>
  );
}

export function HeroBanner() {
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const screenWidth = useWindowDimensions();

  return (
    <Container>
      <section>
        <HeroContent>
          <strong>CheckSpeech AI</strong>
          <h1>
            Transcreva suas palavras, <span>de forma facil</span> e com{" "}
            <span>sentimentos</span>
          </h1>
          <p>
            O <span>CheckSpeech AI</span> é um conjunto de APIs de conversão de
            fala em textos, bem como a interpretação do sentimento dominante nos
            dizeres. Nossa solução é treinada em mais de{" "}
            <span>500.000 horas de áudios, transcritos por humanos</span> de uma
            ampla variedade de idades, nacionalidades, sotaques e níveis de
            instruções A API é comercializada no modelo SAAS{" "}
            <span>(software as a service)</span>
          </p>
          <div>
            <button>
              <FaShoppingBag />
              Compre já
            </button>
            <button>
              <FaRegPlayCircle />
              Saiba mais
            </button>
          </div>

          {screenWidth > 1000 && <SocialLinks />}
        </HeroContent>
        <HeadsetsContainer>
          <section>
            <img src={headImg1} alt="#" />
          </section>
        </HeadsetsContainer>
        {screenWidth < 1000 && <SocialLinks />}
      </section>
    </Container>
  );
}
