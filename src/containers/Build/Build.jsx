import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LazyLog, ScrollFollow, LineContent, LinePart } from "react-lazylog";
import { useState } from "react";

import Branch from "../../components/Branch";
import Header from "../common/Header";
import CloseIcon from "@mui/icons-material/Close";
import { useLayoutEffect } from "react";
import HorizonLine from "../../components/HorizonLine";

const IconWrapper = styled.div`
	display: flex;
	height: 3rem;
	align-items: center;
	margin-left: 2.5rem;
`;
const Close = styled(CloseIcon)`
	cursor: pointer;
	padding-left: 1rem;
`;
const HeaderWrapper = styled.div`
	margin-left: 3.5rem;
	margin-top: 1rem;
`;
const TitleWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;
const Title = styled.div`
	font-size: 1.3rem;
	font-weight: 700;
	margin-right: 1rem;
`;
const DetailInfoWrapper = styled.div`
	font-size: 0.9rem;
	color: #555555;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const OwnerRepoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const OwnerRepo = styled.div`
	display: flex;
	gap: 1rem;
`;
const JenkinsWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;
const Tools = styled.div`
	font-size: 0.8rem;
	display: flex;
	gap: 1rem;
`;

const DescWrapper = styled.div`
	max-width: 70%;
`;

const LogViewer = ({ setStages }) => {
	let stage = [];
	// setStages(prev=> [...prev, stage]);
	const url = "http://222.234.124.57:52200/api/v1/pipeline/getStream";
	const body = { pipeline_name: "test2", branch: "master" };
	return  (
	<div style={{ height: 600, width: "90%",margin: '2rem auto 0'  }}>
				<ScrollFollow
					startFollowing
					render={({ follow, onScroll }) => (
						<LazyLog
							url={url}
							stream
							follow={follow}
							onScroll={onScroll}
							fetchOptions={{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(body),
							}}
							formatPart={(text) => {
								if (text.includes("[Pipeline] { (")) {
									stage.push(text);
								}
								return text;
							}}
						/>
					)}
				/>
			</div>
	);
}

const Build = () => {
	const location = useLocation();
	const navigation = useNavigate();
	const [data, setData] = useState([]);
	const [stages, setStages] = useState([]);
	const onHandleClick = () => {
		navigation(-1);
	};

	useLayoutEffect(() => {
		setData(location.state.pipeline);
	}, []);

	console.log(stages);

	return (
		<>
			<Header userName={"admin"} />
			<IconWrapper>
				<Close onClick={onHandleClick} fontSize="large" />
			</IconWrapper>
			{data.length > 0 ? (
				<HeaderWrapper>
					<TitleWrapper>
						{/* TODO: undefined면 loading 추가 */}
						<Title>{data[0].pipeline_name}</Title>
						<Branch name={data[0].branch} />
					</TitleWrapper>
					<DetailInfoWrapper>
						<OwnerRepoWrapper>
							<OwnerRepo>
								<div>Owner: {data[0].owner}</div>
								<div>Repository URL: {data[0].repo_url}</div>
							</OwnerRepo>
						</OwnerRepoWrapper>
						<JenkinsWrapper>
							<div>Jenkins File: {data[0].jenkinsfile_name}</div>
							<Tools>
								{Object.entries(data[0].tool_list).map(([key, value]) => {
									if (key !== "BUILD")
										return (
											<div key={key}>
												#
												{value[0].replace(/^[a-z]/, (char) =>
													char.toUpperCase()
												)}
											</div>
										);
								})}
							</Tools>
						</JenkinsWrapper>
						<DescWrapper>Description: {data[0].description}</DescWrapper>
					</DetailInfoWrapper>
					<HorizonLine />
				</HeaderWrapper>
			) : null}
			<LogViewer setStages={setStages}/>

			
		</>
	);
};

export default Build;
