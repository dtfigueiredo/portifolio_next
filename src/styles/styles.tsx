import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --font-inters: 'Inter', sans-serif;
    --font-poppins: 'Poppins', sans-serif;
    --font-open-sans: 'Open Sans', sans-serif;

    --color-body-bg: #1a1a1a;
    /* --gradient-body-bg: linear-gradient(315deg, rgba(26,26,26,1) 0%, rgba(46,66,77,1) 80%, rgba(91,178,145,1) 100%); */
    --gradient-body-bg: linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(46,66,77,1) 100%);
    --color-green: #5bb291;
    --font-light: #f4f6fa;
    --font-light-sec: #dbdbdb;

    --bg3: #98dad9;

    --width-web: 1100px;
    --width-tablet: 90%;
    --width-mobile: 100%;

    --rounded: 0.625rem;
  } 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    z-index: 1;
  } 
  
  body{
    min-height: 100vh;
    position: relative;
    background: var(--color-body-bg);
    background: var(--gradient-body-bg);
    color: var(--font-light);
    font-family: var(--font-inters);
  }

  html{
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar{
    width: 0;
  }

`

export const HeaderWrapper = styled.header`
	margin-top: 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 425px) {
		flex-direction: column;
	}
`

export const ImageBox = styled.figure`
	width: fit-content;
	padding: 0.5rem;
`

export const Navigation = styled.nav`
	width: 100%;
`

export const UList = styled.ul<{ component: string }>`
	width: ${props => {
		switch (props.component) {
			case 'header':
				return 'unset'
			default:
				return '100%'
		}
	}};
	flex-wrap: wrap;

	display: flex;
	justify-content: ${props => {
		switch (props.component) {
			case 'header':
				return 'flex-end'
			default:
				return 'center'
		}
	}};
	align-items: center;

	@media screen and (max-width: 425px) {
		justify-content: center;
	}
`

export const NavItem = styled.li`
	padding: 1rem;
	margin: 0 0.5rem;

	font-size: 1.25rem;
	font-weight: normal;

	border-bottom: 3px solid transparent;

	transition: all 300ms ease-in-out;

	&:hover {
		transform: scale(1.25);
		font-weight: bold;
		color: var(--color-green);
		border-bottom: 3px solid var(--color-green);
		cursor: pointer;
	}
`

export const Main = styled.main`
	margin: 5rem auto 0;

	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	@media screen and (max-width: 425px) {
		align-items: center;
		margin-top: 4rem;
	}
`

export const PhotoBox = styled.figure`
	width: 100%;
	padding: 0.5rem;

	display: flex;
	justify-content: center;
	align-items: center;

	/* -webkit-animation: slide-in-left 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  } */
`

export const AboutArticle = styled.article`
	margin-left: 1rem;
	padding: 0 1rem;
	align-self: flex-start;
`

export const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 425px) {
		flex-direction: column;
	}
`

export const ContactBox = styled.div`
	margin: 5rem auto 0;

	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	@media screen and (max-width: 425px) {
		align-items: center;
		margin-top: 4rem;
	}
`
