import styled from "styled-components";

const ListWrapper = styled.div`
	background-color: #ffffff;
	border-radius: 6.4px;
	padding: 12px 8px;
	display: flex;
`;
const Info = styled.div`
	position: relative;
	flex: 1;
`;

const CheckBox = styled.input`
	margin: 0;
	appearance: none;
	width: 15px;
	height: 15px;
	border: 2px solid #000000;
	border-radius: 3px;
	margin-right: 1rem;
	cursor: pointer;
	&:checked {
		background-color: #000000;
		border: 2px solid #000000;
	}
`;
const AdditionalInfos = styled.div`
	display: flex;
	color: #555555;
	font-size: 0.8rem;
	gap: 1rem;
	position: absolute;
	right: 1rem;
`;
const Desc = styled.div`
	max-width: 60%;
	color: #555555;
	font-size: 0.8rem;
	margin-top: 1rem;
`;

const List = ({ onHandleCheck, jenkins }) => {
	return (
		<ListWrapper>
			<CheckBox
				type="checkbox"
				value={jenkins.jenkinsfile_name}
				onClick={onHandleCheck}
			/>
			<Info>
				<div style={{ display: "flex" }}>
					<div style={{ fontWeight: 500 }}>{jenkins.jenkinsfile_name}</div>
					<AdditionalInfos>
						{Object.entries(jenkins.tool_list).map(([key, value]) => {
							if (key !== "BUILD")
								return (
									<div key={key}>
										#{value[0].replace(/^[a-z]/, (char) => char.toUpperCase())}
									</div>
								);
						})}
						<div>Owner: {jenkins.owner}</div>
						<div>Created: 2022-12-12</div>
						<div>Updated: 2022-12-12</div>
					</AdditionalInfos>
				</div>
				<Desc>{jenkins.description}</Desc>
			</Info>
		</ListWrapper>
	);
};

export default List;
