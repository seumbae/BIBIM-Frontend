import styled from "styled-components";
import SellIcon from "@mui/icons-material/Sell";
import HorizonLine from "../HorizonLine";
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;

const Body = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const Footer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Messasge = styled.div`
	max-width: 80%;
	font-size: 0.9rem;
`;
const ScoreArea = styled.div`
	display: flex;
	gap: 0.5rem;
	font-size: 0.8rem;
	color: #707070;
	align-items: center;
`;
const Score = styled.div`
	color: #dd4433;
	font-weight: 600;
	font-size: 1rem;
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const Detail = styled.div`
	display: flex;
	gap: 0.2rem;
	align-items: center;
	font-size: 0.8rem;
	color: #707070;
`;

const URL = styled.div`
	width: 300px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
const TagArea = styled.div`
	display: flex;
	gap: 0.5rem;
`;
const Tag = styled.div`
	display: flex;
	aling-items: center;
	gap: 0.2rem;
`;
const TagIcon = styled(SellIcon)`
	font-size: 0.9rem !important;
	color: #707070;
`;

const ValueText = styled.div`
	color: ${({ color }) => (color ? color : "#707070")};
`;

const PropetyValue = ({ value }) => {
	const colorList = {
		warning: "#F58737",
		error: "#DD4433",
		"very-high": "#00AA00",
		high: "#2181B8",
		medium: "#F58737",
		low: "#F5C037",
		informational: "#263690",
		None: "#707070",
	};

	return <ValueText color={colorList[value]}>{value}</ValueText>;
};

const DetailIssueComponent = ({ data, pipelineName, stage, tool }) => {
	return (
		<Container>
			<Body>
				<Messasge>{data.message}</Messasge>
				<ScoreArea>
					Score
					<Score>
						{data.cvssv3 === 0 || data.cvssv3 === null
							? "-"
							: parseFloat(data.cvssv3).toFixed(2)}
					</Score>
				</ScoreArea>
			</Body>
			<Footer>
				<Details>
					<Detail>
						{pipelineName}
						<URL>
							{data.uri.charAt(0) !== "/" ? " /" + data.uri : " " + data.uri}
						</URL>
					</Detail>
					<Detail>
						Level:{" "}
						<PropetyValue
							value={
								data.toolProblemSeverity === "" ||
								data.toolProblemSeverity === "None"
									? "None"
									: data.toolProblemSeverity
							}
						>
							{data.toolProblemSeverity}
						</PropetyValue>
					</Detail>
					<Detail>
						Precision:{" "}
						<PropetyValue
							value={
								data.toolPrecision === "" || data.toolPrecision === "None"
									? "None"
									: data.toolPrecision.split(" ")[0].toLowerCase()
							}
						>
							{data.toolPrecision}
						</PropetyValue>
					</Detail>
					<Detail>Line: {data.startLine}</Detail>
				</Details>
				<TagArea>
					<Tag>
						<TagIcon />
						{/* TODO: parent에서 Stage나 툴 받아와서 더 보여주기 */}
						<Detail>{data.cweId ? "cwe" : "owasp"}</Detail>
					</Tag>
					{stage ? (
						<Tag>
							<TagIcon />
							<Detail>{stage}</Detail>
						</Tag>
					) : null}
					{tool ? (
						<Tag>
							<TagIcon />
							<Detail>{tool}</Detail>
						</Tag>
					) : null}
				</TagArea>
			</Footer>
			<HorizonLine />
		</Container>
	);
};

export default DetailIssueComponent;
