import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "html", color: "#dd4b25", icon: SiHtml5 },
    { name: "javascript", color: "#efd81d", icon: SiJavascript },
    { name: "typescript", color: "#2f74c0", icon: SiTypescript },
    { name: "reactJs", color: "#5ed3f3", icon: SiReact },
    { name: "nextJs", color: "#000000", icon: SiNextdotjs },
    { name: "css", color: "#254bdd", icon: SiCss3 },
    { name: "tailwind", color: "#38bdf8", icon: SiTailwindcss },
    { name: "sass", color: "#c96195", icon: SiSass },
    { name: "styled-Components", color: "#e489d3", icon: SiStyledcomponents },
  ];

  return (
    <>
      <h2>Minhas Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <li key={`${index}-${skill.name}`}>
            <div color={skill.color}>
              <p>{skill.name}</p>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}
