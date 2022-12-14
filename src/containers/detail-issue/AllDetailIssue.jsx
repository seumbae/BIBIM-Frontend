import React, { useState, useEffect } from "react";
import { getSecurityList } from "../../services/axios";
import AllIssueTableList from "../../components/detail-issue/AllIssueTable";
import styled from "styled-components";
import Filter from "../../components/Filter";

const ResultArea = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 1rem;
	flex: 1;
	margin-right: 9%;
`;

const Lists = styled.div`
	min-width: 700px;
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 0.5rem;
`;

const None = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	color: #4a4949;
	font-size: 0.8rem;
`;

const AllDetailIssueContainer = () => {
	const [issueData, setIssueData] = useState([]);

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
		getSecurityList().then((res) => {
			setIssueData(JSON.parse(res.data.result));
		});
	}, []);

	return (
		<ResultArea>
			<Filter data={data} checked={checked} setChecked={setChecked} />
			{issueData.length > 0 ? (
				<Lists>
					{issueData.map((oneProjectItem) => (
						<AllIssueTableList
							key={oneProjectItem["_id"]["$oid"]}
							dataList={oneProjectItem}
						/>
					))}
				</Lists>
			) : (
				<None>검사결과가 존재하지 않아 Issue가 존재하지 않습니다.</None>
			)}
		</ResultArea>
	);
};

export default AllDetailIssueContainer;
