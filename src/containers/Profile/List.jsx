import styled from "styled-components";
import SellIcon from "@mui/icons-material/Sell";

import HorizonLine from "../../components/HorizonLine";
import { useState } from "react";

const ListWrapper = styled.div``;
const InfoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
	font-size: 1rem;
  color: #353535;
`;
const Details = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
const Detail = styled.div`
	font-size: 0.8rem;
	color: #707070;
`;

const TagIcon = styled(SellIcon)`
	font-size: 0.9rem !important;
	color: #707070;
`;

const TagWrapper = styled.div`
	display: flex;
	gap: 0.3rem;
`;

const Type = styled.div`
	font-size: 0.8rem;
	color: ${(props) => (props.activated ? "#00AA00" : "#DD4433")};
`;

const Btn = styled.div`
  font-size: 0.8rem;
  color: #FFFFFF;
	background-color: ${(props) => (props.activated ? "#00AA00" : "#DD4433")};
  border-radius: 6.4px;
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const List = ({ data }) => {
	const [activated, setActivated] = useState(true);

  const onHandleActive = () => {
    setActivated((prev) => !prev);
  }
	return (
		<ListWrapper>
			<InfoWrapper>
				{/* TODO: Title Click하면 세부페이지로 이동 */}
				<Title>{data.data}</Title>
				<Details>
					<Detail>{data.Languages}</Detail>
					<TagWrapper>
						<TagIcon />
						{data.Tag.map((tag, index) => {
							return <Detail key={index}>{tag}</Detail>;
						})}
					</TagWrapper>
					<Type activated={activated}>Input Vaildation</Type>
          <Btn onClick={onHandleActive} activated={activated}>{activated ? 'Activated' : 'Deactivated'}</Btn>
				</Details>
			</InfoWrapper>
			<HorizonLine />
		</ListWrapper>
	);
};

export default List;
