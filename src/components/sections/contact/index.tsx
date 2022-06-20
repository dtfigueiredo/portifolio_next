import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { ContactBox, UList } from "../../../styles/styles";
import { DefaultBtn } from "../../common/button";
import { Heading2 } from "../../common/headings";
import { Icons } from "../../common/icon";
import { Paragragh } from "../../common/paragraph";

export default function Contact() {
  const links = [
    { name: "github", href: "https://github.com/dtfigueiredo", icon: FaGithub, color: "#2d333b" },
    { name: "linkedin", href: "https://www.linkedin.com/in/dtfigueiredo/", icon: FaLinkedin, color: "#0a66c2" },
    { name: "whatsapp", href: "https://wa.me/5511974740718?text=Olá%20Daniel", icon: FaWhatsapp, color: "#0cc243" },
  ];

  return (
    <ContactBox>
      <Heading2>Contato</Heading2>
      <UList component="button">
        {links.map((link, index) => (
          <li key={`${index}-${link.name}`}>
            <DefaultBtn href={link.href} target="_blank" rel="noreferrer noopener" color={link.color}>
              <Icons>
                <link.icon />
              </Icons>
              <Paragragh component="button">{link.name}</Paragragh>
            </DefaultBtn>
          </li>
        ))}
      </UList>
    </ContactBox>
  );
}
