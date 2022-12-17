import React, { useState, useEffect } from "react";
import { getSecurityList } from "../../services/axios";

import Skeleton from "@mui/material/Skeleton";
import AllIssueTableList from "../../components/detail-issue/AllIssueTable";
import styled from "styled-components";
import Filter from "../../components/Filter";
import HorizonLine from "../../components/HorizonLine";

const ResultArea = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 1rem;
	flex: 1;
	margin-right: 9%;
`;

const Lists = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 0.5rem;
`;

const Skeletons = styled.div`
	background-color: #ffffff;
	border-radius: 6.4px;
	padding: 12px 8px;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-left: 2rem;
	width: 100%;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const LoadingSkeleton = () => {
	return (
		<>
			<Skeletons>
				<Wrapper>
					<Skeleton variant="text" width={360} sx={{ fontSize: "1rem" }} />
					<Skeleton variant="text" width={120} sx={{ fontSize: "1rem" }} />
				</Wrapper>
				<Wrapper>
					<Skeleton variant="text" width={360} sx={{ fontSize: "1rem" }} />
					<Skeleton variant="text" width={360} sx={{ fontSize: "1rem" }} />
				</Wrapper>
				<HorizonLine />
			</Skeletons>
		</>
	);
};

const AllDetailIssueContainer = () => {
	const [issueData, setIssueData] = useState([]);
	const [loading, setLoding] = useState(true);
	const [data, setData] = useState({
		Languages: ["Javascript", "Python"],
		Stages: {
			SIS: ["Gitleaks", "ggshield"],
			SAST: ["CodeQL", "Semgrep"],
			DAST: ["OWASP ZAP"],
			SCA: ["OWASP DependencyCheck"],
		},
		Tag: ["CWE", "OWASP"],
		"Security Category": {
			CWE: [
				"CWE-787 - Out of bounds write",
				"CWE-79 - Cross-Site Scription (XSS)",
				"CWE-89 - SQL Injection",
				"CWE-20 - Improper Input Validation",
				"CWE-125 - Out of bounds read",
				"CWE-78 - OS Command Injection",
				"CWE-416 - Use After Free",
				"CWE-22 - Path Traversal",
				"CWE-352 - Cross-Site Request Forgery (CSRF)",
			],
		},
	});

	const [checked, setChecked] = useState({
		Languages: [],
		SIS: [],
		SAST: [],
		DAST: [],
		SCA: [],
		Tag: [],
	});
	useEffect(() => {
		getSecurityList()
			.then((res) => {
				setIssueData(JSON.parse(res.data.result));
			})
			.then(setLoding(false));
	}, []);

	return (
		<ResultArea>
			<Filter data={data} checked={checked} setChecked={setChecked} />
			{loading ? (
				<LoadingSkeleton />
			) : (
				<Lists>
					{issueData.map((oneProjectItem) => (
						<AllIssueTableList
							key={oneProjectItem["_id"]["$oid"]}
							dataList={oneProjectItem}
						/>
					))}
				</Lists>
			)}
		</ResultArea>
	);
};

export default AllDetailIssueContainer;
