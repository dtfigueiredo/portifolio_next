import {
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiNextdotjs,
    SiReact,
    SiSass,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

import { useState } from 'react'

import { ContactBox, FlexDiv, SkillsContainer, SkillsDescription, UList } from '../../../styles/styles'
import { CardBtn } from '../../common/button'
import { Heading2 } from '../../common/headings'
import { Icons } from '../../common/icon'
import { Paragragh } from '../../common/paragraph'

export default function SkillDescription() {

    return (
        <FlexDiv component='description'>
            <Heading2>Skill Title</Heading2>

            <Paragragh component='description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi doloremque quam iusto pariatur molestiae libero aut quos magni labore. Magni?
            </Paragragh>
        </FlexDiv>
    )
}
