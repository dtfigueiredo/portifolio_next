import Image from "next/image";

import { FlexDiv, Heading2, Main, PhotoBox } from "../../../styles/styles";

export default function About() {
  const customBorder = "91% 9% 49% 51% / 30% 44% 56% 70%";
  return (
    <Main>
      <Heading2>Sobre Mim</Heading2>
      <FlexDiv>
        <PhotoBox itemProp="about">
          <Image style={{ borderRadius: customBorder }} width={384} height={384} src="https://avatars.githubusercontent.com/u/85001250?v=4" alt="Daniel Figueiredo" />
        </PhotoBox>
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
      </FlexDiv>
    </Main>
  );
}
