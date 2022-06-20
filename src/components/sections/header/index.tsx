import Image from "next/image";

import logo from "../../../../public/logo.png";
import { NavItem, HeaderWrapper, ImageBox, Navigation, UList } from "../../../styles/styles";
import { Heading1 } from "../../common/headings";

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
        <UList>
          <NavItem>About</NavItem>

          <NavItem>Contact</NavItem>

          <NavItem>Projects</NavItem>

          <NavItem>Skills</NavItem>
        </UList>
      </Navigation>
    </HeaderWrapper>
  );
}
