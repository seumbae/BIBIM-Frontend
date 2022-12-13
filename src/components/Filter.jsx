import { useState } from "react";
import styled from "styled-components";
import Categories from "./Category";

const FilterBody = styled.div`
	width: 250px;
	background-color: #eeeef2;
	padding: 1rem;
	border-radius: 6.4px;
`;
const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const ClearBtn = styled.div`
	font-size: 0.8rem;
	font-weight: 600;
	padding: 0.2rem 0.4rem;
	margin-right: 0.5rem;
	color: #dd4433;
	border: 1px solid #dd4433;
	&:hover {
		cursor: pointer;
		color: #ffffff;
		background-color: #dd4433;
	}
`;

const Filter = ({ data, checked, setChecked }) => {
  const onHandleClear = () => {
    setChecked([]);
  }
	return (
		<FilterBody>
			<TitleWrapper>
				<Title>Filter</Title>
				<Container>
					{checked.length > 0 ? <ClearBtn onClick={onHandleClear}>Clear Filters</ClearBtn> : null}
				</Container>
			</TitleWrapper>
			<Categories data={data} checkList={checked} setChecked={setChecked}/>
		</FilterBody>
	);
};

export default Filter;

// {Object.values(item[0]).map((item, index) => {
//   return (
//     <ItemWrapper key={index}>
//       <Item>{item}</Item>
//       <CheckBox type="checkbox" />
//     </ItemWrapper>
//   );
// })}
