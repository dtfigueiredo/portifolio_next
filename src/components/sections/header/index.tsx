import Image from "next/image";

import logo from "../../../../public/logo.png";
import { NavItem, HeaderWrapper, ImageBox, Navigation, Heading1 } from "../../../styles/styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <ImageBox>
        {/* <Image src={logo} width={96} height={96} /> */}

        <Heading1>
          <span>Daniel</span>
          <span>Figueiredo</span>
        </Heading1>
      </ImageBox>

      <Navigation>
        <NavItem>About</NavItem>

        <NavItem>Contact</NavItem>

        <NavItem>Projects</NavItem>

        <NavItem>Skills</NavItem>
      </Navigation>
    </HeaderWrapper>
  );
}
