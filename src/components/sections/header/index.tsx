import {
	HeaderWrapper,
	ImageBox,
	Navigation,
	NavItem,
	UList,
} from '../../../styles/styles'
import { Heading1 } from '../../common/headings'

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
				<UList component='header'>
					<NavItem>About</NavItem>

					<NavItem>Contact</NavItem>

					<NavItem>Projects</NavItem>

					<NavItem>Skills</NavItem>
				</UList>
			</Navigation>
		</HeaderWrapper>
	)
}
