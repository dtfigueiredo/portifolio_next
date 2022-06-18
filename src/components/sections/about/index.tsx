import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h2>Sobre Mim:</h2>
      <div>
        <div>
          <h4>Minha maior qualidade é aprender o que eu ainda não sei.</h4>
          <p>
            Estou sempre em busca de adquirir conhecimento, seja para evoluir nas tecnologias que já sei, como também adquirindo conhecimento sobre novas tecnologias. Ao longo da
            minha experiência profissional, desenvolvi habilidades como: Comunicação, Gestão de Equipes, Gestão de Conflitos, Liderança de Equipes.
          </p>
          <span>
            Algumas palavras que resumem minha rotina como desenvolvedor front-end são: Scrum, JavaScript, React.Js, Styled-Components, Css-in-Js, Sass, Git e Github, Figma e
            AdobeXD.
          </span>
        </div>
        <div>
          <Image width="100px" height="100px" src="https://avatars.githubusercontent.com/u/85001250?v=4" alt="Daniel Figueiredo" />
        </div>
      </div>
    </>
  );
}
