import styled from 'styled-components'
import {SummoningCard} from "../../lib/types";
import DisciplineIcon from "../../components/DisciplineIcon";

type SummoningCardProps = {
	card: SummoningCard
}

export default function SummoningCardC ({card} : SummoningCardProps) {
	let textTitle = 'End of Game'

	if (card.textType === 'startofturn') {
		textTitle = 'Start of Turn'
	}

	return <Card className={"card"}>
		<Header>
			<Title $name={card.name}>{card.name}</Title>
			<Icons>
				{DisciplineIcon(card.disciplines[0])}
				{DisciplineIcon(card.disciplines[1])}
			</Icons>
		</Header>
		<Image style={{backgroundImage: `url(${card.image})`}} />
		<BottomContainer>
			<EndOfGame>{textTitle}</EndOfGame>
			<Description>
				{card.text}
			</Description>
		</BottomContainer>
	</Card>
}

const Card = styled.div`
	border: 60px solid black;
`

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px 20px;
`

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;	
	
	.discipline-icon {
		width: 50px;
		height: 50px;
	}
`

const Title = styled.div<{$name: string}>`
	font-size: ${props => props.$name === 'Shepherd of the Damned' ? '44px' : '64px'};
	text-align: center;
	font-weight: 800;
	
`

const EndOfGame = styled.div`
	font-size: 48px;
	font-weight: 600;
	
`
const Image = styled.div`
	height: 600px;
	background: center center no-repeat;
	background-size: cover;
`

const Description = styled.div`
	font-size: 32px;
	line-height: 1.4;
`

const BottomContainer = styled.div`
	padding: 20px;
`
