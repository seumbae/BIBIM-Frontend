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
const DescArea = styled.div`
	max-width: 60%;
	color: #555555;
	font-size: 0.8rem;
	margin-top: 0.5rem;
`;
const RepoArea = styled.div`
	display: flex;
	justify-content: space-between;
	color: #555555;
	font-size: 0.8rem;
	margin-top: 0.5rem;
`;

const List = ({ onHandleCheck, data, created, updated }) => {
	return (
		<ListWrapper>
			<CheckBox
				type="checkbox"
				value={data.pipeline_name}
				onClick={onHandleCheck}
			/>
			<Info>
				<div style={{ display: "flex" }}>
					<div style={{ fontWeight: 500 }}>{data.pipeline_name}</div>
					<AdditionalInfos>
						<div>Owner: {data.owner}</div>
						<div>Created: {created}</div>
						<div>Updated: {updated}</div>
					</AdditionalInfos>
				</div>
				<RepoArea>
					<div>Repository URL: {data.repo_url}</div>
					<AdditionalInfos>
						{Object.entries(data.tool_list).map(([key, value]) => {
							if (key !== "BUILD")
								return (
									<div key={key}>
										#{value[0].replace(/^[a-z]/, (char) => char.toUpperCase())}
									</div>
								);
						})}
					</AdditionalInfos>
				</RepoArea>
				<DescArea>{data.description}</DescArea>
			</Info>
		</ListWrapper>
	);
};

export default List;
