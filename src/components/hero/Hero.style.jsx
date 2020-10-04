import styled from 'styled-components';
import defaultImage from '../../images/room-1.jpeg';

export const HeroContainer = styled.div`
	min-height: 60vh;
	background: url(${({ img }) => (img ? img[0] : defaultImage)}) center/cover
		no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;
