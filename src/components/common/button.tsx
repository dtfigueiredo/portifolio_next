import styled from 'styled-components'

export const DefaultBtn = styled.a`
	width: 10em;
	padding: 0.75rem 1rem;
	margin: 0 0.5rem;
	margin-bottom: 1rem;
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;

	text-decoration: none;
	text-transform: capitalize;

	background-color: ${props => props.color || 'tomato'};
	box-shadow: 0 4px 8px 0 ${props => `${props.color}55`};
	backdrop-filter: blur(7px);
	-webkit-backdrop-filter: blur(7px);

	border-radius: var(--rounded);

	transition: all 300ms ease-in-out;

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
		opacity: 0.8;
	}
`

export const CardBtn = styled.div`
	min-width: 10em;
	width: fit-content;
	padding: 0.75rem 1rem;
	margin: 0 0.5rem;
	margin-bottom: 1rem;
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;

	text-decoration: none;
	text-transform: capitalize;

	background-color: ${props => props.color || 'tomato'};
	box-shadow: 0 4px 8px 0 ${props => `${props.color}55`};
	backdrop-filter: blur(7px);
	-webkit-backdrop-filter: blur(7px);

	border-radius: var(--rounded);

	transition: all 300ms ease-in-out;

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
		opacity: 0.8;
	}
`
